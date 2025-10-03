"use client";

import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useToast, Toast } from '../../contexts/ToastContext';

const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const { removeToast } = useToast();

  const getToastStyles = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 border-green-200',
          text: 'text-green-800',
          icon: CheckCircle,
          iconColor: 'text-green-600'
        };
      case 'error':
        return {
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-800',
          icon: XCircle,
          iconColor: 'text-red-600'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-50 border-yellow-200',
          text: 'text-yellow-800',
          icon: AlertTriangle,
          iconColor: 'text-yellow-600'
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-50 border-blue-200',
          text: 'text-blue-800',
          icon: Info,
          iconColor: 'text-blue-600'
        };
    }
  };

  const styles = getToastStyles(toast.type);
  const Icon = styles.icon;

  return (
    <div className={`
      ${styles.bg} ${styles.text} 
      p-4 rounded-xl border shadow-lg backdrop-blur-sm
      transform transition-all duration-300 ease-in-out
      hover:shadow-xl max-w-sm w-full
    `}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Icon className={`h-6 w-6 ${styles.iconColor}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm">
            {toast.title}
          </div>
          {toast.message && (
            <div className="mt-1 text-xs opacity-90">
              {toast.message}
            </div>
          )}
        </div>
        
        <button
          onClick={() => removeToast(toast.id)}
          className={`
            flex-shrink-0 p-1 rounded-lg transition-colors
            hover:bg-white/20 ${styles.iconColor}
          `}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-in slide-in-from-top-2 fade-in-0 duration-300"
        >
          <ToastItem toast={toast} />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;