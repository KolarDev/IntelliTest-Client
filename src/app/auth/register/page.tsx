'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, User, Building, GraduationCap, Globe } from 'lucide-react';
import { Input } from '../../../components/Input';
import { FormButton } from '../../../components/FormButton';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { registerOrganization, clearError } from '../../../store/slices/authSlice';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    domain: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase, lowercase, and number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Organization name validation
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Organization name is required';
    }

    // Domain validation (optional but must be valid if provided)
    if (formData.domain && !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(formData.domain)) {
      newErrors.domain = 'Please enter a valid domain (e.g., school.edu)';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const { confirmPassword, ...registerData } = formData;
    dispatch(registerOrganization(registerData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">IntelliTest</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Create your account
          </h2>
          <p className="mt-2 text-textGrey">
            Start your free trial and transform your school today
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

            {/* Personal Information */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First name"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
                icon={<User className="h-5 w-5" />}
                error={errors.firstName}
                required
              />

              <Input
                label="Last name"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Doe"
                icon={<User className="h-5 w-5" />}
                error={errors.lastName}
                required
              />
            </div>

            <Input
              label="Email address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="john@school.edu"
              icon={<Mail className="h-5 w-5" />}
              error={errors.email}
              required
            />

            {/* Password Fields */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a strong password"
                  icon={<Lock className="h-5 w-5" />}
                  error={errors.password}
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
                  label="Confirm password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
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
            </div>

            {/* Organization Information */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Details</h3>
              
              <div className="space-y-4">
                <Input
                  label="Organization name"
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange('organizationName', e.target.value)}
                  placeholder="Springfield High School"
                  icon={<Building className="h-5 w-5" />}
                  error={errors.organizationName}
                  required
                />

                <Input
                  label="Domain (optional)"
                  type="text"
                  value={formData.domain}
                  onChange={(e) => handleInputChange('domain', e.target.value)}
                  placeholder="springfield.edu"
                  icon={<Globe className="h-5 w-5" />}
                  error={errors.domain}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            <FormButton
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              Create Account
            </FormButton>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-textGrey">
              Already have an account?{' '}
              <Link 
                href="/auth/login" 
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="text-center text-sm text-textGrey">
          <p className="mb-2">🚀 Free 30-day trial • 🎓 No credit card required</p>
          <p>Join 400+ schools already using IntelliTest</p>
        </div>
      </div>
    </div>
  );
}