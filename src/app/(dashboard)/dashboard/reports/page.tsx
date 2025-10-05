import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";

export default function ReportsPage() {
  return (
    <section className="space-y-8">
      <DashboardPageHeader
        title="Reports & insights"
        description="Monitor academic progress, CBT performance, and operational trends across your organization."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Real-time dashboards</h3>
          <p className="mt-2 text-sm text-gray-600">
            Visualize mastery by subject, cohort growth, and assessment completion rates with configurable widgets.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Exports &amp; automations</h3>
          <p className="mt-2 text-sm text-gray-600">
            Schedule branded PDF reports, CSV exports, and webhook pushes to your MIS and finance tools.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/70 p-6 text-sm text-purple-700">
        Centralize stakeholder updates with weekly digests summarizing achievements, risk alerts, and benchmarking insights.
      </div>
    </section>
  );
}
