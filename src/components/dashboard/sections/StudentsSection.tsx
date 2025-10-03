"use client";

import React from 'react';
import { GraduationCap, UserPlus, BookOpen, Users, AlertTriangle } from 'lucide-react';

interface StudentsSectionProps {
  userRole?: string;
}

const StudentsSection: React.FC<StudentsSectionProps> = ({ userRole }) => {
  const hasAccess = userRole === 'ORG_ADMIN' || userRole === 'STAFF';

  if (!hasAccess) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Restricted</h3>
          <p className="text-gray-600 mb-4">
            This section is only available to Organization Administrators and Staff Members.
          </p>
          <div className="text-sm text-gray-500">
            Please contact your organization administrator if you need access to student management features.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
              <p className="text-gray-600 mt-1">
                Manage students, classes, and academic records within your organization
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {userRole === 'ORG_ADMIN' ? 'Full Access' : 'Staff Access'}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Active students</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Classes</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Active classes</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Grade Levels</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Different levels</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-xl">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New This Month</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Recent additions</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-xl">
              <UserPlus className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Directory */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Student Directory</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Browse and manage all students in your organization with their academic information.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • View student profiles
            <br />
            • Academic records
            <br />
            • Contact information
            <br />
            • Enrollment status
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
            View Students
          </button>
        </div>

        {/* Class Management */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Class Management</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Create and manage classes, assign students, and organize academic groups.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Create new classes
            <br />
            • Assign students to classes
            <br />
            • Manage class schedules
            <br />
            • Track class performance
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
            Manage Classes
          </button>
        </div>

        {/* Add Students */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <UserPlus className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Add Students</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Register new students individually or in bulk with their academic information.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Individual registration
            <br />
            • Bulk student import
            <br />
            • Generate credentials
            <br />
            • Class assignments
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
            Add Students
          </button>
        </div>

        {/* Academic Records */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Academic Records</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            View and manage student academic performance, grades, and progress tracking.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Test scores & grades
            <br />
            • Progress tracking
            <br />
            • Performance analytics
            <br />
            • Academic reports
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium">
            View Records
          </button>
        </div>

        {/* Student Analytics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-pink-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Student Analytics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Analyze student performance data and generate insights for improved outcomes.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Performance trends
            <br />
            • Comparative analysis
            <br />
            • Learning insights
            <br />
            • Custom reports
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition-colors text-sm font-medium">
            View Analytics
          </button>
        </div>

        {/* Communication */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Users className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Communication</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Send announcements, notifications, and messages to students and parents.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Student notifications
            <br />
            • Parent communication
            <br />
            • Bulk messaging
            <br />
            • Announcement system
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors text-sm font-medium">
            Send Message
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-green-300 hover:bg-green-50 transition-colors group">
            <GraduationCap className="h-6 w-6 text-gray-400 group-hover:text-green-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-green-900">View Students</div>
            <div className="text-xs text-gray-500 group-hover:text-green-600">Browse directory</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-green-300 hover:bg-green-50 transition-colors group">
            <UserPlus className="h-6 w-6 text-gray-400 group-hover:text-green-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-green-900">Add Student</div>
            <div className="text-xs text-gray-500 group-hover:text-green-600">Register new</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-green-300 hover:bg-green-50 transition-colors group">
            <Users className="h-6 w-6 text-gray-400 group-hover:text-green-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-green-900">Manage Classes</div>
            <div className="text-xs text-gray-500 group-hover:text-green-600">Organize groups</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-green-300 hover:bg-green-50 transition-colors group">
            <BookOpen className="h-6 w-6 text-gray-400 group-hover:text-green-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-green-900">View Records</div>
            <div className="text-xs text-gray-500 group-hover:text-green-600">Academic data</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;