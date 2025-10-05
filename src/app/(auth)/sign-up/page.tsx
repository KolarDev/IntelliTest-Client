"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/button";
import { useToast } from "@/components/ui/toastProvider";

interface UserDetails {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

interface OrganizationDetails {
  name: string;
  domain: string;
}

type SignUpStep = 1 | 2;

export default function SignUpPage() {
  const [step, setStep] = useState<SignUpStep>(1);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [organizationDetails, setOrganizationDetails] = useState<OrganizationDetails>({
    name: "",
    domain: "",
  });

  const { pushToast } = useToast();

  const progress = useMemo(() => (step === 1 ? "50%" : "100%"), [step]);

  const goNext = () => {
    if (!userDetails.email || !userDetails.password || !userDetails.confirmPassword || !userDetails.firstName || !userDetails.lastName) {
      pushToast({
        title: "Missing information",
        description: "Please complete every field before continuing.",
        variant: "error",
      });
      return;
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      pushToast({
        title: "Passwords do not match",
        description: "Confirm your password to continue.",
        variant: "error",
      });
      return;
    }

    setStep(2);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!organizationDetails.name) {
      pushToast({
        title: "Organization name is required",
        description: "Add the school or business name to finish creating your workspace.",
        variant: "error",
      });
      return;
    }

    pushToast({
      title: "Account created",
      description: `${userDetails.firstName}, your IntelliTest workspace is ready!`,
      variant: "success",
    });
  };

  const StepIndicator = () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
        <span className={step === 1 ? "text-purple-600" : "text-gray-500"}>User Account</span>
        <span className={step === 2 ? "text-purple-600" : "text-gray-400"}>Organization Profile</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: progress }}
        />
      </div>
    </div>
  );

  return (
    <div className="rounded-3xl border border-black/10 bg-white/95 p-8 shadow-xl backdrop-blur">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Create your IntelliTest workspace</h2>
        <p className="text-sm text-gray-600">
          Build your organization, invite staff, and launch assessments with ease.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        <StepIndicator />

        {step === 1 ? (
          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="First Name"
                id="firstName"
                value={userDetails.firstName}
                onChange={(value) => setUserDetails((previous) => ({ ...previous, firstName: value }))}
                autoComplete="given-name"
              />
              <Field
                label="Last Name"
                id="lastName"
                value={userDetails.lastName}
                onChange={(value) => setUserDetails((previous) => ({ ...previous, lastName: value }))}
                autoComplete="family-name"
              />
            </div>
            <Field
              label="Work Email"
              id="email"
              type="email"
              value={userDetails.email}
              onChange={(value) => setUserDetails((previous) => ({ ...previous, email: value }))}
              autoComplete="email"
              placeholder="you@schooldomain.com"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Password"
                id="password"
                type="password"
                value={userDetails.password}
                onChange={(value) => setUserDetails((previous) => ({ ...previous, password: value }))}
                autoComplete="new-password"
              />
              <Field
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                value={userDetails.confirmPassword}
                onChange={(value) => setUserDetails((previous) => ({ ...previous, confirmPassword: value }))}
                autoComplete="new-password"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <Field
              label="Organization Name"
              id="organizationName"
              value={organizationDetails.name}
              onChange={(value) => setOrganizationDetails((previous) => ({ ...previous, name: value }))}
              placeholder="e.g. Horizon Academy"
            />
            <Field
              label="Organization Domain"
              id="organizationDomain"
              value={organizationDetails.domain}
              onChange={(value) => setOrganizationDetails((previous) => ({ ...previous, domain: value }))}
              placeholder="Optional"
            />
            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/50 p-4 text-sm text-purple-700">
              Use your domain to streamline staff invitations and student onboarding. You can configure this anytime from the organization settings.
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {step === 2 ? (
            <Button
              type="button"
              onClick={() => setStep(1)}
              className="md:w-auto bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Back to account setup
            </Button>
          ) : (
            <span className="text-sm text-gray-500">Step 1 of 2</span>
          )}

          {step === 1 ? (
            <Button
              type="button"
              onClick={goNext}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 md:w-auto"
            >
              Continue to organization
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 md:w-auto"
            >
              Create workspace
            </Button>
          )}
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-semibold text-purple-600 hover:text-purple-700">
          Sign in here
        </Link>
      </p>
    </div>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}

const Field = ({
  label,
  id,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}: FieldProps) => {
  return (
    <label htmlFor={id} className="block text-left">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
      />
    </label>
  );
};
