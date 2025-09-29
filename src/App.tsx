import React, { useMemo, useState } from "react";
import { TopNav } from "./components/TopNav";
import { Sidebar } from "./components/Sidebar";
import { ProgressOverview } from "./components/ProgressOverview";
import { UnitContent } from "./components/UnitContent";
import { courseData } from "./data/course";
import { initialProgress } from "./data/progress";
import type { UnitProgress } from "./types/course";

type ActiveView = "unit" | "wrongs" | "general-test";

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>("unit");
  const [activeUnitId, setActiveUnitId] = useState(() => courseData.units[0]?.id ?? "");

  const progressByUnit = useMemo(() => {
    return initialProgress.units.reduce<Record<string, UnitProgress>>((acc, unitProgress) => {
      acc[unitProgress.unitId] = unitProgress;
      return acc;
    }, {});
  }, []);

  const activeUnit = courseData.units.find((unit) => unit.id === activeUnitId) ?? courseData.units[0];
  const activeUnitProgress = activeUnit ? progressByUnit[activeUnit.id] : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <TopNav
        activeView={activeView}
        onChangeView={(nextView) => {
          setActiveView(nextView);
        }}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          units={courseData.units}
          progress={progressByUnit}
          activeUnitId={activeUnit?.id ?? ""}
          onSelectUnit={(unitId) => {
            const unitProgress = progressByUnit[unitId];
            if (unitProgress && !unitProgress.unlocked) {
              return;
            }
            setActiveView("unit");
            setActiveUnitId(unitId);
          }}
        />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-8">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            {activeView === "unit" && activeUnit && (
              <>
                <ProgressOverview
                  overallCompletion={initialProgress.overallCompletion}
                  activeUnitTitle={activeUnit.title}
                  activeUnitCompletion={activeUnitProgress?.completion ?? 0}
                />
                <UnitContent unit={activeUnit} />
              </>
            )}

            {activeView === "wrongs" && (
              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
                <h2 className="text-xl font-semibold text-slate-100">Yanlışlarım</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Yanlış cevaplar burada toplanacak. Sorular eklendikçe bu alan geçmiş hatalarını tekrar etmen için
                  güncellenecek.
                </p>
              </section>
            )}

            {activeView === "general-test" && (
              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
                <h2 className="text-xl font-semibold text-slate-100">Genel Test</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Tüm üniteler tamamlandığında genel tekrar testi buradan erişilebilir olacak.
                </p>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
