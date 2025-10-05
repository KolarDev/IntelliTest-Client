import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";

export default function StudentsPage() {
  return (
    <section className="space-y-8">
      <DashboardPageHeader
        title="Students & classes"
        description="Enroll learners, assemble classes, and sync rosters from student information systems."
        badge="Creator & Staff"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Enrollment overview</h3>
          <p className="mt-2 text-sm text-gray-600">
            Import student CSVs, connect SIS integrations, and review onboarding progress with automated checks.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Class orchestration</h3>
          <p className="mt-2 text-sm text-gray-600">
            Build classes, assign advisors, and group students by grade level, stream, or performance tiers.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/70 p-6 text-sm text-purple-700">
        Enable student dashboards for instant CBT feedback, mastery tracking, and cumulative performance reports.
      </div>
    </section>
  );
}
