"use client";

import React from 'react';
import { Building2, Settings, Users, Shield, AlertTriangle } from 'lucide-react';

interface OrganizationSectionProps {
  userRole?: string;
}

const OrganizationSection: React.FC<OrganizationSectionProps> = ({ userRole }) => {
  const isOrganizationAdmin = userRole === 'ORG_ADMIN';

  if (!isOrganizationAdmin) {
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
            This section is only available to Organization Administrators.
          </p>
          <div className="text-sm text-gray-500">
            Please contact your organization administrator if you need access to these features.
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
            <div className="p-3 bg-purple-100 rounded-xl">
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Organization Management</h2>
              <p className="text-gray-600 mt-1">
                Configure global organization settings and manage institutional details
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Admin Only</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Organization Details */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Organization Details</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage your organization's basic information, contact details, and institutional settings.
          </p>
          <div className="text-xs text-gray-500">
            • Organization name and description
            <br />
            • Contact information
            <br />
            • Address and location details
            <br />
            • Institutional branding
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">System Settings</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Configure system-wide settings, security policies, and operational parameters.
          </p>
          <div className="text-xs text-gray-500">
            • Security policies
            <br />
            • Test duration settings
            <br />
            • Grading configurations
            <br />
            • System preferences
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Global User Management</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Oversee all users within your organization and manage administrative access.
          </p>
          <div className="text-xs text-gray-500">
            • Admin role assignments
            <br />
            • User access controls
            <br />
            • Permission management
            <br />
            • Account oversight
          </div>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Advanced Features Coming Soon</h3>
            <p className="text-purple-100">
              We're developing additional organizational management tools to enhance your administrative experience.
            </p>
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">🏢 Multi-branch support</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📊 Advanced analytics</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🔗 Integration tools</span>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-colors group">
            <Settings className="h-6 w-6 text-gray-400 group-hover:text-purple-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-purple-900">Update Organization</div>
            <div className="text-xs text-gray-500 group-hover:text-purple-600">Modify details</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-colors group">
            <Users className="h-6 w-6 text-gray-400 group-hover:text-purple-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-purple-900">Manage Admins</div>
            <div className="text-xs text-gray-500 group-hover:text-purple-600">Add/remove access</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-colors group">
            <Shield className="h-6 w-6 text-gray-400 group-hover:text-purple-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-purple-900">Security Settings</div>
            <div className="text-xs text-gray-500 group-hover:text-purple-600">Configure policies</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-colors group">
            <Building2 className="h-6 w-6 text-gray-400 group-hover:text-purple-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-purple-900">System Config</div>
            <div className="text-xs text-gray-500 group-hover:text-purple-600">General settings</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;