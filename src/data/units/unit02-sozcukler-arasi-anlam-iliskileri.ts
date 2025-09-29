import type { Unit } from "../../types/course";

export const unit02: Unit = {
  id: "unit-02",
  title: "Sözcükler Arası Anlam İlişkileri",
  overview:
    "Eş ve zıt anlamlılık, sesteşlik, genel-özel, nicel-nitel, yansıma ve pekiştirmeli ifadeler aracılığıyla sözcükler arasındaki anlam bağlarını tanımayı hedefler.",
  topics: [
    {
      id: "unit02-topic-01",
      title: "Eş Anlamlı (Anlamdaş) Sözcükler",
      summary: "Yazılışları farklı olmasına rağmen aynı ya da çok yakın anlamları karşılayan sözcüklerdir.",
      content:
        "Yazılışları ve okunuşları farklı, anlamları aynı olan sözcüklere eş anlamlı (anlamdaş) sözcükler denir. Farklı bağlamlarda birbirlerinin yerine kullanılabilirler.",
      examples: [
        "araç – vasıta",
        "buyruk – emir",
        "acemi – toy",
        "cimri – pinti",
        "ayraç – parantez",
        "sözcük – kelime",
        "Delil yetersizliğinden dava kapanmıştı. (kanıt)",
        "Dağın zirvesine ulaşmak üzereydik. (doruk)"
      ],
    },
    {
      id: "unit02-topic-02",
      title: "Zıt (Karşıt) Anlamlı Sözcükler",
      summary: "Anlamca birbirinin karşıtı olan sözcükleri ve zıtlık kurallarını açıklar.",
      content:
        "Anlamca birbirinin karşıtı olan sözcüklere zıt (karşıt) anlamlı sözcükler denir. Sözcüklerin zıt anlamlı sayılabilmesi için her iki sözcüğün de aynı anlam düzleminde (gerçek ya da mecaz) kullanılması gerekir.",
      examples: [
        "Bulanık suda balık avlanmaz. (duru)",
        "Fındık üretiminde bu yıl artış bekliyoruz. (tüketim)",
        "Uyarı: Bir sözcüğün olumsuzu, o sözcüğün zıt anlamlısı değildir.",
        "Suçlu ↔ masum (zıt); suçlu ↔ suçsuz (olumsuz)",
        "Otur- ↔ kalk- (zıt); otur- ↔ oturma- (olumsuz)",
        "Neşeli ↔ üzgün (zıt); neşeli ↔ neşesiz (olumsuz)",
        "Uyu- ↔ uyan- (zıt); uyu- ↔ uyuma- (olumsuz)",
        "Bu karanlık günler de geçecek elbet. // Aydınlık günlere kavuşacağız. (Mecaz, zıt)",
        "Babam dürüst, doğru bir adamdı. // Uğraştıkça çizgileri daha eğri oluyordu. (Anlam düzlemi farklı olduğu için zıt sayılmaz.)"
      ],
    },
    {
      id: "unit02-topic-03",
      title: "Eş Sesli (Sesteş) Sözcükler",
      summary: "Yazılış ve okunuşları aynı, anlamları farklı sözcükleri tanıtır ve sesteşlik kurallarını açıklar.",
      content:
        "Yazılışları ve okunuşları aynı, anlamları farklı olan sözcüklere eş sesli (sesteş) denir. Sesteş sayılabilmeleri için sözcüğün her kullanımında farklı bir anlamı karşılaması gerekir.",
      examples: [
        "Dik (Ağaçları dedesi dikmişti. / Kopan düğmesini çabucak dikmişti.)",
        "Uyarı: Biri gerçek, diğeri mecaz anlamda ise sesteş sayılmaz. (Cam kırıldı. / Cesareti kırıldı.)",
        "Uyarı: Aynı sözcüğün farklı kullanımının gerçek anlama bağlı olduğu durumda sesteşlik olmaz. (Yaşlı teyzenin kolundan tuttu. / Kapının koluna asıldı.)",
        "Not: Düzeltme işareti (^) bulunan sözcükler sesteş değildir: adet – âdet, kar – kâr, hala – hâlâ, ama – âmâ, yar – yâr."
      ],
    },
    {
      id: "unit02-topic-04",
      title: "Genel ve Özel Anlamlı Sözcükler",
      summary: "Genelden özele ve özelden genele anlam genişliğini gösterir.",
      content:
        "Genel anlamlı sözcükler söyleyişte tekil olsalar da anlamca geniş bir grubu kapsar. Özel anlamlı sözcükler ise bir türün belirli bir örneğini karşılar. Genelden özele veya özelden genele gidiş anlam genişliğinin değişimini gösterir.",
      examples: [
        "Genelden özele sıralama: Varlık → Canlı → Bitki → Ağaç → Meşe",
        "Özelden genele sıralama: Meşe → Ağaç → Bitki → Canlı → Varlık",
        "Çiçekler baharın müjdecisidir. (Çiçek = genel)",
        "Odasındaki çiçeğe gözü gibi bakardı. (Çiçek = özel)"
      ],
    },
    {
      id: "unit02-topic-05",
      title: "Nitel ve Nicel Anlamlı Sözcükler",
      summary: "Ölçülebilir (nicel) ve niteleyici (nitel) özellikleri ayırt eder.",
      content:
        "Nicel anlamlı sözcükler sayılabilen veya ölçülebilen özellikleri anlatır. Nitel anlamlı sözcükler ise doğrudan ölçülemeyen, niteleme yapan özellikleri ifade eder.",
      examples: [
        "Büyük bir evde yaşıyorlardı. (nicel)",
        "Büyük liderler unutulmaz. (nitel)",
        "Ağır paketleri ona taşıtmıştı. (nicel)",
        "Annelik ona ağır sorumluluklar yüklemişti. (nitel)"
      ],
    },
    {
      id: "unit02-topic-06",
      title: "Yansıma Sözcükler",
      summary: "Doğadaki seslerin taklit edilmesiyle oluşan sözcükleri sınıflandırır.",
      content:
        "Yansıma sözcükler, doğadaki seslerin taklit edilmesiyle oluşur ve duyulan sesi taklit eder. İnsanlara, hayvanlara, cansız varlıklara veya araçlara özgü sesleri yansıtabilir.",
      examples: [
        "İnsanlara özgü: şık, hor, hapşu",
        "Hayvanlara özgü: miyav, hav, me",
        "Cansız varlıklara özgü: gür, şırıl, hışır",
        "Araçlara özgü: çuf, zır, pat"
      ],
    },
    {
      id: "unit02-topic-07",
      title: "Pekiştirmeli Sözcükler ve İkilemeler",
      summary: "Pekiştirme ekleri, mı/mi yapısı ve ikilemelerle anlam güçlendirmeyi açıklar.",
      content:
        "Pekiştirme, sözcüğün ilk hecesine -m, -p, -r, -s ekleri getirilerek yapılabilir. Ayrıca 'mı/mi' soru edatı veya ikilemelerle de pekiştirme sağlanır. İkilemeler ayrı yazılır ve araya noktalama işareti konmaz.",
      examples: [
        "beyaz → bembeyaz",
        "ıssız → ıpıssız",
        "temiz → tertemiz",
        "mor → mosmor",
        "mı/mi ile: Güzel mi güzel bir kızdı. / Hava sıcak mı sıcaktı.",
        "İkilemeler: Arabamız yavaş yavaş ilerliyordu. / Eğri büğrü bir yola girmiştik.",
        "İkileme türleri: hızlı hızlı (aynı sözcük), güçlü kuvvetli (eş anlamlı), gide gele (zıt), kaba saba (anlamlı-anlamsız), abur cubur (anlamsız), şıpır şıpır (yansıma), bire bir (ekli)."
      ],
    },
  ],
  practice: [
    {
      id: "unit02-test01-q01",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi 'öğrenci' sözcüğünün eş anlamlısıdır?",
      explanation: "Öğrenci sözcüğünün eş anlamlısı talebedir.",
      options: [
        { id: "A", label: "a) talebe", isCorrect: true },
        { id: "B", label: "b) öğretmen", isCorrect: false },
        { id: "C", label: "c) kitap", isCorrect: false },
        { id: "D", label: "d) defter", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q02",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi 'emir' sözcüğünün eş anlamlısıdır?",
      explanation: "Emir sözcüğünün eş anlamlısı buyruktur.",
      options: [
        { id: "A", label: "a) buyruk", isCorrect: true },
        { id: "B", label: "b) yasak", isCorrect: false },
        { id: "C", label: "c) rica", isCorrect: false },
        { id: "D", label: "d) söz", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q03",
      type: "multiple-choice",
      prompt: "'Pinti' sözcüğünün eş anlamlısı hangisidir?",
      explanation: "Pinti ile cimri eş anlamlıdır.",
      options: [
        { id: "A", label: "a) cömert", isCorrect: false },
        { id: "B", label: "b) cimri", isCorrect: true },
        { id: "C", label: "c) eli açık", isCorrect: false },
        { id: "D", label: "d) zengin", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q04",
      type: "multiple-choice",
      prompt: "'Araç' sözcüğünün eş anlamlısı aşağıdakilerden hangisidir?",
      explanation: "Araç sözcüğünün eş anlamlısı vasıtadır.",
      options: [
        { id: "A", label: "a) yol", isCorrect: false },
        { id: "B", label: "b) taşıt", isCorrect: false },
        { id: "C", label: "c) vasıta", isCorrect: true },
        { id: "D", label: "d) iş", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q05",
      type: "multiple-choice",
      prompt: "'Kanıt' sözcüğünün eş anlamlısı hangisidir?",
      explanation: "Kanıt ile delil aynı anlamdadır.",
      options: [
        { id: "A", label: "a) delil", isCorrect: true },
        { id: "B", label: "b) yalan", isCorrect: false },
        { id: "C", label: "c) iddia", isCorrect: false },
        { id: "D", label: "d) şahit", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q06",
      type: "multiple-choice",
      prompt: "'Karanlık' sözcüğünün zıt anlamlısı nedir?",
      explanation: "Karanlığın karşıtı aydınlıktır.",
      options: [
        { id: "A", label: "a) aydınlık", isCorrect: true },
        { id: "B", label: "b) parlak", isCorrect: false },
        { id: "C", label: "c) gölge", isCorrect: false },
        { id: "D", label: "d) gece", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q07",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi 'geniş' sözcüğünün zıt anlamlısıdır?",
      explanation: "Geniş sözcüğünün karşıtı dardır.",
      options: [
        { id: "A", label: "a) uzun", isCorrect: false },
        { id: "B", label: "b) dar", isCorrect: true },
        { id: "C", label: "c) küçük", isCorrect: false },
        { id: "D", label: "d) büyük", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q08",
      type: "multiple-choice",
      prompt: "'Doğru' sözcüğünün zıt anlamlısı aşağıdakilerden hangisidir?",
      explanation: "Doğru sözcüğünün zıt anlamlısı yanlıştır.",
      options: [
        { id: "A", label: "a) yanlış", isCorrect: true },
        { id: "B", label: "b) düz", isCorrect: false },
        { id: "C", label: "c) eğri", isCorrect: false },
        { id: "D", label: "d) haklı", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q09",
      type: "multiple-choice",
      prompt: "'İleri' sözcüğünün karşıtı nedir?",
      explanation: "İleri sözcüğünün karşıtı geridir.",
      options: [
        { id: "A", label: "a) geri", isCorrect: true },
        { id: "B", label: "b) ön", isCorrect: false },
        { id: "C", label: "c) arka", isCorrect: false },
        { id: "D", label: "d) uzak", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q10",
      type: "multiple-choice",
      prompt: "'Neşeli' sözcüğünün zıt anlamlısı hangisidir?",
      explanation: "Neşelinin karşıtı üzgündür.",
      options: [
        { id: "A", label: "a) üzgün", isCorrect: true },
        { id: "B", label: "b) kederli", isCorrect: false },
        { id: "C", label: "c) sessiz", isCorrect: false },
        { id: "D", label: "d) yorgun", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q11",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde 'yüz' sözcüğü farklı anlamda kullanılmıştır?",
      explanation: "C seçeneğinde yüz not anlamında kullanılmıştır.",
      options: [
        { id: "A", label: "a) Yüz kilometre yol gittik.", isCorrect: false },
        { id: "B", label: "b) Yüzünü yıkadı.", isCorrect: false },
        { id: "C", label: "c) Bu sınavdan yüz aldı.", isCorrect: true },
        { id: "D", label: "d) Çocuk denizde yüzüyor.", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q12",
      type: "multiple-choice",
      prompt: "'Gül' sözcüğü hangi seçenekte farklı anlamda kullanılmıştır?",
      explanation: "B seçeneğinde gülmek fiili anlamıyla kullanılmıştır.",
      options: [
        { id: "A", label: "a) Bahçede güller açtı.", isCorrect: false },
        { id: "B", label: "b) Yüzüme gül.", isCorrect: true },
        { id: "C", label: "c) Onun adı Gül.", isCorrect: false },
        { id: "D", label: "d) Ona gül verme.", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q13",
      type: "multiple-choice",
      prompt: "'Dolmak' sözcüğü hangi cümlede farklı anlamdadır?",
      explanation: "D seçeneğinde dolmak sözcüğü duygusal yoğunluğu anlatır.",
      options: [
        { id: "A", label: "a) Bardak suyla doldu.", isCorrect: false },
        { id: "B", label: "b) Yolcular otobüse doldu.", isCorrect: false },
        { id: "C", label: "c) Kalemi mürekkep doldu.", isCorrect: false },
        { id: "D", label: "d) Çocuk duygudan doldu.", isCorrect: true }
      ],
    },
    {
      id: "unit02-test01-q14",
      type: "multiple-choice",
      prompt: "'Kırmak' sözcüğü hangi seçenekte mecaz anlamda kullanılmıştır?",
      explanation: "Kalbini kırmak ifadesi mecaz anlam taşır.",
      options: [
        { id: "A", label: "a) Bardak kırıldı.", isCorrect: false },
        { id: "B", label: "b) Onun kalbini kırdı.", isCorrect: true },
        { id: "C", label: "c) Cam kırıldı.", isCorrect: false },
        { id: "D", label: "d) Taş kırıldı.", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q15",
      type: "multiple-choice",
      prompt: "'Dil' sözcüğü hangi seçenekte farklı anlamdadır?",
      explanation: "A seçeneğinde dil bir iletişim sistemi olarak kullanılmıştır.",
      options: [
        { id: "A", label: "a) İngilizce öğreniyorum.", isCorrect: true },
        { id: "B", label: "b) Dilini çıkardı.", isCorrect: false },
        { id: "C", label: "c) Tatlı dilli biridir.", isCorrect: false },
        { id: "D", label: "d) Dilin kemiği yoktur.", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q16",
      type: "multiple-choice",
      prompt: "'Hayvan' sözcüğü aşağıdaki sözcüklerden hangisine göre daha geneldir?",
      explanation: "Hayvan kavramı kedi gibi türleri kapsar.",
      options: [
        { id: "A", label: "a) kedi", isCorrect: true },
        { id: "B", label: "b) orman", isCorrect: false },
        { id: "C", label: "c) bitki", isCorrect: false },
        { id: "D", label: "d) çiçek", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q17",
      type: "multiple-choice",
      prompt: "'Araç' sözcüğü aşağıdaki sözcüklerden hangisine göre daha geneldir?",
      explanation: "Otomobil araç kavramının özel bir örneğidir.",
      options: [
        { id: "A", label: "a) otomobil", isCorrect: true },
        { id: "B", label: "b) tren", isCorrect: false },
        { id: "C", label: "c) uçak", isCorrect: false },
        { id: "D", label: "d) taşıt", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q18",
      type: "multiple-choice",
      prompt: "'Bitki' sözcüğü hangi sözcüğe göre daha geneldir?",
      explanation: "Gül bitki kavramının özel bir örneğidir.",
      options: [
        { id: "A", label: "a) gül", isCorrect: true },
        { id: "B", label: "b) çiçek", isCorrect: false },
        { id: "C", label: "c) ağaç", isCorrect: false },
        { id: "D", label: "d) orman", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q19",
      type: "multiple-choice",
      prompt: "'Kuş' sözcüğü hangi seçenekte özel anlamlıdır?",
      explanation: "Serçe kuş kavramının özel örneğidir.",
      options: [
        { id: "A", label: "a) serçe", isCorrect: true },
        { id: "B", label: "b) hayvan", isCorrect: false },
        { id: "C", label: "c) canlı", isCorrect: false },
        { id: "D", label: "d) doğa", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q20",
      type: "multiple-choice",
      prompt: "'Taşıt' sözcüğü hangi sözcüğe göre daha özel anlamlıdır?",
      explanation: "Taşıt araç kavramının alt kategorisidir.",
      options: [
        { id: "A", label: "a) araç", isCorrect: true },
        { id: "B", label: "b) araç-gereç", isCorrect: false },
        { id: "C", label: "c) eşya", isCorrect: false },
        { id: "D", label: "d) alet", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q21",
      type: "multiple-choice",
      prompt: "'Soğuk bir hava' ifadesinde 'soğuk' sözcüğü hangi anlamdadır?",
      explanation: "Soğuk sözcüğü havanın niteliğini belirtir.",
      options: [
        { id: "A", label: "a) nitel", isCorrect: true },
        { id: "B", label: "b) nicel", isCorrect: false },
        { id: "C", label: "c) somut", isCorrect: false },
        { id: "D", label: "d) mecaz", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q22",
      type: "multiple-choice",
      prompt: "'Beş kitap aldım.' cümlesinde 'beş' sözcüğü hangi anlamdadır?",
      explanation: "Beş sözcüğü sayısal (nicel) değeri belirtir.",
      options: [
        { id: "A", label: "a) nicel", isCorrect: true },
        { id: "B", label: "b) nitel", isCorrect: false },
        { id: "C", label: "c) soyut", isCorrect: false },
        { id: "D", label: "d) somut", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q23",
      type: "multiple-choice",
      prompt: "'Uzun bir yol' ifadesindeki 'uzun' sözcüğü hangi anlamdadır?",
      explanation: "Uzun sözcüğü yolun niteliğini belirtir.",
      options: [
        { id: "A", label: "a) nitel", isCorrect: true },
        { id: "B", label: "b) nicel", isCorrect: false },
        { id: "C", label: "c) mecaz", isCorrect: false },
        { id: "D", label: "d) somut", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q24",
      type: "multiple-choice",
      prompt: "'Yüz öğrenci sınava girdi.' cümlesinde 'yüz' sözcüğü hangi anlamdadır?",
      explanation: "Yüz sözcüğü nicel değeri ifade eder.",
      options: [
        { id: "A", label: "a) nicel", isCorrect: true },
        { id: "B", label: "b) nitel", isCorrect: false },
        { id: "C", label: "c) soyut", isCorrect: false },
        { id: "D", label: "d) somut", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q25",
      type: "multiple-choice",
      prompt: "'Tatlı bir çocuk' ifadesinde 'tatlı' sözcüğü hangi anlamdadır?",
      explanation: "Tatlı sözcüğü çocuğu niteleyen bir sıfattır.",
      options: [
        { id: "A", label: "a) nitel", isCorrect: true },
        { id: "B", label: "b) nicel", isCorrect: false },
        { id: "C", label: "c) somut", isCorrect: false },
        { id: "D", label: "d) soyut", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q26",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi bir yansıma sözcüktür?",
      explanation: "Miyav kedinin çıkardığı sesi taklit eder.",
      options: [
        { id: "A", label: "a) miyav", isCorrect: true },
        { id: "B", label: "b) güzel", isCorrect: false },
        { id: "C", label: "c) güneş", isCorrect: false },
        { id: "D", label: "d) tatlı", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q27",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi yansıma değildir?",
      explanation: "Okul ses taklidi değildir.",
      options: [
        { id: "A", label: "a) şırıl", isCorrect: false },
        { id: "B", label: "b) cıvıl", isCorrect: false },
        { id: "C", label: "c) okul", isCorrect: true },
        { id: "D", label: "d) pat", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q28",
      type: "multiple-choice",
      prompt: "'Şıp' sesi hangi tür sözcüğe örnektir?",
      explanation: "Şıp sesi su damlamasını taklit eden yansıma sözcüktür.",
      options: [
        { id: "A", label: "a) yansıma", isCorrect: true },
        { id: "B", label: "b) sesteş", isCorrect: false },
        { id: "C", label: "c) eş anlamlı", isCorrect: false },
        { id: "D", label: "d) zıt anlamlı", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q29",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde yansıma sözcük vardır?",
      explanation: "Miyavlamak kedilerin çıkardığı sesi taklit eder.",
      options: [
        { id: "A", label: "a) Çocuk kitap okuyor.", isCorrect: false },
        { id: "B", label: "b) Köpek havladı.", isCorrect: false },
        { id: "C", label: "c) Kedi miyavladı.", isCorrect: true },
        { id: "D", label: "d) Babam gazete okuyor.", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q30",
      type: "multiple-choice",
      prompt: "Aşağıdaki seslerden hangisi yansıma sözcüğe örnektir?",
      explanation: "Tak sesi çarpma sesini taklit eder.",
      options: [
        { id: "A", label: "a) tak", isCorrect: true },
        { id: "B", label: "b) güzel", isCorrect: false },
        { id: "C", label: "c) hızlı", isCorrect: false },
        { id: "D", label: "d) kırmızı", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q31",
      type: "multiple-choice",
      prompt: "'Sapsarı' sözcüğü hangi tür sözcüktür?",
      explanation: "Sapsarı pekiştirmeli bir sıfattır.",
      options: [
        { id: "A", label: "a) pekiştirmeli", isCorrect: true },
        { id: "B", label: "b) yansıma", isCorrect: false },
        { id: "C", label: "c) sesteş", isCorrect: false },
        { id: "D", label: "d) zıt", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q32",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi pekiştirmeli sözcüktür?",
      explanation: "Kıpkırmızı renk vurgusunu pekiştirir.",
      options: [
        { id: "A", label: "a) kıpkırmızı", isCorrect: true },
        { id: "B", label: "b) güzel", isCorrect: false },
        { id: "C", label: "c) tatlı", isCorrect: false },
        { id: "D", label: "d) çiçek", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q33",
      type: "multiple-choice",
      prompt: "'Upuzun yollar' ifadesinde hangi sözcük pekiştirmelidir?",
      explanation: "Upuzun uzunluğu pekiştiren sıfattır.",
      options: [
        { id: "A", label: "a) yollar", isCorrect: false },
        { id: "B", label: "b) upuzun", isCorrect: true },
        { id: "C", label: "c) uzun", isCorrect: false },
        { id: "D", label: "d) ifade", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q34",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi pekiştirmeli değildir?",
      explanation: "Gökyüzü basit bir isimdir, pekiştirmeli değildir.",
      options: [
        { id: "A", label: "a) simsiyah", isCorrect: false },
        { id: "B", label: "b) bembeyaz", isCorrect: false },
        { id: "C", label: "c) gökyüzü", isCorrect: true },
        { id: "D", label: "d) masmavi", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q35",
      type: "multiple-choice",
      prompt: "'Kapkara geceler' örneğinde hangi sözcük pekiştirmelidir?",
      explanation: "Kapkara sözcüğü karalığı pekiştirir.",
      options: [
        { id: "A", label: "a) geceler", isCorrect: false },
        { id: "B", label: "b) kapkara", isCorrect: true },
        { id: "C", label: "c) gece", isCorrect: false },
        { id: "D", label: "d) kara", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q36",
      type: "multiple-choice",
      prompt: "'Yavaş yavaş yürüdü.' cümlesindeki 'yavaş yavaş' hangi tür sözcüktür?",
      explanation: "Yavaş yavaş tekrarlı bir ikilemedir.",
      options: [
        { id: "A", label: "a) ikileme", isCorrect: true },
        { id: "B", label: "b) yansıma", isCorrect: false },
        { id: "C", label: "c) sesteş", isCorrect: false },
        { id: "D", label: "d) zıt", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q37",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi ikilemedir?",
      explanation: "Teker teker aynı sözcüğün tekrarıyla ikileme oluşturur.",
      options: [
        { id: "A", label: "a) teker teker", isCorrect: true },
        { id: "B", label: "b) kırmızı", isCorrect: false },
        { id: "C", label: "c) güzel", isCorrect: false },
        { id: "D", label: "d) tatlı", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q38",
      type: "multiple-choice",
      prompt: "'İsteye isteye yaptı.' cümlesinde geçen 'isteye isteye' sözcüğü hangi türdür?",
      explanation: "İsteye isteye tekrarlı bir ikilemedir.",
      options: [
        { id: "A", label: "a) ikileme", isCorrect: true },
        { id: "B", label: "b) yansıma", isCorrect: false },
        { id: "C", label: "c) eş sesli", isCorrect: false },
        { id: "D", label: "d) zıt", isCorrect: false }
      ],
    },
    {
      id: "unit02-test01-q39",
      type: "multiple-choice",
      prompt: "Aşağıdaki ikilemelerden hangisi pekiştirme amaçlıdır?",
      explanation: "Güle oynaya ikilemesi coşkuyu pekiştirir.",
      options: [
        { id: "A", label: "a) ipe sapa gelmez", isCorrect: false },
        { id: "B", label: "b) dost düşman", isCorrect: false },
        { id: "C", label: "c) kapı pencere", isCorrect: false },
        { id: "D", label: "d) güle oynaya", isCorrect: true }
      ],
    },
    {
      id: "unit02-test01-q40",
      type: "multiple-choice",
      prompt: "'Çocuk odada sağa sola koştu.' cümlesinde ikileme hangisidir?",
      explanation: "Sağa sola ifadesi yönleri tekrar ederek ikileme oluşturur.",
      options: [
        { id: "A", label: "a) çocuk", isCorrect: false },
        { id: "B", label: "b) odada", isCorrect: false },
        { id: "C", label: "c) sağa sola", isCorrect: true },
        { id: "D", label: "d) koştu", isCorrect: false }
      ],
    },
  ],
  masteryTest: [],
};

export default unit02;
