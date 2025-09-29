import React from "react";
import type { Unit, UnitProgress } from "../types/course";

type SidebarProps = {
  units: Unit[];
  progress: Record<string, UnitProgress>;
  activeUnitId: string;
  onSelectUnit: (unitId: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ units, progress, activeUnitId, onSelectUnit }) => {
  return (
    <aside className="flex w-72 flex-col border-r border-slate-800 bg-slate-900/60">
      <div className="border-b border-slate-800 px-5 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Ünite Listesi</h2>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
        {units.map((unit) => {
          const unitProgress = progress[unit.id];
          const isLocked = unitProgress ? !unitProgress.unlocked : false;
          const completion = unitProgress?.completion ?? 0;
          return (
            <button
              key={unit.id}
              type="button"
              onClick={() => onSelectUnit(unit.id)}
              disabled={isLocked}
              className={`group flex w-full flex-col rounded-xl border px-4 py-3 text-left transition-colors focus:outline-none focus-visible:ring focus-visible:ring-sky-500 ${
                activeUnitId === unit.id
                  ? "border-sky-500/80 bg-sky-500/10"
                  : "border-slate-800/80 bg-slate-900/60 hover:border-sky-500/60 hover:bg-slate-900"
              } ${isLocked ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-100">{unit.title}</span>
                <span className="text-xs text-slate-400">{completion}%</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">{unit.overview}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-sky-500 transition-all duration-300"
                  style={{ width: `${completion}%` }}
                />
              </div>
              {isLocked && (
                <p className="mt-2 text-xs font-medium text-amber-400">%70 başarıya ulaşmadan açılamaz.</p>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
