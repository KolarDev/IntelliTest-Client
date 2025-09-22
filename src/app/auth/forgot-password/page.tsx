'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, GraduationCap, CheckCircle } from 'lucide-react';
import { Input } from '../../../components/Input';
import { FormButton } from '../../../components/FormButton';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { forgotPassword, clearError } from '../../../store/slices/authSlice';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const validateForm = () => {
    const newErrors: { email?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await dispatch(forgotPassword({ email })).unwrap();
      setIsSubmitted(true);
    } catch (err) {
      // Error is handled by Redux
    }
  };

  const handleResend = () => {
    dispatch(forgotPassword({ email }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">IntelliTest</span>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Check your email
            </h2>
            <p className="mt-2 text-textGrey">
              We've sent a password reset OTP to <strong>{email}</strong>
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 text-center">
                Enter the 6-digit code we sent to your email to reset your password.
              </p>
              
              <div className="flex justify-center">
                <Link href="/auth/reset-password">
                  <FormButton className="min-w-[200px]">
                    Enter Reset Code
                  </FormButton>
                </Link>
              </div>

              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-textGrey mb-3">
                  Didn't receive the email?
                </p>
                <div className="space-y-2">
                  <button
                    onClick={handleResend}
                    disabled={loading}
                    className="text-sm text-purple-600 hover:text-purple-500 font-medium"
                  >
                    {loading ? 'Sending...' : 'Resend email'}
                  </button>
                  <div className="text-xs text-textGrey">
                    Check your spam folder or try a different email address
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <Link 
              href="/auth/login" 
              className="inline-flex items-center text-sm text-purple-600 hover:text-purple-500 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">IntelliTest</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Forgot password?
          </h2>
          <p className="mt-2 text-textGrey">
            No worries, we'll send you reset instructions
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={<Mail className="h-5 w-5" />}
              error={errors.email}
              required
            />

            <FormButton
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              Send reset instructions
            </FormButton>
          </form>

          <div className="mt-6 text-center">
            <Link 
              href="/auth/login" 
              className="inline-flex items-center text-sm text-purple-600 hover:text-purple-500 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-textGrey">
          <p>
            Can't access your email?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-500">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}