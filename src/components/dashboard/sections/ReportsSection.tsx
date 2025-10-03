"use client";

import React from 'react';
import { BarChart3, TrendingUp, PieChart, FileBarChart, Users, AlertTriangle } from 'lucide-react';

interface ReportsSectionProps {
  userRole?: string;
}

const ReportsSection: React.FC<ReportsSectionProps> = ({ userRole }) => {
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
            Please contact your organization administrator if you need access to reporting features.
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
            <div className="p-3 bg-indigo-100 rounded-xl">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
              <p className="text-gray-600 mt-1">
                Comprehensive analytics dashboard for organizational oversight and performance metrics
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Analytics Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Performance</p>
              <p className="text-3xl font-bold text-gray-900">--%</p>
              <p className="text-sm text-gray-500 mt-1">Average score</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tests Completed</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">This month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <FileBarChart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Student Participation</p>
              <p className="text-3xl font-bold text-gray-900">--%</p>
              <p className="text-sm text-gray-500 mt-1">Engagement rate</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-xl">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Growth Trend</p>
              <p className="text-3xl font-bold text-gray-900">--</p>
              <p className="text-sm text-gray-500 mt-1">Month over month</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-xl">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Analytics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Comprehensive analysis of student and organizational performance metrics.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Test score trends
            <br />
            • Subject-wise performance
            <br />
            • Class comparisons
            <br />
            • Individual progress tracking
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
            View Performance
          </button>
        </div>

        {/* Student Reports */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Student Reports</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Detailed individual and collective student performance reports.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Individual progress reports
            <br />
            • Grade distribution analysis
            <br />
            • Attendance patterns
            <br />
            • Learning outcome assessments
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
            Student Analytics
          </button>
        </div>

        {/* Test Analytics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileBarChart className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Test Analytics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Deep insights into test effectiveness, question analysis, and assessment metrics.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Question difficulty analysis
            <br />
            • Test completion rates
            <br />
            • Time analysis
            <br />
            • Answer pattern insights
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
            Test Insights
          </button>
        </div>

        {/* Organizational Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <PieChart className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Organizational Overview</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            High-level organizational metrics and key performance indicators.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • System usage statistics
            <br />
            • Department performance
            <br />
            • Resource utilization
            <br />
            • Growth metrics
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium">
            Organization KPIs
          </button>
        </div>

        {/* Custom Reports */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Custom Reports</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Create custom reports tailored to your specific organizational needs.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • Report builder interface
            <br />
            • Custom data filtering
            <br />
            • Scheduled reports
            <br />
            • Export capabilities
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
            Build Report
          </button>
        </div>

        {/* Data Export */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <FileBarChart className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Data Export</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Export data and reports in various formats for external analysis.
          </p>
          <div className="text-xs text-gray-500 mb-4">
            • CSV export
            <br />
            • PDF reports
            <br />
            • Excel spreadsheets
            <br />
            • API data access
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors text-sm font-medium">
            Export Data
          </button>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Performance chart will appear here</p>
              <p className="text-xs text-gray-400">Interactive analytics dashboard</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Distribution</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Distribution chart will appear here</p>
              <p className="text-xs text-gray-400">Subject-wise breakdown</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Features Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics Features</h3>
            <p className="text-indigo-100">
              Gain actionable insights from your educational data with comprehensive reporting and analytics tools.
            </p>
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">📊 Real-time Dashboards</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📈 Predictive Analytics</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📋 Custom Reports</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
            <TrendingUp className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-indigo-900">Performance</div>
            <div className="text-xs text-gray-500 group-hover:text-indigo-600">View trends</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
            <Users className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-indigo-900">Student Reports</div>
            <div className="text-xs text-gray-500 group-hover:text-indigo-600">Individual data</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
            <BarChart3 className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-indigo-900">Custom Report</div>
            <div className="text-xs text-gray-500 group-hover:text-indigo-600">Build custom</div>
          </button>
          
          <button className="p-4 text-left rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
            <FileBarChart className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 mb-2" />
            <div className="font-medium text-gray-900 group-hover:text-indigo-900">Export Data</div>
            <div className="text-xs text-gray-500 group-hover:text-indigo-600">Download reports</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;