"use client";

import React from 'react';
import { Menu } from 'lucide-react';
import OrganizationSection from './sections/OrganizationSection';
import StaffSection from './sections/StaffSection';
import StudentsSection from './sections/StudentsSection';
import TestsSection from './sections/TestsSection';
import ReportsSection from './sections/ReportsSection';

interface MainContentProps {
  activeSection: string;
  isSidebarCollapsed: boolean;
  userRole?: string;
  userName?: string;
  userEmail?: string;
  organizationName?: string;
}

const MainContent: React.FC<MainContentProps> = ({
  activeSection,
  isSidebarCollapsed,
  userRole,
  userName,
  userEmail,
  organizationName
}) => {
  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'ORG_ADMIN': return 'Organization Admin';
      case 'STAFF': return 'Staff Member';
      case 'STUDENT': return 'Student';
      default: return role;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ORG_ADMIN': return 'bg-purple-100 text-purple-800';
      case 'STAFF': return 'bg-blue-100 text-blue-800';
      case 'STUDENT': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'organization':
        return <OrganizationSection userRole={userRole} />;
      case 'staff':
        return <StaffSection userRole={userRole} />;
      case 'students':
        return <StudentsSection userRole={userRole} />;
      case 'tests':
        return <TestsSection userRole={userRole} />;
      case 'reports':
        return <ReportsSection userRole={userRole} />;
      default:
        return <OrganizationSection userRole={userRole} />;
    }
  };

  return (
    <div className={`
      flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
      ${isSidebarCollapsed ? 'ml-0 lg:ml-16' : 'ml-0 lg:ml-64'}
    `}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button - only show on mobile when sidebar is collapsed */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {activeSection}
              </h1>
            </div>

            {/* Desktop title */}
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {activeSection}
              </h1>
            </div>
            
            {/* User info */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium text-gray-900">{userName}</div>
                <div className="text-xs text-gray-500">{userEmail}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(userRole || '')}`}>
                {getRoleDisplay(userRole || '')}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {renderSectionContent()}
        </div>
      </main>
    </div>
  );
};

export default MainContent;