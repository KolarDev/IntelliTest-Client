import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";

export default function OrganizationPage() {
  return (
    <section className="space-y-8">
      <DashboardPageHeader
        title="Organization overview"
        description="Creator-only controls for managing billing, branding, compliance policies, and platform-wide automation."
        badge="Creator access only"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Global settings</h2>
          <p className="mt-2 text-sm text-gray-600">
            Configure academic terms, grading templates, SMS gateways, and integrations that affect every campus instance.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Identity &amp; security</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enforce SSO, multi-factor authentication, and custom user roles to safeguard sensitive assessment data.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/70 p-6 text-sm text-purple-700">
        Invite co-creators to share ownership across multiple campuses while retaining centralized visibility into financials and compliance.
      </div>
    </section>
  );
}
