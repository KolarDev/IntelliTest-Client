import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/70 via-white to-indigo-50/90">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-12 md:flex-row md:items-center md:gap-16 md:px-10">
        <div className="mx-auto w-full max-w-md text-center md:mx-0 md:text-left">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
              IT
            </span>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">IntelliTest</h1>
              <p className="text-sm text-gray-600">
                Intelligent assessments and student management for forward-thinking schools.
              </p>
            </div>
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
