import React from "react";
import type { Unit } from "../types/course";

type UnitContentProps = {
  unit: Unit;
};

export const UnitContent: React.FC<UnitContentProps> = ({ unit }) => {
  const hasLessonFlow = unit.lessons && unit.lessons.length > 0;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-100">Ünite Özeti</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{unit.overview}</p>
          </div>
          {unit.badgeName && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 md:mt-0">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 font-semibold text-slate-950">
                ★
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Ünite Rozeti</p>
                <p className="font-semibold">{unit.badgeName}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {hasLessonFlow ? (
        <>
          <section className="space-y-6">
            <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Konu Akışı ve Etkinlikler</h3>
                <p className="text-sm text-slate-300">
                  Her konu anlatımının ardından mini etkinlikler ve 10 soruluk konu sonu testi bulunur. %70 başarı sağlandığında bir sonraki konu açılır.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {unit.lessons?.length ?? 0} konu
              </span>
            </header>

            <div className="space-y-5">
              {unit.lessons?.map((lesson, index) => {
                const activityCount = lesson.activities.reduce((total, activity) => total + activity.questions.length, 0);
                const quizQuestionCount = lesson.quiz.questions.length;

                return (
                  <article
                    key={lesson.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner shadow-slate-950/30"
                  >
                    <div className="flex flex-col gap-4 border-b border-slate-800 bg-slate-900/80 px-6 py-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400">Konu {index + 1}</p>
                        <h4 className="text-lg font-semibold text-slate-100">{lesson.title}</h4>
                        <p className="mt-2 text-sm text-slate-300">{lesson.summary}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-start gap-1 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs text-slate-300">
                        <span className="font-semibold text-slate-100">Etkinlik Sorusu</span>
                        <span>{activityCount} soru</span>
                        <span className="font-semibold text-slate-100">Konu Testi</span>
                        <span>{quizQuestionCount} soru · %{lesson.quiz.passingScore} başarı</span>
                      </div>
                    </div>

                    <div className="grid gap-6 px-6 py-6 lg:grid-cols-[2fr,1fr]">
                      <div className="space-y-5">
                        {lesson.objectives.length > 0 && (
                          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Öğrenme Hedefleri</p>
                            <ul className="mt-3 space-y-2 text-sm text-slate-200">
                              {lesson.objectives.map((objective, objectiveIndex) => (
                                <li key={`${lesson.id}-objective-${objectiveIndex}`} className="flex items-start gap-2">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                                  <span>{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="space-y-3">
                          {lesson.content.map((segment, segmentIndex) => (
                            <div key={`${lesson.id}-segment-${segmentIndex}`} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                              {segment.heading && (
                                <h5 className="text-sm font-semibold text-slate-100">{segment.heading}</h5>
                              )}
                              <p className="mt-2 text-sm leading-relaxed text-slate-300">{segment.body}</p>
                            </div>
                          ))}
                        </div>

                        {lesson.examples.length > 0 && (
                          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Örnekler</p>
                            <ul className="mt-3 space-y-2 text-sm text-slate-200">
                              {lesson.examples.map((example, exampleIndex) => (
                                <li key={`${lesson.id}-example-${exampleIndex}`} className="flex items-start gap-2">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Mini Etkinlikler</p>
                          <ul className="mt-3 space-y-3 text-sm text-slate-200">
                            {lesson.activities.map((activity) => (
                              <li key={activity.id} className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                                <p className="font-semibold text-slate-100">{activity.title}</p>
                                <p className="mt-1 text-xs text-slate-400">{activity.description}</p>
                                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-slate-400">
                                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-slate-300">
                                    {activity.type === "game" ? "Oyun" : activity.type === "challenge" ? "Meydan okuma" : "Quiz"}
                                  </span>
                                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-slate-300">
                                    {activity.questions.length} soru
                                  </span>
                                  {activity.successCriteria?.minimumScore && (
                                    <span className="rounded-full border border-slate-700 px-2 py-0.5 text-emerald-300">
                                      %{activity.successCriteria.minimumScore} başarı hedefi
                                    </span>
                                  )}
                                  {activity.metadata?.gameType && (
                                    <span className="rounded-full border border-slate-700 px-2 py-0.5 text-sky-300">
                                      {activity.metadata.gameType}
                                    </span>
                                  )}
                                </div>
                                {activity.metadata?.instructions && (
                                  <p className="mt-2 text-xs text-slate-400">{activity.metadata.instructions}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Konu Sonu Testi</p>
                          <p className="mt-2 text-sm text-slate-200">{lesson.quiz.title}</p>
                          <p className="mt-1 text-xs text-slate-400">{lesson.quiz.description}</p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-slate-300">
                            <span className="rounded-full border border-slate-700 px-2 py-0.5">{quizQuestionCount} soru</span>
                            <span className="rounded-full border border-slate-700 px-2 py-0.5">%{lesson.quiz.passingScore} baraj</span>
                          </div>
                        </div>

                        {lesson.recommendedGame && (
                          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Önerilen Oyun</p>
                            <h5 className="mt-2 text-sm font-semibold text-slate-100">{lesson.recommendedGame.title}</h5>
                            <p className="mt-1 text-xs text-slate-400">{lesson.recommendedGame.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-widest text-slate-400">
                              <span className="rounded-full border border-slate-700 px-2 py-0.5 text-sky-300">
                                {lesson.recommendedGame.type}
                              </span>
                              {lesson.recommendedGame.vocabulary.map((word) => (
                                <span key={`${lesson.id}-game-${word}`} className="rounded-full border border-slate-800 px-2 py-0.5 text-slate-300">
                                  {word}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {unit.finalExam && (
            <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-slate-100">Ünite Final Testi</h3>
                <p className="mt-2 text-sm text-slate-300">{unit.finalExam.description}</p>
                <div className="mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-400">Soru Sayısı</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">{unit.finalExam.questions.length}</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-400">Başarı Barajı</p>
                    <p className="mt-2 text-lg font-semibold text-emerald-400">%{unit.finalExam.passingScore}</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-400">Kilidi Açmak İçin</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300">
                      <li>• Tüm konularda en az %{unit.finalExam.unlockCondition.minimumLessonCompletion} tamamlanma</li>
                      <li>• Ortalama başarı %{unit.finalExam.unlockCondition.minimumOverallScore} ve üzeri</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-400">Yanlışlarım Alanı</p>
                    <p className="mt-2 text-xs text-slate-300">
                      Final testinde kaçırdığın sorular otomatik olarak <span className="font-semibold text-sky-300">Yanlışlarım</span> bölümüne düşer, yeniden çözebilirsin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h4 className="text-base font-semibold text-slate-100">İlerleme İpuçları</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>Her konu testi %{unit.finalExam.passingScore} ve üzeri tamamlandığında bir sonraki konu otomatik açılır.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Mini etkinliklerdeki yanlış cevaplar kayıt altına alınır ve tekrar çözebilmen için <strong>Yanlışlarım</strong> sekmesine düşer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Konuların tamamında %100 başarı sağladığında {unit.badgeName ?? "rozet"} kazanılır.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                    <span>İstersen "Çalışma Modu" ile konu anlatımını yeniden dinleyip zor sorulara odaklanabilirsin.</span>
                  </li>
                </ul>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {unit.topics && unit.topics.length > 0 && (
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
          )}

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-lg font-semibold text-slate-100">Etkinlikler</h3>
              <p className="mt-2 text-sm text-slate-300">
                Bu bölümde ünitenin her konusuyla ilgili alıştırmalar yer alacak. Yanıtladıkça anında geri bildirim alacaksın.
              </p>
              <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
                <p>Toplam etkinlik: {unit.practice?.length ?? 0}</p>
                <p className="mt-1 text-xs text-slate-400">İlerleyen adımlarda detaylı sorular buraya eklenecek.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-lg font-semibold text-slate-100">Ünite Sonu Testi</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tüm konuları pekiştirdikten sonra karma test ile bilgini ölç. %70 başarı oranı sonraki üniteyi açar.
              </p>
              <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
                <p>Test sorusu sayısı: {unit.masteryTest?.length ?? 0}</p>
                <p className="mt-1 text-xs text-slate-400">Soruları ekledikçe bu alan otomatik güncellenecek.</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
