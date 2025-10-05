"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

type ToastVariant = "success" | "error";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

interface ToastRecord extends ToastOptions {
  id: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  pushToast: (toast: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const createToastId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const pushToast = useCallback((toast: ToastOptions) => {
    setToasts((previous) => [
      ...previous,
      {
        id: createToastId(),
        variant: toast.variant ?? "success",
        title: toast.title,
        description: toast.description,
      },
    ]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((previous) => previous.filter((toast) => toast.id !== id));
  }, []);

  const contextValue = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[1200] flex max-w-sm flex-col gap-3 md:right-6 md:top-6">
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

const ToastCard = ({ toast, onDismiss }: { toast: ToastRecord; onDismiss: (id: string) => void }) => {
  useEffect(() => {
    const timeout = window.setTimeout(() => onDismiss(toast.id), 4200);
    return () => window.clearTimeout(timeout);
  }, [onDismiss, toast.id]);

  const icon = toast.variant === "success" ? (
    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
  ) : (
    <AlertCircle className="h-5 w-5 text-rose-600" />
  );

  const accentStyles =
    toast.variant === "success"
      ? "border-emerald-500/20 bg-emerald-50"
      : "border-rose-500/20 bg-rose-50";

  const titleStyles = toast.variant === "success" ? "text-emerald-700" : "text-rose-700";

  return (
    <div className="pointer-events-auto overflow-hidden rounded-2xl border border-black/5 bg-white/95 shadow-lg backdrop-blur">
      <div className="flex items-start gap-3 px-4 py-3">
        <div className={`rounded-lg p-2 ${accentStyles}`}>{icon}</div>
        <div className="flex-1 space-y-1">
          <p className={`text-sm font-semibold ${titleStyles}`}>{toast.title}</p>
          {toast.description ? (
            <p className="text-sm text-gray-600">{toast.description}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="rounded-full p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
