interface DashboardPageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export const DashboardPageHeader = ({
  title,
  description,
  badge,
}: DashboardPageHeaderProps) => {
  return (
    <header className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        {badge ? (
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="max-w-2xl text-sm text-gray-600">{description}</p>
    </header>
  );
};
