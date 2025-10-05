import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";

export default function StaffPage() {
  return (
    <section className="space-y-8">
      <DashboardPageHeader
        title="Staff management"
        description="Onboard academic and administrative staff, assign departmental scopes, and monitor activity logs."
        badge="Creator & Staff"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Teams &amp; roles</h3>
          <p className="mt-2 text-sm text-gray-600">
            Create custom permission sets for counselors, exam officers, invigilators, and school admins.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Invitations</h3>
          <p className="mt-2 text-sm text-gray-600">
            Send secure invites via email or domain provisioning with configurable approval workflows.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Activity insights</h3>
          <p className="mt-2 text-sm text-gray-600">
            Track assessment creation, schedule updates, and last login times for every staff member.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-purple-200 bg-white/70 p-6">
        <p className="text-sm text-gray-600">
          Use staff groups to trigger automated reminders, share lesson resources, and manage professional development credits.
        </p>
      </div>
    </section>
  );
}
