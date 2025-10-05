import type { ReactNode } from "react";
import { DashboardShell } from "@/components/dashboard/dashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
