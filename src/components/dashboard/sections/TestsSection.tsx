"use client";

import React from 'react';
import { FileText, Plus, BookOpen, Clock, Users, AlertTriangle } from 'lucide-react';

interface TestsSectionProps {
  userRole?: string;
}

const TestsSection: React.FC<TestsSectionProps> = ({ userRole }) => {
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
            Please contact your organization administrator if you need access to test management features.
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
            <div className="p-3 bg-orange-100 rounded-xl">
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Test Management</h2>
              <p className="text-gray-600 mt-1">
                Create, manage, and assign Computer-Based Tests (CBT) for students
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              CBT Platform
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tests</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">All tests created</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-xl">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Tests</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Currently running</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Test Sessions</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Completed sessions</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Questions</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Question bank</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-xl">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create Test */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Plus className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Create New Test</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Design and create new Computer-Based Tests with customizable settings and questions.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Multiple question types
            <br />
            • Time limits & restrictions
            <br />
            • Auto-grading setup
            <br />
            • Question randomization
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium">
            Create Test
          </button>
        </div>

        {/* Test Library */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Test Library</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Browse, edit, and manage all tests in your organization's test library.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • View all tests
            <br />
            • Edit existing tests
            <br />
            • Duplicate tests
            <br />
            • Archive old tests
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
            Browse Library
          </button>
        </div>

        {/* Question Bank */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Question Bank</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage your collection of questions organized by subjects and difficulty levels.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Subject categorization
            <br />
            • Difficulty levels
            <br />
            • Question tagging
            <br />
            • Import/export options
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
            Manage Questions
          </button>
        </div>

        {/* Test Assignment */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Test Assignment</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Assign tests to specific classes or students with scheduling and access controls.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Class assignments
            <br />
            • Individual assignments
            <br />
            • Scheduled testing
            <br />
            • Access permissions
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
            Assign Tests
          </button>
        </div>

        {/* Test Monitoring */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Test Monitoring</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Monitor live test sessions and track student progress in real-time.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Live session monitoring
            <br />
            • Student progress tracking
            <br />
            • Time remaining alerts
            <br />
            • Anti-cheating measures
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
            Monitor Tests
          </button>
        </div>

        {/* Grading & Results */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Grading & Results</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Review test results, manage grading, and generate performance reports.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Automated grading
            <br />
            • Manual review options
            <br />
            • Grade distribution
            <br />
            • Result publication
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors text-sm font-medium">
            View Results
          </button>
        </div>
      </div>

      {/* CBT Features Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Advanced CBT Features</h3>
            <p className="text-orange-100">
              IntelliTest provides comprehensive Computer-Based Testing capabilities for modern educational assessment.
            </p>
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ Timed Tests</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🔒 Secure Testing</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📊 Auto Grading</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50 transition-colors group">
            <Plus className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-orange-900">Create Test</div>
            <div className="text-xs text-gray-500 group-hover:text-orange-600">New CBT exam</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50 transition-colors group">
            <FileText className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-orange-900">Test Library</div>
            <div className="text-xs text-gray-500 group-hover:text-orange-600">Browse tests</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50 transition-colors group">
            <Users className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-orange-900">Assign Test</div>
            <div className="text-xs text-gray-500 group-hover:text-orange-600">To classes/students</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50 transition-colors group">
            <Clock className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-orange-900">Monitor</div>
            <div className="text-xs text-gray-500 group-hover:text-orange-600">Live sessions</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestsSection;