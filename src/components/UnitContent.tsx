import React from "react";
import type { Unit } from "../types/course";

type UnitContentProps = {
  unit: Unit;
};

export const UnitContent: React.FC<UnitContentProps> = ({ unit }) => {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Ünite Özeti</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{unit.overview}</p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100">Konu Anlatımları</h3>
          <span className="text-xs uppercase tracking-widest text-slate-400">{unit.topics.length} konu</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {unit.topics.map((topic) => (
            <article
              key={topic.id}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h4 className="text-base font-semibold text-slate-100">{topic.title}</h4>
              <p className="mt-2 text-sm font-medium text-slate-300">{topic.summary}</p>
              {topic.content
                .split("\n\n")
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph, index) => (
                  <p key={`${topic.id}-paragraph-${index}`} className="mt-3 text-sm leading-relaxed text-slate-200">
                    {paragraph}
                  </p>
                ))}
              {topic.examples.length > 0 && (
                <div className="mt-4 rounded-lg bg-slate-900/80 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Örnekler</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200">
                    {topic.examples.map((example, index) => (
                      <li key={`${topic.id}-example-${index}`} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-lg font-semibold text-slate-100">Etkinlikler</h3>
          <p className="mt-2 text-sm text-slate-300">
            Bu bölümde ünitenin her konusuyla ilgili alıştırmalar yer alacak. Yanıtladıkça anında geri bildirim alacaksın.
          </p>
          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
            <p>Toplam etkinlik: {unit.practice.length}</p>
            <p className="mt-1 text-xs text-slate-400">İlerleyen adımlarda detaylı sorular buraya eklenecek.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-lg font-semibold text-slate-100">Ünite Sonu Testi</h3>
          <p className="mt-2 text-sm text-slate-300">
            Tüm konuları pekiştirdikten sonra karma test ile bilgini ölç. %70 başarı oranı sonraki üniteyi açar.
          </p>
          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
            <p>Test sorusu sayısı: {unit.masteryTest.length}</p>
            <p className="mt-1 text-xs text-slate-400">Soruları ekledikçe bu alan otomatik güncellenecek.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
