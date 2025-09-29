import React from "react";

type ProgressOverviewProps = {
  overallCompletion: number;
  activeUnitTitle: string;
  activeUnitCompletion: number;
};

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  overallCompletion,
  activeUnitTitle,
  activeUnitCompletion,
}) => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">Genel İlerleme</p>
          <h2 className="text-2xl font-semibold text-slate-100">{overallCompletion}% tamamlandı</h2>
          <p className="mt-1 text-sm text-slate-300">
            Aktif ünite: <span className="font-medium text-sky-400">{activeUnitTitle}</span> ({activeUnitCompletion}% tamamlandı)
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-sky-500 transition-all duration-500"
              style={{ width: `${overallCompletion}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
