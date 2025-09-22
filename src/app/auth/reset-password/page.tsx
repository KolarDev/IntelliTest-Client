'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { Input } from '../../../components/Input';
import { FormButton } from '../../../components/FormButton';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { resetPassword, clearError } from '../../../store/slices/authSlice';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loading, error } = useAppSelector((state) => state.auth);

  // Get email from URL params if available
  React.useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }));
    }
    dispatch(clearError());
  }, [searchParams, dispatch]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // OTP validation
    if (!formData.otp) {
      newErrors.otp = 'OTP is required';
    } else if (formData.otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    } else if (!/^\d+$/.test(formData.otp)) {
      newErrors.otp = 'OTP must contain only numbers';
    }

    // Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one uppercase, lowercase, and number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOtpChange = (value: string) => {
    // Only allow numbers and limit to 6 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    handleInputChange('otp', numericValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await dispatch(resetPassword({
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      })).unwrap();
      
      // Redirect to login with success message
      router.push('/auth/login?message=password-reset-success');
    } catch (err) {
      // Error is handled by Redux
    }
  };

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
            Reset your password
          </h2>
          <p className="mt-2 text-textGrey">
            Enter the code we sent to your email and create a new password
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
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              error={errors.email}
              required
            />

            <div>
              <Input
                label="6-digit verification code"
                type="text"
                value={formData.otp}
                onChange={(e) => handleOtpChange(e.target.value)}
                placeholder="000000"
                error={errors.otp}
                maxLength={6}
                className="text-center text-2xl font-mono tracking-widest"
                required
              />
              <p className="text-xs text-textGrey mt-1">
                Enter the 6-digit code sent to your email
              </p>
            </div>

            <div className="relative">
              <Input
                label="New password"
                type={showPassword ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                placeholder="Create a strong password"
                icon={<Lock className="h-5 w-5" />}
                error={errors.newPassword}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[34px] text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <Input
                label="Confirm new password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your new password"
                icon={<Lock className="h-5 w-5" />}
                error={errors.confirmPassword}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[34px] text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <FormButton
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              Reset Password
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
          <div className="space-y-2">
            <p>Didn't receive the code?</p>
            <Link 
              href="/auth/forgot-password" 
              className="text-purple-600 hover:text-purple-500 font-medium"
            >
              Resend verification code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}