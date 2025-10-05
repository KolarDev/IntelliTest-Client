import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";

export default function TestsPage() {
  return (
    <section className="space-y-8">
      <DashboardPageHeader
        title="Tests & assessments"
        description="Draft, schedule, and publish secure CBT experiences for every class cohort."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Assessment builder</h3>
          <p className="mt-2 text-sm text-gray-600">
            Construct question banks with multiple formats, tagging standards, and AI-assisted distractors.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Assignments</h3>
          <p className="mt-2 text-sm text-gray-600">
            Schedule tests to classes, configure retakes, and automate accommodations for special needs learners.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Delivery settings</h3>
          <p className="mt-2 text-sm text-gray-600">
            Set CBT windows, session passwords, proctoring rules, and offline contingencies.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-purple-200 bg-white/70 p-6">
        <p className="text-sm text-gray-600">
          Integrate question analytics to capture item difficulty, discrimination indexes, and curriculum alignment.
        </p>
      </div>
    </section>
  );
}
