"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  GraduationCap,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Users,
  FileText,
} from "lucide-react";

interface DashboardShellProps {
  children: React.ReactNode;
}

interface NavigationItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Organization",
    href: "/dashboard/organization",
    description: "Creator access for organization-wide settings and billing.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    label: "Staff",
    href: "/dashboard/staff",
    description: "Manage educators, administrators, and their permissions.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Students",
    href: "/dashboard/students",
    description: "Organize student cohorts, classes, and enrollment.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    label: "Tests",
    href: "/dashboard/tests",
    description: "Design CB tests, question banks, and assignments.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    description: "Monitor performance metrics and generate insights.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

export const DashboardShell = ({ children }: DashboardShellProps) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSegment = useMemo(() => {
    return navigationItems.find((item) => pathname.startsWith(item.href))?.label ?? "";
  }, [pathname]);

  const sidebarWidth = isCollapsed ? "md:w-20" : "md:w-72";
  const contentPadding = isCollapsed ? "md:pl-24" : "md:pl-72";

  const toggleCollapse = () => setIsCollapsed((previous) => !previous);
  const toggleMobile = () => setMobileOpen((previous) => !previous);

  return (
    <div className="relative flex min-h-screen bg-gray-50/90 text-gray-900">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full w-72 flex-col border-r border-black/10 bg-white/95 px-4 pb-8 pt-6 shadow-lg backdrop-blur transition-transform duration-300 md:translate-x-0 ${sidebarWidth} ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
            </span>
            {!isCollapsed && (
              <div>
                <p className="text-lg font-semibold">IntelliTest</p>
                <p className="text-xs text-gray-500">Academic command center</p>
              </div>
            )}
          </Link>
          <button
            type="button"
            onClick={toggleCollapse}
            className="hidden rounded-lg border border-black/10 bg-white p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 md:inline-flex"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        <nav className="mt-10 flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100/80"
                    } ${isCollapsed ? "justify-center" : ""}`}
                    title={item.label}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/90 text-purple-600 shadow-sm ${
                        isActive ? "bg-white/90 text-purple-600" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                  {!isCollapsed && (
                    <p className={`ml-14 mt-2 text-xs text-gray-500 ${isActive ? "text-purple-600" : ""}`}>
                      {item.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/70 p-4 text-xs text-purple-700">
          {!isCollapsed ? (
            <p>
              You&apos;re viewing the <strong>{activeSegment || "dashboard"}</strong> workspace. Collapse the panel for more room.
            </p>
          ) : (
            <p className="text-center font-semibold text-purple-600">All set!</p>
          )}
        </div>
      </aside>

      {mobileOpen && (
        <button
          type="button"
          onClick={toggleMobile}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          aria-label="Close sidebar"
        />
      )}

      <div className={`flex min-h-screen flex-1 flex-col transition-[padding] duration-300 ${contentPadding}`}>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-black/10 bg-white/90 px-4 shadow-sm backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleMobile}
              className="rounded-xl border border-black/10 bg-white p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 md:hidden"
              aria-label="Toggle navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Current section</p>
              <p className="text-base font-semibold text-gray-900">{activeSegment || "Dashboard"}</p>
            </div>
          </div>
          <Link
            href="/sign-in"
            className="hidden items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-100 md:inline-flex"
          >
            <span>Log out</span>
          </Link>
        </header>
        <main className="flex-1 px-4 py-8 md:px-8">{children}</main>
      </div>
    </div>
  );
};
