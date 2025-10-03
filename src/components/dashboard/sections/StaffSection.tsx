"use client";

import React from 'react';
import { Users, UserPlus, Settings, Mail, AlertTriangle } from 'lucide-react';

interface StaffSectionProps {
  userRole?: string;
}

const StaffSection: React.FC<StaffSectionProps> = ({ userRole }) => {
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
            Please contact your organization administrator if you need access to staff management features.
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
            <div className="p-3 bg-blue-100 rounded-xl">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Staff Management</h2>
              <p className="text-gray-600 mt-1">
                Manage staff members, their roles, and permissions within your organization
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {userRole === 'ORG_ADMIN' ? 'Full Access' : 'Staff Access'}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Staff</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Active members</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Departments</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Active departments</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Invites</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting response</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Staff Directory */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Staff Directory</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            View and manage all staff members in your organization with their roles and contact information.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • View staff profiles
            <br />
            • Contact information
            <br />
            • Role assignments
            <br />
            • Department organization
          </div>
          {userRole === 'ORG_ADMIN' && (
            <button className="w-full mt-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
              Manage Staff
            </button>
          )}
        </div>

        {/* Add Staff (Admin Only) */}
        {userRole === 'ORG_ADMIN' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserPlus className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Add New Staff</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Invite new staff members to join your organization and assign appropriate roles.
            </p>
            <div className="text-xs text-gray-500 mb-4">
              • Send invitations via email
              <br />
              • Assign departments
              <br />
              • Set permissions
              <br />
              • Generate temporary passwords
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
              Invite Staff Member
            </button>
          </div>
        )}

        {/* Role Management (Admin Only) */}
        {userRole === 'ORG_ADMIN' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Role Management</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Configure staff roles, permissions, and access levels within the organization.
            </p>
            <div className="text-xs text-gray-500 mb-4">
              • Define custom roles
              <br />
              • Set permission levels
              <br />
              • Manage access controls
              <br />
              • Department assignments
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
              Configure Roles
            </button>
          </div>
        )}

        {/* My Profile (Staff View) */}
        {userRole === 'STAFF' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">My Profile</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Update your personal information, contact details, and account preferences.
            </p>
            <div className="text-xs text-gray-500 mb-4">
              • Personal information
              <br />
              • Contact details
              <br />
              • Account preferences
              <br />
              • Change password
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <Users className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-blue-900">View All Staff</div>
            <div className="text-xs text-gray-500 group-hover:text-blue-600">Browse directory</div>
          </button>
          
          {userRole === 'ORG_ADMIN' && (
            <>
              <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <UserPlus className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mb-2" />
                <div className="font-medium text-gray-900 group-hover:text-blue-900">Add Staff</div>
                <div className="text-xs text-gray-500 group-hover:text-blue-600">Invite new member</div>
              </button>
              
              <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <Settings className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mb-2" />
                <div className="font-medium text-gray-900 group-hover:text-blue-900">Manage Roles</div>
                <div className="text-xs text-gray-500 group-hover:text-blue-600">Configure permissions</div>
              </button>
            </>
          )}
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <Mail className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-blue-900">Contact Staff</div>
            <div className="text-xs text-gray-500 group-hover:text-blue-600">Send messages</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;