import type { Unit } from "../../types/course";

export const unit01: Unit = {
  id: "unit-01",
  title: "Sözcükte Anlam",
  overview:
    "Sözcüklerin gerçek, mecaz, terim, somut, soyut ve bağlama göre kazandığı anlamları örneklerle kavrayıp her cümlede doğru yorumu yapmaya odaklanan oyunlaştırılmış bir öğrenme yolculuğu.",
  themeColor: "#f97316",
  badgeName: "Anlam Kaşifi",
  lessons: [
    {
      id: "unit01-lesson-01",
      title: "Anlam Temelleri: Sözcüğün Gerçek Yüzü",
      summary:
        "Sözcüğün sözlükteki temel anlamını, yan anlamı ve bağlam içinde nasıl yorumlandığını keşfederken anlam kapılarını aralarız.",
      objectives: [
        "Sözcüğün gerçek (temel) anlamını bağlamdan ayırt edebilmek",
        "Yan anlam örneklerini gerçek anlamdan türeterek açıklayabilmek",
        "Sözcüklerin iletişimdeki rolünü kavramak",
        "Günlük hayattan örneklerle doğru yorum yapma becerisini geliştirmek",
      ],
      content: [
        {
          heading: "Sözcük nedir?",
          body:
            "Sözcük, bir varlığı, kavramı ya da eylemi karşılayan en küçük anlamlı dil birimidir. İletişimin temel taşıdır ve her bağlamda yeni anlam ilişkileri doğurabilir.",
        },
        {
          heading: "Gerçek (temel) anlam",
          body:
            "Bir sözcüğün sözlükte yer alan ilk anlamına ve bu anlamdan uzaklaşmadan kazandığı kullanımlara gerçek anlam denir. Yan anlam ise gerçek anlamdan tamamen kopmadan ortaya çıkar ve ortaokul düzeyinde gerçek anlam başlığı altında değerlendirilir.",
        },
        {
          heading: "Bağlamın gücü",
          body:
            "Sözcüklerin anlamını belirleyen en önemli unsur cümle içindeki konumudur. Aynı sözcük, bağlamına göre gerçek ya da yan anlamlı kullanılabilir. Bağlamı okumak anlamı çözmenin anahtarıdır.",
        },
      ],
      examples: [
        "Kapının kolu gevşemiş. (Yan anlam, gerçek anlamdan uzaklaşmadan)",
        "Sınıfın kapısı açık kaldı. (Gerçek anlam)",
        "Şişenin ağzını kapatır mısın? (Yan anlam)",
        "İki gündür dişinde bir sızı hissediyordu. (Gerçek anlam)",
      ],
      activities: [
        {
          id: "unit01-lesson01-activity01",
          title: "Gerçek mi, Yan mı?",
          description: "Cümlenin anlam ipuçlarını yakalayarak sözcüğün kullanımını sınıflandır.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson01-activity01-q01",
              type: "true-false",
              prompt: "\"Kitabın sayfaları yıpranmış.\" cümlesinde SAYFA sözcüğü gerçek anlamda kullanılmıştır.",
              correctAnswer: true,
              explanation: "Somut olarak dokunulabilen nesne temel anlamı gösterir.",
            },
            {
              id: "unit01-lesson01-activity01-q02",
              type: "true-false",
              prompt: "\"Sözleri kalbimi delip geçti.\" cümlesinde KALP sözcüğü gerçek anlamdadır.",
              correctAnswer: false,
              explanation: "Kalp burada duygusal merkez anlamıyla mecaza yaklaşır.",
            },
            {
              id: "unit01-lesson01-activity01-q03",
              type: "true-false",
              prompt: "\"Cam kırılınca herkes irkildi.\" cümlesinde KIRILMAK sözcüğü gerçek anlamlıdır.",
              correctAnswer: true,
            },
            {
              id: "unit01-lesson01-activity01-q04",
              type: "true-false",
              prompt: "\"Bu haber yüreğimi yaktı.\" cümlesinde YAKMAK sözcüğü gerçek anlamda kullanılmıştır.",
              correctAnswer: false,
            },
            {
              id: "unit01-lesson01-activity01-q05",
              type: "true-false",
              prompt: "\"Kahvenin kokusu mutfağı sardı.\" cümlesinde KOKU somut anlamlıdır.",
              correctAnswer: true,
            },
          ],
          successCriteria: {
            minimumScore: 4,
          },
        },
        {
          id: "unit01-lesson01-activity02",
          title: "Anlamı Tamamla",
          description: "Boşlukları doğru sözcükle doldurarak anlam bütünlüğünü sağla.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson01-activity02-q01",
              type: "fill-in-the-blank",
              prompt: "Gerçek anlam, sözcüğün __________ yer alan ilk anlamıdır.",
              answer: "sözlükte",
            },
            {
              id: "unit01-lesson01-activity02-q02",
              type: "fill-in-the-blank",
              prompt: "Yan anlam, sözcüğün gerçek anlamından tamamen kopmadan kazandığı __________ anlamdır.",
              answer: "yeni",
            },
            {
              id: "unit01-lesson01-activity02-q03",
              type: "fill-in-the-blank",
              prompt: "Bir sözcüğün hangi anlamda kullanıldığını çözmek için __________ dikkatle okumalıyız.",
              answer: "bağlamı",
            },
            {
              id: "unit01-lesson01-activity02-q04",
              type: "fill-in-the-blank",
              prompt: "Sözcükler iletişimde anlamlı en __________ birimlerdir.",
              answer: "küçük",
            },
          ],
          successCriteria: {
            minimumScore: 3,
          },
        },
        {
          id: "unit01-lesson01-activity03",
          title: "Kelime Avı: Gerçek Anlam Takibi",
          description: "Karışık cümlelerden gerçek anlamda kullanılan sözcükleri yakala.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson01-activity03-q01",
              type: "matching",
              prompt: "Gerçek anlamlı sözcükleri bulup açıklamalarıyla eşleştir.",
              pairs: [
                { left: "omuz", right: "Vücudun bir parçası" },
                { left: "masa", right: "Üzerine eşyaların konduğu mobilya" },
                { left: "kulak", right: "İşitme organı" },
              ],
            },
            {
              id: "unit01-lesson01-activity03-q02",
              type: "multiple-choice",
              prompt: "\"Kalem masanın üstünde.\" cümlesinde altı çizili sözcük hangi anlamdadır?",
              options: [
                { id: "A", label: "Gerçek", isCorrect: true },
                { id: "B", label: "Mecaz", isCorrect: false },
                { id: "C", label: "Terim", isCorrect: false },
                { id: "D", label: "Soyut", isCorrect: false },
              ],
            },
          ],
          metadata: {
            gameType: "word-search",
            instructions: "Tahtadaki cümlelerden gerçek anlamlı sözcükleri seç. Her doğru seçim 10 puan kazandırır.",
            durationMinutes: 3,
          },
        },
      ],
      quiz: {
        id: "unit01-lesson01-quiz",
        title: "Konu Sonu Testi: Gerçek ve Yan Anlam",
        description: "Gerçek ve yan anlam ayırt etme becerini 10 soruluk mini testle ölç.",
        passingScore: 70,
        questions: [
          {
            id: "unit01-lesson01-q01",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde 'kapı' sözcüğü gerçek anlamdadır?",
            options: [
              { id: "A", label: "Kapıyı araladığında yeni bir hayat başladı.", isCorrect: false },
              { id: "B", label: "Kapının kolu kırıldığı için açılmadı.", isCorrect: true },
              { id: "C", label: "Fırsat kapısı yüzüne kapandı.", isCorrect: false },
              { id: "D", label: "Kapılar ardına kadar açıldı başarıya.", isCorrect: false },
            ],
            explanation: "Fiziksel kapıdan söz eden seçenek gerçek anlamdadır.",
          },
          {
            id: "unit01-lesson01-q02",
            type: "multiple-choice",
            prompt: "\"Onun kalbi çok temizdir.\" cümlesindeki 'kalp' sözcüğü hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Soyut", isCorrect: false },
            ],
            explanation: "Duygusal özellikleri anlatırken mecaz anlam kullanılır.",
          },
          {
            id: "unit01-lesson01-q03",
            type: "multiple-choice",
            prompt: "\"Haberler içimi ferahlattı.\" cümlesinde altı çizili ifade hangi anlamda kullanılmıştır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q04",
            type: "multiple-choice",
            prompt: "Aşağıdakilerin hangisinde sözcük gerçek anlamında kullanılmıştır?",
            options: [
              { id: "A", label: "Adamın eli açıkmış.", isCorrect: false },
              { id: "B", label: "Çocuğun elini tuttum.", isCorrect: true },
              { id: "C", label: "Gönlü zengin insanların yeri ayrıdır.", isCorrect: false },
              { id: "D", label: "Kalbi taş kesilmişti.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q05",
            type: "multiple-choice",
            prompt: "\"Sıcak haberler ardı ardına geldi.\" cümlesinde 'sıcak' sözcüğü hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Soyut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q06",
            type: "multiple-choice",
            prompt: "\"Babamın sözleri içimi ısıttı.\" cümlesindeki altı çizili ifade için doğru olan hangisidir?",
            options: [
              { id: "A", label: "Gerçek anlamdadır.", isCorrect: false },
              { id: "B", label: "Yan anlamlıdır.", isCorrect: false },
              { id: "C", label: "Mecaz anlamlıdır.", isCorrect: true },
              { id: "D", label: "Terim anlamlıdır.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q07",
            type: "multiple-choice",
            prompt: "\"Pencereyi kapatır mısın?\" cümlesinde 'pencere' sözcüğü hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: true },
              { id: "B", label: "Mecaz", isCorrect: false },
              { id: "C", label: "Yan", isCorrect: false },
              { id: "D", label: "Soyut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q08",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük yan anlamdadır?",
            options: [
              { id: "A", label: "Çocuğun kafası karışmıştı.", isCorrect: true },
              { id: "B", label: "Kafasını duvara çarptı.", isCorrect: false },
              { id: "C", label: "Kafasında şapka vardı.", isCorrect: false },
              { id: "D", label: "Kafesin kapısı kilitliydi.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q09",
            type: "multiple-choice",
            prompt: "\"Yeni bir sayfa açıyoruz.\" cümlesinde 'sayfa' sözcüğü hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson01-q10",
            type: "multiple-choice",
            prompt: "\"Çiçeğin yaprakları sarardı.\" cümlesinde 'yaprak' sözcüğü hangi anlamda kullanılmıştır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: true },
              { id: "B", label: "Mecaz", isCorrect: false },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Soyut", isCorrect: false },
            ],
          },
        ],
      },
      recommendedGame: {
        title: "Gerçek Anlam Avcısı",
        description: "Görsel kartlarda verilen cümlelerde gerçek anlamda kullanılan sözcükleri yakala ve puan topla.",
        type: "match-up",
        vocabulary: ["kapı", "kol", "sayfa", "kalem", "masa", "kulak"],
      },
    },
    {
      id: "unit01-lesson-02",
      title: "Mecaz ve Yan Anlam Dünyası",
      summary:
        "Sözcüklerin temel anlamdan uzaklaşarak kazandığı yeni anlamları, deyimleri ve mecazları örneklerle inceleyip bağlamı çözümleriz.",
      objectives: [
        "Mecaz anlamlı kullanımları gerçek anlamdan ayırt edebilmek",
        "Deyim ve atasözlerinde sözcüklerin kazandığı mecazı açıklayabilmek",
        "Yan anlam, mecaz anlam ve deyim ilişkisini fark etmek",
        "Bağlam analizini kullanarak anlam kaymasını yorumlamak",
      ],
      content: [
        {
          heading: "Mecaz (figuratif) anlam",
          body:
            "Bir sözcüğün gerçek anlamından tamamen uzaklaşarak yeni bir anlam kazanmasına mecaz denir. Duyguları, düşünceleri ve soyut kavramları anlatırken mecazlardan yararlanırız.",
        },
        {
          heading: "Yan anlam ve deyimler",
          body:
            "Yan anlam gerçek anlamla bağını koparmadan ortaya çıkar, mecaz ise bambaşka bir çağrışım kurar. Deyimler çoğunlukla mecaz anlamlıdır ve kalıplaşmış sözlerdir.",
        },
        {
          heading: "Bağlam çözümlemesi",
          body:
            "Bir sözcüğün mecaz olup olmadığını anlamanın en güvenilir yolu bağlamı incelemektir. Cümledeki diğer sözcükler ve duygusal ton bize ipucu verir.",
        },
      ],
      examples: [
        "Sözleri kalbime dokundu. (Mecaz)",
        "Soğuk hava kemiklerime işledi. (Mecaz)",
        "Yeni projeye ışık tutacak. (Mecaz)",
        "Masadaki kitaplar düzenliydi. (Gerçek)",
      ],
      activities: [
        {
          id: "unit01-lesson02-activity01",
          title: "Mecaz Avcısı",
          description: "Cümlelerdeki mecaz kullanımını tespit et ve türünü belirle.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson02-activity01-q01",
              type: "multiple-choice",
              prompt: "\"Bu olay içimi yaktı.\" cümlesinde altı çizili ifade hangi anlamdadır?",
              options: [
                { id: "A", label: "Gerçek", isCorrect: false },
                { id: "B", label: "Yan", isCorrect: false },
                { id: "C", label: "Mecaz", isCorrect: true },
                { id: "D", label: "Terim", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson02-activity01-q02",
              type: "multiple-choice",
              prompt: "\"Çocuk sevinçten havalara uçtu.\" cümlesi için doğru ifade hangisidir?",
              options: [
                { id: "A", label: "Gerçek anlamlıdır.", isCorrect: false },
                { id: "B", label: "Mecaz anlamlıdır.", isCorrect: true },
                { id: "C", label: "Terim anlamlıdır.", isCorrect: false },
                { id: "D", label: "Somut anlamlıdır.", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson02-activity01-q03",
              type: "multiple-choice",
              prompt: "\"Onun kalemi kuvvetlidir.\" ifadesi ne anlatır?",
              options: [
                { id: "A", label: "Yazdığı yazılar etkilidir.", isCorrect: true },
                { id: "B", label: "Kalemi ağırdır.", isCorrect: false },
                { id: "C", label: "Kalemi kırılmıştır.", isCorrect: false },
                { id: "D", label: "Kalemi kaybolmuştur.", isCorrect: false },
              ],
            },
          ],
          successCriteria: {
            minimumScore: 2,
          },
        },
        {
          id: "unit01-lesson02-activity02",
          title: "Deyim Tamamlama",
          description: "Eksik bırakılan deyimleri tamamlayarak mecaz anlamı yakala.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson02-activity02-q01",
              type: "fill-in-the-blank",
              prompt: "'Gözüne __________ girmek' deyimini tamamla.",
              answer: "girmek",
            },
            {
              id: "unit01-lesson02-activity02-q02",
              type: "fill-in-the-blank",
              prompt: "'İçine __________ düşmek' deyimindeki boşluğu doldur.",
              answer: "kurt",
            },
            {
              id: "unit01-lesson02-activity02-q03",
              type: "fill-in-the-blank",
              prompt: "'Burnundan __________ getirmek' deyiminin eksik sözcüğünü yaz.",
              answer: "fitil",
            },
          ],
        },
        {
          id: "unit01-lesson02-activity03",
          title: "Adam Asmaca: Duygu Mecazları",
          description: "Mecaz anlamlı sözcükleri tahmin ederek adam asmaca oyununda ipucu topla.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson02-activity03-q01",
              type: "matching",
              prompt: "Duyguları anlatan mecaz ifadeleri anlamlarıyla eşleştir.",
              pairs: [
                { left: "yüreği buz kesmek", right: "Ani bir korku yaşamak" },
                { left: "kanatları olmak", right: "Özgürleşmek" },
                { left: "kalbini kırmak", right: "Üzmek" },
              ],
            },
            {
              id: "unit01-lesson02-activity03-q02",
              type: "multiple-choice",
              prompt: "\"Dilinde tüy bitti.\" cümlesi ne anlatır?",
              options: [
                { id: "A", label: "Çok konuştuğunu", isCorrect: true },
                { id: "B", label: "Dilsiz kaldığını", isCorrect: false },
                { id: "C", label: "Dili yaralandığını", isCorrect: false },
                { id: "D", label: "Dili üşüdüğünü", isCorrect: false },
              ],
            },
          ],
          metadata: {
            gameType: "hangman",
            instructions: "Her doğru harf yeni bir ipucu açar. 60 saniyede mecaz ifadeyi çöz!",
            durationMinutes: 4,
          },
        },
      ],
      quiz: {
        id: "unit01-lesson02-quiz",
        title: "Konu Sonu Testi: Mecaz ve Deyimler",
        description: "Mecaz anlamı tanıma ve yorumlama becerini 10 soruluk testle pekiştir.",
        passingScore: 70,
        questions: [
          {
            id: "unit01-lesson02-q01",
            type: "multiple-choice",
            prompt: "\"Adam sıkıntıdan taş kesildi.\" cümlesinde 'taş kesilmek' hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Soyut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q02",
            type: "multiple-choice",
            prompt: "\"Bu sözleri içime sindiremedim.\" ifadesinde altı çizili bölüm hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q03",
            type: "multiple-choice",
            prompt: "\"Gün doğmadan neler doğar.\" atasözündeki 'doğmak' fiili hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q04",
            type: "multiple-choice",
            prompt: "Aşağıdaki deyimlerden hangisi 'sabırlı olmayı' anlatır?",
            options: [
              { id: "A", label: "Dişini sıkmak", isCorrect: true },
              { id: "B", label: "Kafayı takmak", isCorrect: false },
              { id: "C", label: "Gözü doymaz", isCorrect: false },
              { id: "D", label: "Ağzı kulaklarına varmak", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q05",
            type: "multiple-choice",
            prompt: "\"Kalbini kırmak\" deyimi ne ifade eder?",
            options: [
              { id: "A", label: "Kalp organının zarar görmesini", isCorrect: false },
              { id: "B", label: "Birini üzmeyi", isCorrect: true },
              { id: "C", label: "Kalp hastalığı yaşamayı", isCorrect: false },
              { id: "D", label: "Sporda yorulmayı", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q06",
            type: "multiple-choice",
            prompt: "\"Ayakları yerden kesilmek\" deyimi ne anlatır?",
            options: [
              { id: "A", label: "Düşmek", isCorrect: false },
              { id: "B", label: "Havalanmak", isCorrect: false },
              { id: "C", label: "Çok mutlu olmak", isCorrect: true },
              { id: "D", label: "Yorulmak", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q07",
            type: "multiple-choice",
            prompt: "\"Ödevlerini su gibi ezberledi.\" cümlesinde 'su gibi' ifadesi hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q08",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde mecaz yoktur?",
            options: [
              { id: "A", label: "Sevincinden yerinde duramıyordu.", isCorrect: false },
              { id: "B", label: "Sözleri kalbimi yaraladı.", isCorrect: false },
              { id: "C", label: "Kapıyı çalıp içeri girdi.", isCorrect: true },
              { id: "D", label: "Gözleri ışıl ışıl parlıyordu.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q09",
            type: "multiple-choice",
            prompt: "\"Bu haber içimize su serpti.\" cümlesi ne anlatır?",
            options: [
              { id: "A", label: "Herkes su içti.", isCorrect: false },
              { id: "B", label: "Herkes rahatladı.", isCorrect: true },
              { id: "C", label: "Herkes üzüldü.", isCorrect: false },
              { id: "D", label: "Herkes ağladı.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson02-q10",
            type: "multiple-choice",
            prompt: "\"Gözünü dört aç.\" cümlesi hangi davranışı önerir?",
            options: [
              { id: "A", label: "Çok dikkatli olmayı", isCorrect: true },
              { id: "B", label: "Uykusuz kalmayı", isCorrect: false },
              { id: "C", label: "Hızlı koşmayı", isCorrect: false },
              { id: "D", label: "Sessiz olmayı", isCorrect: false },
            ],
          },
        ],
      },
      recommendedGame: {
        title: "Mecaz Labirenti",
        description: "Labirentte ilerlerken mecaz anlamlı kartları topla, yanlış kartlar seni başa döndürür.",
        type: "rapid-response",
        vocabulary: ["kalp kırmak", "taş kesilmek", "gözünü dört açmak", "su serpmek", "kanatlanmak"],
      },
    },
    {
      id: "unit01-lesson-03",
      title: "Somut, Soyut ve Terim Gücü",
      summary:
        "Duyu organlarımızla algılanabilen somut kavramları, zihinde var olan soyut kavramları ve bilimsel terimleri ayırt ederiz.",
      objectives: [
        "Somut ve soyut kavramları cümle içinde tespit edebilmek",
        "Terim anlamlı sözcükleri alanlarına göre sınıflandırmak",
        "Günlük, bilimsel ve duygusal dil arasındaki farkı kavramak",
        "Somut-soyut dönüşümlerini örneklerle açıklamak",
      ],
      content: [
        {
          heading: "Somut anlam",
          body:
            "Beş duyu organımızdan en az biriyle algılayabildiğimiz kavramlar somut anlam taşır. Görmek, duymak, tatmak, koklamak ve dokunmak somutluğun ölçütleridir.",
        },
        {
          heading: "Soyut anlam",
          body:
            "Duyu organlarımızla algılanamayan, zihinsel süreçlerle kavranan kavramlar soyuttur. Sevgi, adalet, mutluluk gibi duygular soyut anlamlı sözcüklere örnektir.",
        },
        {
          heading: "Terim anlam",
          body:
            "Bilim, sanat ya da meslek alanlarında ortak anlamda kullanılan sözcüklere terim denir. Terimler alanın içindeki iletişimi standartlaştırır.",
        },
      ],
      examples: [
        "Taze ekmeğin kokusu mutfağı sardı. (Somut)",
        "Cesaret en zor anlarda ortaya çıkar. (Soyut)",
        "Perspektif resmi üç boyutlu gösterir. (Terim)",
        "Oyunun perdesi alkışlarla kapandı. (Terim)",
      ],
      activities: [
        {
          id: "unit01-lesson03-activity01",
          title: "Somut mu Soyut mu?",
          description: "Kartları duyu organlarına göre ayırarak anlam türlerini keşfet.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson03-activity01-q01",
              type: "multiple-choice",
              prompt: "\"Sevgi insanı iyileştirir.\" cümlesindeki 'sevgi' hangi türdedir?",
              options: [
                { id: "A", label: "Somut", isCorrect: false },
                { id: "B", label: "Soyut", isCorrect: true },
                { id: "C", label: "Terim", isCorrect: false },
                { id: "D", label: "Yan anlam", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson03-activity01-q02",
              type: "multiple-choice",
              prompt: "\"Sahnedeki ışıklar kamaştırdı.\" cümlesindeki 'ışık' hangi türdedir?",
              options: [
                { id: "A", label: "Somut", isCorrect: true },
                { id: "B", label: "Soyut", isCorrect: false },
                { id: "C", label: "Terim", isCorrect: false },
                { id: "D", label: "Mecaz", isCorrect: false },
              ],
            },
          ],
        },
        {
          id: "unit01-lesson03-activity02",
          title: "Terim Radar",
          description: "Alanlara göre terim kartlarını doğru başlık altına sürükle.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson03-activity02-q01",
              type: "matching",
              prompt: "Terimleri alanlarıyla eşleştir.",
              pairs: [
                { left: "ofsayt", right: "Futbol" },
                { left: "parabol", right: "Matematik" },
                { left: "perde", right: "Tiyatro" },
              ],
            },
          ],
          metadata: {
            gameType: "match-up",
            instructions: "Kartları doğru alana bıraktıkça yıldız kazanırsın.",
            durationMinutes: 3,
          },
        },
        {
          id: "unit01-lesson03-activity03",
          title: "Hızlı Cevap: Somut-Soyut",
          description: "Zamana karşı yarışarak verilen sözcüğün türünü seç.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson03-activity03-q01",
              type: "multiple-choice",
              prompt: "\"Adalet\" sözcüğü hangi türdedir?",
              options: [
                { id: "A", label: "Somut", isCorrect: false },
                { id: "B", label: "Soyut", isCorrect: true },
                { id: "C", label: "Terim", isCorrect: false },
                { id: "D", label: "Mecaz", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson03-activity03-q02",
              type: "multiple-choice",
              prompt: "\"Hücre\" sözcüğünün bu bağlamdaki en doğru sınıflandırması hangisidir?",
              options: [
                { id: "A", label: "Somut nesne", isCorrect: false },
                { id: "B", label: "Bilimsel terim", isCorrect: true },
                { id: "C", label: "Soyut kavram", isCorrect: false },
                { id: "D", label: "Mecaz kullanım", isCorrect: false },
              ],
            },
          ],
          metadata: {
            gameType: "speed-run",
            instructions: "60 saniyede mümkün olduğunca çok doğru cevap ver.",
          },
        },
      ],
      quiz: {
        id: "unit01-lesson03-quiz",
        title: "Konu Sonu Testi: Somut, Soyut, Terim",
        description: "Somut-soyut-terim ayrımını pekiştiren 10 soruluk test.",
        passingScore: 70,
        questions: [
          {
            id: "unit01-lesson03-q01",
            type: "multiple-choice",
            prompt: "Aşağıdaki sözcüklerden hangisi soyut anlamlıdır?",
            options: [
              { id: "A", label: "Sevgi", isCorrect: true },
              { id: "B", label: "Masa", isCorrect: false },
              { id: "C", label: "Kalem", isCorrect: false },
              { id: "D", label: "Pencere", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q02",
            type: "multiple-choice",
            prompt: "\"Fizikte hız vektörel bir büyüklüktür.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
            options: [
              { id: "A", label: "Terim", isCorrect: true },
              { id: "B", label: "Gerçek", isCorrect: false },
              { id: "C", label: "Mecaz", isCorrect: false },
              { id: "D", label: "Yan", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q03",
            type: "multiple-choice",
            prompt: "\"Çocuğun mutluluğu gözlerinden okunuyordu.\" cümlesinde 'mutluluk' hangi türdedir?",
            options: [
              { id: "A", label: "Somut", isCorrect: false },
              { id: "B", label: "Soyut", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Mecaz", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q04",
            type: "multiple-choice",
            prompt: "\"Oyunun ikinci perdesi daha hareketliydi.\" cümlesindeki 'perde' hangi anlamdadır?",
            options: [
              { id: "A", label: "Terim", isCorrect: true },
              { id: "B", label: "Somut", isCorrect: false },
              { id: "C", label: "Soyut", isCorrect: false },
              { id: "D", label: "Mecaz", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q05",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde somut anlamlı bir sözcük vardır?",
            options: [
              { id: "A", label: "Adalet yerini buldu.", isCorrect: false },
              { id: "B", label: "Sepette üç tane elma vardı.", isCorrect: true },
              { id: "C", label: "Cesaretini topladı.", isCorrect: false },
              { id: "D", label: "Mutluluk paylaştıkça artar.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q06",
            type: "multiple-choice",
            prompt: "\"Laboratuvarda mikroskopla hücre inceledik.\" cümlesinde 'mikroskop' sözcüğü aşağıdakilerden hangisine örnektir?",
            options: [
              { id: "A", label: "Somut araç", isCorrect: false },
              { id: "B", label: "Soyut duygu", isCorrect: false },
              { id: "C", label: "Bilimsel terim", isCorrect: true },
              { id: "D", label: "Mecaz anlam", isCorrect: false },
            ],
            explanation: "Mikroskop bilimsel bir kavramı adlandıran terimdir ve aynı zamanda somut bir araçtır.",
          },
          {
            id: "unit01-lesson03-q07",
            type: "multiple-choice",
            prompt: "Aşağıdaki sözcük çiftlerinden hangisi terimdir?",
            options: [
              { id: "A", label: "Özne - yüklem", isCorrect: true },
              { id: "B", label: "Sevgi - özlem", isCorrect: false },
              { id: "C", label: "Taş - toprak", isCorrect: false },
              { id: "D", label: "Yıldız - gökyüzü", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q08",
            type: "multiple-choice",
            prompt: "\"Kardeşinin yüreği sevgi dolu.\" cümlesindeki altı çizili sözcük hangi türdedir?",
            options: [
              { id: "A", label: "Somut", isCorrect: false },
              { id: "B", label: "Soyut", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Yan", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q09",
            type: "multiple-choice",
            prompt: "\"Futbolda ofsayt kuralı vardır.\" cümlesindeki altı çizili sözcük hangi türdedir?",
            options: [
              { id: "A", label: "Somut", isCorrect: false },
              { id: "B", label: "Soyut", isCorrect: false },
              { id: "C", label: "Terim", isCorrect: true },
              { id: "D", label: "Mecaz", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson03-q10",
            type: "multiple-choice",
            prompt: "\"Onunla konuşmak bana huzur veriyor.\" cümlesindeki 'huzur' hangi türdedir?",
            options: [
              { id: "A", label: "Somut", isCorrect: false },
              { id: "B", label: "Soyut", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Mecaz", isCorrect: false },
            ],
          },
        ],
      },
      recommendedGame: {
        title: "Somut-Soyut Pisti",
        description: "Hızlı koşu pistinde verilen kelimeyi doğru kategoriye sürükleyerek hız bonusu kazan.",
        type: "speed-run",
        vocabulary: ["sevgi", "elma", "adalet", "perspektif", "mikroskop", "özlem"],
      },
    },
    {
      id: "unit01-lesson-04",
      title: "Bağlamda Anlam ve Çok Anlamlılık",
      summary:
        "Sözcüklerin farklı bağlamlarda birden çok anlam kazanmasını inceleyerek anlam haritaları çıkarırız.",
      objectives: [
        "Çok anlamlı sözcükleri bağlamına göre yorumlayabilmek",
        "Cümlede anlam ipuçlarını analiz etmek",
        "Sözcüklerin anlam değişimini örneklerle açıklamak",
        "Ünite finaline hazırlık için karma sorulara hızla cevap vermek",
      ],
      content: [
        {
          heading: "Çok anlamlılık",
          body:
            "Bir sözcüğün farklı bağlamlarda farklı anlamlar taşımasına çok anlamlılık denir. Sözcük, kullanıldığı cümleye göre anlam değiştirir.",
        },
        {
          heading: "Bağlam ipuçları",
          body:
            "Bağlamı çözmek için cümledeki diğer sözcükleri, duygusal tonu, zaman ve mekân ifadelerini inceleriz. Soruda geçen anahtar kelimeler yorumu yönlendirir.",
        },
        {
          heading: "Anlam haritası",
          body:
            "Bir sözcüğün bütün anlamlarını listeleyip örnek cümlelerle eşleştirmek öğrenmeyi kalıcı hale getirir. Çok anlamlı sözcükler söz varlığımızı zenginleştirir.",
        },
      ],
      examples: [
        "Bu kap üç litre süt alır. (Kap: eşya)",
        "Sınavdan tam not aldı. (Almak: elde etmek)",
        "Yaptığı resim ödül aldı. (Almak: kazanmak)",
        "Yaşlı adam bastonuna yaslandı. (Baston: nesne)",
      ],
      activities: [
        {
          id: "unit01-lesson04-activity01",
          title: "Bağlam Çözümleyici",
          description: "Her cümlede altı çizili sözcüğün anlamını bağlamdan yola çıkarak seç.",
          type: "quiz",
          questions: [
            {
              id: "unit01-lesson04-activity01-q01",
              type: "multiple-choice",
              prompt: "\"Bu yıl hedeflerimizi yükselttik.\" cümlesinde 'yükseltmek' hangi anlamdadır?",
              options: [
                { id: "A", label: "Yüksek bir yere çıkarmak", isCorrect: false },
                { id: "B", label: "Dereceyi artırmak", isCorrect: true },
                { id: "C", label: "Yardım etmek", isCorrect: false },
                { id: "D", label: "Hediye etmek", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson04-activity01-q02",
              type: "multiple-choice",
              prompt: "\"Kitabı raftan alır mısın?\" cümlesindeki 'almak' fiili hangi anlamdadır?",
              options: [
                { id: "A", label: "Satın almak", isCorrect: false },
                { id: "B", label: "Elde etmek", isCorrect: true },
                { id: "C", label: "Ödül kazanmak", isCorrect: false },
                { id: "D", label: "Sahiplenmek", isCorrect: false },
              ],
            },
          ],
        },
        {
          id: "unit01-lesson04-activity02",
          title: "Kelime Haritası",
          description: "Çok anlamlı sözcüklerin farklı anlamlarını eşleştirip örneklerle pekiştir.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson04-activity02-q01",
              type: "matching",
              prompt: "\"Almak\" fiilinin anlamlarını eşleştir.",
              pairs: [
                { left: "Ödül almak", right: "Başarı kazanmak" },
                { left: "Nefes almak", right: "Soluk alıp vermek" },
                { left: "Elma almak", right: "Satın almak" },
              ],
            },
          ],
          metadata: {
            gameType: "match-up",
            instructions: "Kartları doğru açıklamalarla eşleştir, yanlış eşleşmeler puan kaybettirir.",
          },
        },
        {
          id: "unit01-lesson04-activity03",
          title: "Hızlı Yanıt Arenası",
          description: "Bağlam sorularına süre karşı yarışarak cevap ver.",
          type: "game",
          questions: [
            {
              id: "unit01-lesson04-activity03-q01",
              type: "multiple-choice",
              prompt: "\"Sınavda yüksek bir not aldı.\" cümlesindeki 'almak' fiili hangi anlamı taşır?",
              options: [
                { id: "A", label: "Elde etmek", isCorrect: true },
                { id: "B", label: "Satın almak", isCorrect: false },
                { id: "C", label: "Kapmak", isCorrect: false },
                { id: "D", label: "Toplamak", isCorrect: false },
              ],
            },
            {
              id: "unit01-lesson04-activity03-q02",
              type: "true-false",
              prompt: "\"Masadaki çiçekleri al.\" cümlesinde 'almak' fiili ödül kazanmak anlamındadır.",
              correctAnswer: false,
            },
          ],
          metadata: {
            gameType: "rapid-response",
            instructions: "Her doğru cevap seri bonus kazandırır, yanlış cevap süreyi kısaltır.",
          },
        },
      ],
      quiz: {
        id: "unit01-lesson04-quiz",
        title: "Konu Sonu Testi: Bağlam Ustası",
        description: "Çok anlamlılık ve bağlam sorularından oluşan 10 soruluk test.",
        passingScore: 70,
        questions: [
          {
            id: "unit01-lesson04-q01",
            type: "multiple-choice",
            prompt: "\"Bu kap en fazla iki litre su alır.\" cümlesinde 'almak' fiili ne anlama gelir?",
            options: [
              { id: "A", label: "Satın almak", isCorrect: false },
              { id: "B", label: "İçine sığdırmak", isCorrect: true },
              { id: "C", label: "Ödül kazanmak", isCorrect: false },
              { id: "D", label: "Ücret vermek", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q02",
            type: "multiple-choice",
            prompt: "\"Masadaki tozu aldı.\" cümlesinde 'almak' fiili hangi anlamı taşır?",
            options: [
              { id: "A", label: "Temizlemek", isCorrect: true },
              { id: "B", label: "Satın almak", isCorrect: false },
              { id: "C", label: "Ödül kazanmak", isCorrect: false },
              { id: "D", label: "Götürmek", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q03",
            type: "multiple-choice",
            prompt: "\"Haberler içimizi rahatlattı.\" cümlesindeki altı çizili sözcük ne anlatır?",
            options: [
              { id: "A", label: "Fiziksel bir rahatlama", isCorrect: false },
              { id: "B", label: "Duygusal bir ferahlama", isCorrect: true },
              { id: "C", label: "Terim anlam", isCorrect: false },
              { id: "D", label: "Somut bir nesne", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q04",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük bağlamına göre farklı anlam kazanmıştır?",
            options: [
              { id: "A", label: "Kapıyı açtı.", isCorrect: false },
              { id: "B", label: "Bu haber kapıları açtı.", isCorrect: true },
              { id: "C", label: "Anahtarı buldu.", isCorrect: false },
              { id: "D", label: "Pencereyi kapattı.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q05",
            type: "multiple-choice",
            prompt: "\"Başarıya giden yol çalışmaktan geçer.\" cümlesindeki 'yol' sözcüğü hangi anlamda kullanılmıştır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q06",
            type: "multiple-choice",
            prompt: "\"Sözleri beynime kazındı.\" cümlesindeki altı çizili ifade için doğru seçenek hangisidir?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q07",
            type: "multiple-choice",
            prompt: "Aşağıdaki cümlelerin hangisinde 'almak' fiili ödül kazanmak anlamında kullanılmıştır?",
            options: [
              { id: "A", label: "Pazardan taze meyve aldı.", isCorrect: false },
              { id: "B", label: "Sınavdan yüksek not aldı.", isCorrect: true },
              { id: "C", label: "Kitabı rafa geri aldı.", isCorrect: false },
              { id: "D", label: "Dolaptan su aldı.", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q08",
            type: "multiple-choice",
            prompt: "\"Taş gibi adam.\" ifadesinde 'taş' sözcüğü hangi anlamdadır?",
            options: [
              { id: "A", label: "Gerçek", isCorrect: false },
              { id: "B", label: "Mecaz", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q09",
            type: "multiple-choice",
            prompt: "\"Masadan bir sandalye aldı.\" cümlesinde 'almak' fiili hangi anlamda kullanılmıştır?",
            options: [
              { id: "A", label: "Çalmak", isCorrect: false },
              { id: "B", label: "Bir yerden başka yere götürmek", isCorrect: true },
              { id: "C", label: "Satın almak", isCorrect: false },
              { id: "D", label: "Ödül kazanmak", isCorrect: false },
            ],
          },
          {
            id: "unit01-lesson04-q10",
            type: "multiple-choice",
            prompt: "\"Haberleri alınca içi içine sığmadı.\" ifadesinde altı çizili bölüm ne anlatır?",
            options: [
              { id: "A", label: "Fiziksel daralma", isCorrect: false },
              { id: "B", label: "Büyük heyecan", isCorrect: true },
              { id: "C", label: "Terim", isCorrect: false },
              { id: "D", label: "Somut nesne", isCorrect: false },
            ],
          },
        ],
      },
      recommendedGame: {
        title: "Bağlam Sprinti",
        description: "Ekrana düşen sözcükleri doğru bağlam kartıyla eşleştirerek seri bonuslar kazan.",
        type: "rapid-response",
        vocabulary: ["almak", "taş", "yol", "kapı", "yükseltmek", "ferahlamak"],
      },
    },
  ],
  finalExam: {
    id: "unit01-final-exam",
    title: "Ünite Final Testi: Sözcükte Anlam Ustalığı",
    description: "40 soruluk kapsamlı test ile tüm konuları tekrar et ve rozetini kazan.",
    passingScore: 70,
    unlockCondition: {
      minimumLessonCompletion: 70,
      minimumOverallScore: 70,
    },
    questions: [
      {
        id: "unit01-final-q01",
        type: "multiple-choice",
        prompt: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük gerçek anlamdadır?",
        options: [
          { id: "A", label: "Kalbi kırıldı.", isCorrect: false },
          { id: "B", label: "Kafası kazan gibiydi.", isCorrect: false },
          { id: "C", label: "Masadaki bardak doluydu.", isCorrect: true },
          { id: "D", label: "Taş gibi adamdı.", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q02",
        type: "multiple-choice",
        prompt: "\"Güneş doğmadan yola çıktık.\" cümlesindeki 'doğmak' fiili hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: true },
          { id: "B", label: "Mecaz", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Soyut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q03",
        type: "multiple-choice",
        prompt: "\"Onun sözleri içime işledi.\" cümlesindeki altı çizili bölüm hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q04",
        type: "multiple-choice",
        prompt: "\"Perspektif, resimde derinlik algısını güçlendirir.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: false },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: true },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q05",
        type: "multiple-choice",
        prompt: "\"Bu kitap bana yeni kapılar açtı.\" cümlesinde 'kapı' hangi anlamda kullanılmıştır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q06",
        type: "multiple-choice",
        prompt: "\"Futbolcular sahaya çıktı.\" cümlesinde 'saha' sözcüğü aşağıdakilerden hangisiyle en iyi tanımlanır?",
        options: [
          { id: "A", label: "Gündelik bir mekân adı", isCorrect: false },
          { id: "B", label: "Spor terimi", isCorrect: true },
          { id: "C", label: "Soyut kavram", isCorrect: false },
          { id: "D", label: "Mecaz kullanım", isCorrect: false },
        ],
        explanation: "Saha sözcüğü spor alanını karşılayan terim olarak kullanılmıştır.",
      },
      {
        id: "unit01-final-q07",
        type: "multiple-choice",
        prompt: "\"Gözleri ışıl ışıl parlıyordu.\" cümlesinde altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q08",
        type: "multiple-choice",
        prompt: "\"Kalemini verir misin?\" cümlesinde 'kalem' sözcüğü hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: true },
          { id: "B", label: "Mecaz", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Soyut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q09",
        type: "multiple-choice",
        prompt: "\"İçine kurt düştü.\" deyimi ne anlatır?",
        options: [
          { id: "A", label: "Bir hayvanın içeri girmesini", isCorrect: false },
          { id: "B", label: "Endişe duymayı", isCorrect: true },
          { id: "C", label: "Sevinmeyi", isCorrect: false },
          { id: "D", label: "Utanmayı", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q10",
        type: "multiple-choice",
        prompt: "Aşağıdaki sözcüklerden hangisi terim anlamlıdır?",
        options: [
          { id: "A", label: "Perde", isCorrect: true },
          { id: "B", label: "Güneş", isCorrect: false },
          { id: "C", label: "Bahar", isCorrect: false },
          { id: "D", label: "Mutluluk", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q11",
        type: "multiple-choice",
        prompt: "\"Yüksek hedefler belirledik.\" cümlesinde 'yüksek' sözcüğü hangi anlamda kullanılmıştır?",
        options: [
          { id: "A", label: "Fiziksel yükseklik", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q12",
        type: "multiple-choice",
        prompt: "\"Okul takımında forvet oynuyor.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: false },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: true },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q13",
        type: "multiple-choice",
        prompt: "Aşağıdaki cümlelerin hangisinde soyut anlamlı bir sözcük vardır?",
        options: [
          { id: "A", label: "Masadaki kitapları düzenledim.", isCorrect: false },
          { id: "B", label: "Korku gözlerine yerleşti.", isCorrect: true },
          { id: "C", label: "Kapıyı kapattım.", isCorrect: false },
          { id: "D", label: "Pencereden baktım.", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q14",
        type: "multiple-choice",
        prompt: "\"Bu haber hepimizi rahatlattı.\" cümlesindeki altı çizili sözcük ne anlatır?",
        options: [
          { id: "A", label: "Fiziksel ısınma", isCorrect: false },
          { id: "B", label: "Duygusal ferahlama", isCorrect: true },
          { id: "C", label: "Somut nesne", isCorrect: false },
          { id: "D", label: "Terim", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q15",
        type: "multiple-choice",
        prompt: "\"Çalışkanlığıyla öğretmenlerinin gözüne girdi.\" ifadesindeki deyim ne anlatır?",
        options: [
          { id: "A", label: "Göze fiziksel olarak girmek", isCorrect: false },
          { id: "B", label: "Beğeni kazanmak", isCorrect: true },
          { id: "C", label: "Göz sağlığını yitirmek", isCorrect: false },
          { id: "D", label: "Gözlük kullanmak", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q16",
        type: "multiple-choice",
        prompt: "\"Hızlı cevap turu başladı.\" cümlesindeki 'tur' sözcüğü hangi anlamda kullanılmıştır?",
        options: [
          { id: "A", label: "Gezi", isCorrect: false },
          { id: "B", label: "Yarışın bölümü", isCorrect: true },
          { id: "C", label: "Tatil", isCorrect: false },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q17",
        type: "multiple-choice",
        prompt: "\"Bu karar içimize sinmedi.\" cümlesindeki altı çizili bölüm hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Somut", isCorrect: false },
          { id: "D", label: "Terim", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q18",
        type: "multiple-choice",
        prompt: "\"Laboratuvarda deney yaptı.\" cümlesindeki 'laboratuvar' hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: true },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: true },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q19",
        type: "multiple-choice",
        prompt: "Aşağıdaki cümlelerin hangisinde mecaz anlamlı bir sözcük yoktur?",
        options: [
          { id: "A", label: "Yüreğim ağzıma geldi.", isCorrect: false },
          { id: "B", label: "Taş gibi adamdı.", isCorrect: false },
          { id: "C", label: "Kapıyı kapatmayı unutma.", isCorrect: true },
          { id: "D", label: "Fırsat kapısı açıldı.", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q20",
        type: "multiple-choice",
        prompt: "\"Çocukluk yıllarını özlemle anardı.\" cümlesinde altı çizili sözcük hangi türdedir?",
        options: [
          { id: "A", label: "Somut", isCorrect: false },
          { id: "B", label: "Soyut", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q21",
        type: "multiple-choice",
        prompt: "\"Bilim insanları hücre üzerinde çalışıyor.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: true },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: true },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q22",
        type: "multiple-choice",
        prompt: "\"Kardeşinin yüreği sevgi doluydu.\" cümlesinde 'yürek' sözcüğü hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q23",
        type: "multiple-choice",
        prompt: "\"Derslerde nokta atışı sorular çözdük.\" cümlesindeki altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q24",
        type: "multiple-choice",
        prompt: "\"Öğretmenimiz konuyu baştan aldı.\" cümlesindeki 'almak' fiili hangi anlamı taşır?",
        options: [
          { id: "A", label: "Tekrar anlatmak", isCorrect: true },
          { id: "B", label: "Satın almak", isCorrect: false },
          { id: "C", label: "Ödül kazanmak", isCorrect: false },
          { id: "D", label: "Toplamak", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q25",
        type: "multiple-choice",
        prompt: "Aşağıdakilerden hangisi somut anlamlıdır?",
        options: [
          { id: "A", label: "Huzur", isCorrect: false },
          { id: "B", label: "Cesaret", isCorrect: false },
          { id: "C", label: "Koku", isCorrect: true },
          { id: "D", label: "Sevgi", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q26",
        type: "multiple-choice",
        prompt: "\"Sözün özü çalışmaktır.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q27",
        type: "multiple-choice",
        prompt: "\"O, sınıfın parlak öğrencilerindendir.\" ifadesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q28",
        type: "multiple-choice",
        prompt: "\"Beyni bilgiyle doldu.\" cümlesindeki altı çizili sözcük hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q29",
        type: "multiple-choice",
        prompt: "\"Yeni aldığı telefon çok hızlı.\" cümlesinde 'hızlı' sözcüğü hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: true },
          { id: "B", label: "Mecaz", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Soyut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q30",
        type: "multiple-choice",
        prompt: "\"Zor soruları bir çırpıda çözdü.\" cümlesinde altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q31",
        type: "multiple-choice",
        prompt: "\"Köydeki evler kerpiçten yapılmış.\" cümlesinde 'kerpiç' sözcüğü hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: true },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q32",
        type: "multiple-choice",
        prompt: "\"Gönlü zengin insanları severim.\" cümlesinde 'gönül' sözcüğü hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q33",
        type: "multiple-choice",
        prompt: "\"Çalışmalarıyla dikkat çekti.\" cümlesindeki altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q34",
        type: "multiple-choice",
        prompt: "Aşağıdaki cümlelerin hangisinde 'ayak' sözcüğü mecaz anlamda kullanılmıştır?",
        options: [
          { id: "A", label: "Ayakları üşümüş.", isCorrect: false },
          { id: "B", label: "Ayak sesleri yaklaşıyordu.", isCorrect: false },
          { id: "C", label: "Ayak uyduramadı.", isCorrect: true },
          { id: "D", label: "Ayakları ağrıyordu.", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q35",
        type: "multiple-choice",
        prompt: "\"İşin püf noktasını anlattı.\" cümlesindeki deyim ne ifade eder?",
        options: [
          { id: "A", label: "İşin en önemli yerini", isCorrect: true },
          { id: "B", label: "İşin başlangıcını", isCorrect: false },
          { id: "C", label: "İşin sonucunu", isCorrect: false },
          { id: "D", label: "İşin gereksiz kısmını", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q36",
        type: "multiple-choice",
        prompt: "\"Bu sözler kulağıma hoş geldi.\" cümlesinde altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q37",
        type: "multiple-choice",
        prompt: "\"Öğretmenimiz yeni bir yol haritası çizdi.\" cümlesindeki altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q38",
        type: "multiple-choice",
        prompt: "\"Cümlede özne ve yüklemi bulduk.\" cümlesindeki altı çizili sözcükler hangi anlamdadır?",
        options: [
          { id: "A", label: "Somut", isCorrect: false },
          { id: "B", label: "Soyut", isCorrect: false },
          { id: "C", label: "Terim", isCorrect: true },
          { id: "D", label: "Mecaz", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q39",
        type: "multiple-choice",
        prompt: "Aşağıdaki cümlelerin hangisinde 'taş' sözcüğü gerçek anlamda kullanılmıştır?",
        options: [
          { id: "A", label: "Kalbi taş kesildi.", isCorrect: false },
          { id: "B", label: "Bahçedeki taş çok ağırdı.", isCorrect: true },
          { id: "C", label: "Taş gibi sözler söyledi.", isCorrect: false },
          { id: "D", label: "Taş gibi uyudu.", isCorrect: false },
        ],
      },
      {
        id: "unit01-final-q40",
        type: "multiple-choice",
        prompt: "\"Yüreğini ortaya koydu.\" cümlesindeki altı çizili ifade hangi anlamdadır?",
        options: [
          { id: "A", label: "Gerçek", isCorrect: false },
          { id: "B", label: "Mecaz", isCorrect: true },
          { id: "C", label: "Terim", isCorrect: false },
          { id: "D", label: "Somut", isCorrect: false },
        ],
      },
    ],
  },
};

export default unit01;
