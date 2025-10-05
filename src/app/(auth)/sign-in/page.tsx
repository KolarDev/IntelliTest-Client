"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/button";
import { useToast } from "@/components/ui/toastProvider";

interface SignInFormState {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [formState, setFormState] = useState<SignInFormState>({
    email: "",
    password: "",
  });
  const { pushToast } = useToast();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.email || !formState.password) {
      pushToast({
        title: "Incomplete details",
        description: "Enter both your email and password to continue.",
        variant: "error",
      });
      return;
    }

    pushToast({
      title: "Signed in",
      description: "Welcome back to IntelliTest.",
      variant: "success",
    });
  };

  return (
    <div className="rounded-3xl border border-black/10 bg-white/95 p-8 shadow-xl backdrop-blur">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Sign in to IntelliTest</h2>
        <p className="text-sm text-gray-600">
          Access your assessments, classes, and real-time performance dashboards.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="text-left">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="you@schooldomain.com"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:from-blue-700 hover:to-purple-700"
        >
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-semibold text-purple-600 hover:text-purple-700">
          Create one
        </Link>
      </p>
    </div>
  );
}
