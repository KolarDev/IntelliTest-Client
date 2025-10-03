"use client";

import React from 'react';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  FileText, 
  BarChart3, 
  Menu, 
  X,
  LogOut 
} from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { logoutUser } from '../../store/slices/authSlice';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  isCollapsed: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onToggleSidebar: () => void;
  userRole?: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  allowedRoles: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 'organization',
    label: 'Organization',
    icon: Building2,
    description: 'Organization management',
    allowedRoles: ['ORG_ADMIN']
  },
  {
    id: 'staff',
    label: 'Staff',
    icon: Users,
    description: 'Staff management',
    allowedRoles: ['ORG_ADMIN', 'STAFF']
  },
  {
    id: 'students',
    label: 'Students',
    icon: GraduationCap,
    description: 'Student management',
    allowedRoles: ['ORG_ADMIN', 'STAFF']
  },
  {
    id: 'tests',
    label: 'Tests',
    icon: FileText,
    description: 'Test management',
    allowedRoles: ['ORG_ADMIN', 'STAFF']
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart3,
    description: 'Analytics & reports',
    allowedRoles: ['ORG_ADMIN', 'STAFF']
  }
];

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  activeSection,
  onSectionChange,
  onToggleSidebar,
  userRole
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push('/');
  };

  const filteredMenuItems = menuItems.filter(item => 
    !userRole || item.allowedRoles.includes(userRole)
  );

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
        ${!isCollapsed ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">IntelliTest</span>
            </div>
          )}
          
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <Menu className="h-5 w-5 text-gray-600" />
            ) : (
              <X className="h-5 w-5 text-gray-600 lg:hidden" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {filteredMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 1024) {
                    onToggleSidebar();
                  }
                }}
                className={`
                  w-full flex items-center p-3 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                  ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}
                `}
                title={isCollapsed ? item.label : ''}
              >
                <Icon className={`${isCollapsed ? 'h-6 w-6' : 'h-5 w-5'} flex-shrink-0`} />
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className={`text-xs ${isActive ? 'text-purple-100' : 'text-gray-500'}`}>
                      {item.description}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center p-3 rounded-xl transition-all duration-200
              text-red-600 hover:bg-red-50 hover:text-red-700
              ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}
            `}
            title={isCollapsed ? 'Logout' : ''}
          >
            <LogOut className={`${isCollapsed ? 'h-6 w-6' : 'h-5 w-5'} flex-shrink-0`} />
            {!isCollapsed && (
              <span className="font-medium">Logout</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;