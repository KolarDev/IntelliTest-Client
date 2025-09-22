'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GraduationCap, User, Users, BookOpen, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMe, logoutUser, restoreAuth } from '../../store/slices/authSlice';
import { FormButton } from '../../components/FormButton';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Try to restore auth from localStorage on mount
    dispatch(restoreAuth());
    
    // If we have a token, fetch user data
    const token = localStorage.getItem('accessToken');
    if (token && !user) {
      dispatch(getMe());
    }
  }, [dispatch, user]);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/');
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ORG_ADMIN': return 'bg-purple-100 text-purple-800';
      case 'STAFF': return 'bg-blue-100 text-blue-800';
      case 'STUDENT': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'ORG_ADMIN': return 'Organization Admin';
      case 'STAFF': return 'Staff Member';
      case 'STUDENT': return 'Student';
      default: return role;
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-textGrey">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">IntelliTest</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-700">
                Welcome back, <span className="font-medium">{user?.firstName}</span>
              </div>
              <FormButton
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="inline-flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </FormButton>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Welcome to IntelliTest
              </h1>
              <p className="mt-2 text-textGrey">
                Manage your organization's testing and student progress
              </p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user?.role || '')}`}>
              {getRoleDisplay(user?.role || '')}
            </div>
          </div>

          {/* User Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm text-textGrey">Full Name</p>
                  <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm text-textGrey">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center">
                <Settings className="h-5 w-5 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm text-textGrey">Organization</p>
                  <p className="font-medium">{user?.organization?.name || 'Not assigned'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-100">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Tests</h3>
                <p className="text-sm text-textGrey">Manage CBT exams</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Students</h3>
                <p className="text-sm text-textGrey">Manage student records</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
                <p className="text-sm text-textGrey">View performance analytics</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-100">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                <p className="text-sm text-textGrey">Organization settings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Features Coming Soon!</h2>
          <p className="text-textGrey mb-6">
            We're actively developing more features to make your educational management experience even better.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <span>✨ AI Test Generation</span>
            <span>📊 Advanced Analytics</span>
            <span>👥 Class Management</span>
            <span>📱 Mobile App</span>
          </div>
        </div>
      </main>
    </div>
  );
}