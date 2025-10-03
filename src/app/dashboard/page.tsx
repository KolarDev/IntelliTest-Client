'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMe, logoutUser, restoreAuth } from '../../store/slices/authSlice';
import Sidebar from '../../components/dashboard/Sidebar';
import MainContent from '../../components/dashboard/MainContent';
import ToastContainer from '../../components/ui/ToastContainer';
import { ToastProvider } from '../../contexts/ToastContext';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('organization');

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
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          onToggleSidebar={toggleSidebar}
          userRole={user?.role}
        />

        {/* Main Content Area */}
        <MainContent
          activeSection={activeSection}
          isSidebarCollapsed={isSidebarCollapsed}
          userRole={user?.role}
          userName={`${user?.firstName || ''} ${user?.lastName || ''}`.trim()}
          userEmail={user?.email}
          organizationName={user?.organization?.name}
        />

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}
