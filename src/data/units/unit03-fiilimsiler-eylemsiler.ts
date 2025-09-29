import type { Unit } from "../../types/course";

export const unit03: Unit = {
  id: "unit-03",
  title: "Fiilimsiler (Eylemsiler)",
  overview:
    "Fiil kök ve gövdelerine getirilen yapım ekleriyle türeyen fiilimsilerin genel özelliklerini, isim-fiil, sıfat-fiil ve zarf-fiil türlerini örnekleriyle açıklar.",
  topics: [
    {
      id: "unit03-topic-01",
      title: "Fiilimsilerin Genel Özellikleri",
      summary: "Fiil kök/gövdesine yapım ekleriyle türeyen, yarım yargı bildiren ve cümlede isim-sıfat-zarf görevlerinde kullanılabilen sözcüklerdir.",
      content:
        "Fiilimsiler, fiil kök ya da gövdelerine özel yapım ekleri getirilerek oluşturulur. Kip ve kişi ekleri almadıkları için çekimli fiil gibi yüklem olamazlar; buna karşılık cümlede isim, sıfat veya zarf görevi üstlenebilirler. Fiilimsiler yan cümlecik oluşturur, yarım yargı bildirir ve isim çekim eklerini (çoğul, tamlama, hâl ekleri gibi) alabilirler. Fiilimsi eklerinin tamamı yapım eki olduğundan, fiilimsi alan her sözcük türemiş sayılır.",
      examples: [
        "Çalışırken müzik dinlemeyi seviyorum.",
        "Verilen görevi zamanında bitirmek önemli.",
        "Koşarak gelen öğrenci nefes nefeseydi."
      ],
    },
    {
      id: "unit03-topic-02",
      title: "İsim-Fiiller (Mastarlar)",
      summary: "-ma/-me, -mak/-mek, -ış/-iş/-uş/-üş ekleriyle türeyen ve isim görevinde kullanılan fiilimsi türüdür.",
      content:
        "İsim-fiiller (mastarlar), fiil kök veya gövdelerine -ma/-me, -mak/-mek, -ış/-iş/-uş/-üş eklerinin getirilmesiyle oluşur. Cümlede isim görevinde kullanılırlar ve 'ma-y-ış-mak' formülüyle akılda tutulabilir. Olumsuzluk eki olan -ma/-me ile karıştırılmamalıdır; isim-fiil eki sözcüğü türetirken, olumsuzluk eki fiili olumsuz yapar. Bazı isim-fiiller kalıcı isim haline gelebilir: giriş, danışma, kaymak, ekmek gibi örneklerde fiilimsilikten bağımsız isimleşmişlerdir.",
      examples: [
        "Yüzmek tüm kasları çalıştırır.",
        "Okuma yazması yokmuş.",
        "Onun gelişi çok ani oldu.",
        "Bu danışma masası gün boyu açık."
      ],
    },
    {
      id: "unit03-topic-03",
      title: "Sıfat-Fiiller (Ortaçlar)",
      summary: "-an/-en, -ası/-esi, -mez/-maz, -ar/-er, -dik, -ecek, -miş gibi eklerle türeyip isimleri niteleyen fiilimsi türüdür.",
      content:
        "Sıfat-fiiller, fiile getirilen -an/-en, -ası/-esi, -mez/-maz, -ar/-er, -dik, -ecek, -miş gibi eklerle türetilir ve cümlede sıfat göreviyle isimleri niteleyip belirler. Ezber için 'anası mezar dikecekmiş' formülü kullanılır. Sıfat-fiiller bazen adlaşarak tek başına isim görevinde de kullanılabilir: 'Görev alacak öğrenciler belli oldu.' cümlesinde 'alacak' sözcüğü sıfat-fiildir; 'Görev alacaklar belli oldu.' cümlesinde ise adlaşmıştır. Sıfat-fiil ekleri kip veya kişi ekleriyle karıştırılmamalıdır: 'Giyecek.' (yüklem) ile 'Giyecek kıyafetim yok.' (sıfat-fiil) örneklerinde görüldüğü gibi bağlam ayırt edicidir.",
      examples: [
        "Şu gelen çocuk benim kardeşim.",
        "Okunacak kitaplarım var.",
        "Duyduğum sözlere inanamadım.",
        "Gelecek planlarını şimdiden yapmış."
      ],
    },
    {
      id: "unit03-topic-04",
      title: "Zarf-Fiiller (Bağ-Fiiller / Ulaçlar)",
      summary: "-ken, -alı/-eli, -esiye, -r…-maz, -a…-a, -ip, -ince, -arak/-erek, -madan/-meden, -maksızın, -dıkça, -casına gibi eklerle türeyip zarf görevinde kullanılan fiilimsi türüdür.",
      content:
        "Zarf-fiiller (bağ-fiiller/ulaçlar), fiile getirilen -ken, -alı/-eli, -esiye, -r…-maz, -a…-a, -ip, -ince, -arak/-erek, -madan/-meden, -maksızın, -dıkça, -casına gibi eklerle oluşturulur. Cümlede zarf görevinde kullanılarak fiilin nasıl, ne zaman, niçin yapıldığını bildirir ve cümleler arasında bağ kurar. 'diye, kala, geçe' sözcüklerindeki -a/-e ekleri de zarf-fiil ekidir. Zarf-fiiller yan cümlecik göreviyle ana cümleyi destekler.",
      examples: [
        "Çocuk yatar yatmaz uyudu.",
        "Ders çalışarak başarılı oldu.",
        "Okula giderken yağmur başladı.",
        "Söylediklerini dinleyip not aldım.",
        "Ödevini yapmadan dışarı çıkmadı."
      ],
    },
    {
      id: "unit03-topic-05",
      title: "Fiilimsi Türlerinin Özet Tablosu",
      summary: "İsim-fiil, sıfat-fiil ve zarf-fiil türlerini ekleri, görevleri ve örnekleriyle özetler.",
      content:
        "Fiilimsiler üç ana türde toplanır: İsim-fiil ekleri (-ma, -mak, -ış) sözcüğü isim görevine taşıyarak kalıcı veya geçici isimler oluşturur ('Çalışmak güzeldir.'); Sıfat-fiil ekleri (-an, -dik, -ecek, -miş vb.) sözcüğü sıfat göreviyle isimleri niteleyen yapılar haline getirir ('Gelen öğrenci başarılıydı.'); Zarf-fiil ekleri (-ken, -ip, -ince, -madan vb.) fiile zarf anlamı katar, durum ve zaman bildirir, cümleler arasında bağ kurar ('Görünce sevindim.'). Fiilimsilerin her biri türemiş sözcüklerdir ve cümleye yan cümlecik kazandırır.",
      examples: [
        "İsim-fiil: Çalışmak güzeldir.",
        "Sıfat-fiil: Gelen öğrenci başarılıydı.",
        "Zarf-fiil: Görünce sevindim."
      ],
    },
  ],

  practice: [
    {
      id: "unit03-test01-q01",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi bir fiilimsi değildir?",
      explanation: "'Gelmiş' kip eki almış çekimli fiildir; fiilimsi değildir.",
      options: [
        { id: "A", label: "a) gülmek", isCorrect: false },
        { id: "B", label: "b) gelince", isCorrect: false },
        { id: "C", label: "c) oturup", isCorrect: false },
        { id: "D", label: "d) gelmiş", isCorrect: true }
      ],
    },
    {
      id: "unit03-test01-q02",
      type: "multiple-choice",
      prompt: "Fiilimsilerle ilgili aşağıdakilerden hangisi yanlıştır?",
      explanation: "Fiilimsiler kip ve kişi eki almaz; bu yüzden çekimli fiil olmazlar.",
      options: [
        { id: "A", label: "a) Fiilden türetilirler.", isCorrect: false },
        { id: "B", label: "b) Kip ve kişi eki alabilirler.", isCorrect: true },
        { id: "C", label: "c) Olumsuz yapılabilirler.", isCorrect: false },
        { id: "D", label: "d) Yan cümle kurabilirler.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q03",
      type: "multiple-choice",
      prompt: "'Konuşmaları çok dikkat çekiciydi.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Konuşmaları' sözcüğündeki '-ma' eki fiili isimleştirir.",
      options: [
        { id: "A", label: "a) İsim-fiil", isCorrect: true },
        { id: "B", label: "b) Sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) Zarf-fiil", isCorrect: false },
        { id: "D", label: "d) Yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q04",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde fiilimsi kullanılmamıştır?",
      explanation: "'Gitmiş' çekimli fiildir; diğerlerinde fiilimsi vardır.",
      options: [
        { id: "A", label: "a) Seni görünce çok sevindim.", isCorrect: false },
        { id: "B", label: "b) Okumak insana fayda sağlar.", isCorrect: false },
        { id: "C", label: "c) Giden yolcular otobüse bindi.", isCorrect: false },
        { id: "D", label: "d) Dün okula gitmiş.", isCorrect: true }
      ],
    },
    {
      id: "unit03-test01-q05",
      type: "multiple-choice",
      prompt: "Fiilimsiler için aşağıdakilerden hangisi söylenemez?",
      explanation: "Fiilimsiler ek-fiil almaz.",
      options: [
        { id: "A", label: "a) Cümlede isim, sıfat ve zarf görevinde kullanılabilir.", isCorrect: false },
        { id: "B", label: "b) Ek-fiil alabilirler.", isCorrect: true },
        { id: "C", label: "c) Kip ve kişi eki almazlar.", isCorrect: false },
        { id: "D", label: "d) Yapım eki ile türetilirler.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q06",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi isim-fiildir?",
      explanation: "'Yüzmek' '-mek' ekiyle yapılmış isim-fiildir.",
      options: [
        { id: "A", label: "a) gelince", isCorrect: false },
        { id: "B", label: "b) yüzmek", isCorrect: true },
        { id: "C", label: "c) gidiyor", isCorrect: false },
        { id: "D", label: "d) kırılmış", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q07",
      type: "multiple-choice",
      prompt: "'Okumak, insanın ufkunu açar.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Okumak' mastardır.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q08",
      type: "multiple-choice",
      prompt: "'Gelişiyle bizi sevindirdi.' cümlesindeki isim-fiil ekini bulunuz.",
      explanation: "'Gelişi' sözcüğünde '-iş' eki vardır.",
      options: [
        { id: "A", label: "a) -iş", isCorrect: true },
        { id: "B", label: "b) -me", isCorrect: false },
        { id: "C", label: "c) -mak", isCorrect: false },
        { id: "D", label: "d) -lık", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q09",
      type: "multiple-choice",
      prompt: "'Anlamamak onun en büyük hatasıydı.' cümlesindeki fiilimsi türü nedir?",
      explanation: "'-mak' eki isim-fiil oluşturur.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q10",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerden hangisinde isim-fiil yoktur?",
      explanation: "'Gitmiş' çekimli fiildir.",
      options: [
        { id: "A", label: "a) Çalışmak başarıyı getirir.", isCorrect: false },
        { id: "B", label: "b) Gülmek bulaşıcıdır.", isCorrect: false },
        { id: "C", label: "c) Geziye gitmiş.", isCorrect: true },
        { id: "D", label: "d) Konuşması herkesi etkiledi.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q11",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi bir sıfat-fiildir?",
      explanation: "'Yürüyen' '-en' ekiyle sıfat-fiildir.",
      options: [
        { id: "A", label: "a) yazmak", isCorrect: false },
        { id: "B", label: "b) yürüyen", isCorrect: true },
        { id: "C", label: "c) gülmek", isCorrect: false },
        { id: "D", label: "d) geldik", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q12",
      type: "multiple-choice",
      prompt: "'Çalışkan öğrenciler sınavı kazandı.' cümlesinde fiilimsi hangisidir?",
      explanation: "Bu cümlede fiilimsi kullanılmamıştır.",
      options: [
        { id: "A", label: "a) çalışkan", isCorrect: false },
        { id: "B", label: "b) öğrenciler", isCorrect: false },
        { id: "C", label: "c) kazandı", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: true }
      ],
    },
    {
      id: "unit03-test01-q13",
      type: "multiple-choice",
      prompt: "'Söylediğin sözler kalbimi kırdı.' cümlesindeki fiilimsi nedir?",
      explanation: "'-dik' ekli 'söylediğin' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) söylediğin", isCorrect: true },
        { id: "B", label: "b) sözler", isCorrect: false },
        { id: "C", label: "c) kırdı", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q14",
      type: "multiple-choice",
      prompt: "'Yapılacak işler çoktur.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Yapılacak' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: false },
        { id: "B", label: "b) sıfat-fiil", isCorrect: true },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q15",
      type: "multiple-choice",
      prompt: "Aşağıdaki sözcüklerden hangisi sıfat-fiil değildir?",
      explanation: "'Koşmak' isim-fiildir.",
      options: [
        { id: "A", label: "a) sevilen", isCorrect: false },
        { id: "B", label: "b) yazılmış", isCorrect: false },
        { id: "C", label: "c) gelen", isCorrect: false },
        { id: "D", label: "d) koşmak", isCorrect: true }
      ],
    },
    {
      id: "unit03-test01-q16",
      type: "multiple-choice",
      prompt: "'Beni görünce yanıma geldi.' cümlesindeki fiilimsi nedir?",
      explanation: "'Görünce' zarf-fiildir.",
      options: [
        { id: "A", label: "a) görünce", isCorrect: true },
        { id: "B", label: "b) yanıma", isCorrect: false },
        { id: "C", label: "c) geldi", isCorrect: false },
        { id: "D", label: "d) beni", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q17",
      type: "multiple-choice",
      prompt: "'Yemeğini bitirip dışarı çıktı.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Bitirip' zarf-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: false },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: true },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q18",
      type: "multiple-choice",
      prompt: "'Ağlayarak dışarı çıktı.' cümlesindeki fiilimsi ekini bulunuz.",
      explanation: "'-arak' zarf-fiil ekidir.",
      options: [
        { id: "A", label: "a) -ma", isCorrect: false },
        { id: "B", label: "b) -arak", isCorrect: true },
        { id: "C", label: "c) -an", isCorrect: false },
        { id: "D", label: "d) -ış", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q19",
      type: "multiple-choice",
      prompt: "'Okula giderken yağmur başladı.' cümlesindeki fiilimsi nedir?",
      explanation: "'Giderken' zarf-fiildir.",
      options: [
        { id: "A", label: "a) giderken", isCorrect: true },
        { id: "B", label: "b) yağmur", isCorrect: false },
        { id: "C", label: "c) başladı", isCorrect: false },
        { id: "D", label: "d) okula", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q20",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde zarf-fiil vardır?",
      explanation: "'Çalışarak' zarf-fiildir.",
      options: [
        { id: "A", label: "a) Çalışmak güzeldir.", isCorrect: false },
        { id: "B", label: "b) Kitap okuyan çocukları severim.", isCorrect: false },
        { id: "C", label: "c) Ders çalışarak başarıya ulaştı.", isCorrect: true },
        { id: "D", label: "d) Defteri masaya koydu.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q21",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerden hangisinde isim-fiil vardır?",
      explanation: "'Çalışmak' isim-fiildir.",
      options: [
        { id: "A", label: "a) Gülerek yanıma geldi.", isCorrect: false },
        { id: "B", label: "b) Çalışmak her zaman faydalıdır.", isCorrect: true },
        { id: "C", label: "c) Gelen çocuk çok neşeliydi.", isCorrect: false },
        { id: "D", label: "d) Uykusuz kalınca yoruldu.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q22",
      type: "multiple-choice",
      prompt: "'Kırılan testiyi çöpe attı.' cümlesindeki fiilimsi nedir?",
      explanation: "'Kırılan' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) kırılan", isCorrect: true },
        { id: "B", label: "b) testiyi", isCorrect: false },
        { id: "C", label: "c) çöpe", isCorrect: false },
        { id: "D", label: "d) attı", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q23",
      type: "multiple-choice",
      prompt: "'Yorulmadan çalışıyordu.' cümlesindeki fiilimsi nedir?",
      explanation: "'Yorulmadan' zarf-fiildir.",
      options: [
        { id: "A", label: "a) yorulmadan", isCorrect: true },
        { id: "B", label: "b) çalışıyordu", isCorrect: false },
        { id: "C", label: "c) yok", isCorrect: false },
        { id: "D", label: "d) çalışmak", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q24",
      type: "multiple-choice",
      prompt: "'Dersleri dinleyerek başarılı oldu.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Dinleyerek' zarf-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: false },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: true },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q25",
      type: "multiple-choice",
      prompt: "'Okuma yazması yoktu.' cümlesindeki fiilimsi türü nedir?",
      explanation: "'Okuma' ve 'yazma' isim-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q26",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisi sıfat-fiil cümlesidir?",
      explanation: "'Gelen' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) Çalışarak başarıyı kazandı.", isCorrect: false },
        { id: "B", label: "b) Gelen misafirler çoktu.", isCorrect: true },
        { id: "C", label: "c) Çalışmak güzeldir.", isCorrect: false },
        { id: "D", label: "d) Koşup yoruldu.", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q27",
      type: "multiple-choice",
      prompt: "'Çalışmaktan bıkmadı.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Çalışmaktan' mastardır.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q28",
      type: "multiple-choice",
      prompt: "'Okuyup yazan çocukları seviyorum.' cümlesinde kaç fiilimsi vardır?",
      explanation: "'Okuyup' zarf-fiil, 'yazan' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) 1", isCorrect: false },
        { id: "B", label: "b) 2", isCorrect: true },
        { id: "C", label: "c) 3", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q29",
      type: "multiple-choice",
      prompt: "'Ağladıkça içi rahatlıyordu.' cümlesindeki fiilimsi nedir?",
      explanation: "'-dıkça' eki zarf-fiil yapar.",
      options: [
        { id: "A", label: "a) ağladıkça", isCorrect: true },
        { id: "B", label: "b) rahatlıyordu", isCorrect: false },
        { id: "C", label: "c) içi", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q30",
      type: "multiple-choice",
      prompt: "'Yapacak çok işimiz var.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Yapacak' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: false },
        { id: "B", label: "b) sıfat-fiil", isCorrect: true },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q31",
      type: "multiple-choice",
      prompt: "'Gece gündüz çalışarak sınavı kazandı.' cümlesindeki fiilimsi türü nedir?",
      explanation: "'Çalışarak' zarf-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: false },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: true },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q32",
      type: "multiple-choice",
      prompt: "'Gülmek insanı rahatlatır.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Gülmek' mastardır.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q33",
      type: "multiple-choice",
      prompt: "'Okuyunca çok etkilendim.' cümlesindeki fiilimsi nedir?",
      explanation: "'Okuyunca' zarf-fiildir.",
      options: [
        { id: "A", label: "a) okuyunca", isCorrect: true },
        { id: "B", label: "b) etkilendim", isCorrect: false },
        { id: "C", label: "c) çok", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q34",
      type: "multiple-choice",
      prompt: "'Söyleyecek sözüm yok.' cümlesindeki fiilimsi nedir?",
      explanation: "'Söyleyecek' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) söyleyecek", isCorrect: true },
        { id: "B", label: "b) sözüm", isCorrect: false },
        { id: "C", label: "c) yok", isCorrect: false },
        { id: "D", label: "d) söyle", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q35",
      type: "multiple-choice",
      prompt: "'Yolculuk yapmayı çok severdi.' cümlesinde hangi fiilimsi vardır?",
      explanation: "'Yapmayı' isim-fiildir.",
      options: [
        { id: "A", label: "a) yapmayı", isCorrect: true },
        { id: "B", label: "b) severdi", isCorrect: false },
        { id: "C", label: "c) yolculuk", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q36",
      type: "multiple-choice",
      prompt: "'Ağlayan çocuk annesine koştu.' cümlesindeki fiilimsi nedir?",
      explanation: "'Ağlayan' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) ağlayan", isCorrect: true },
        { id: "B", label: "b) çocuk", isCorrect: false },
        { id: "C", label: "c) annesine", isCorrect: false },
        { id: "D", label: "d) koştu", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q37",
      type: "multiple-choice",
      prompt: "'Sınavı kazanmak için çok çalıştı.' cümlesindeki fiilimsi türü nedir?",
      explanation: "'Kazanmak' isim-fiildir.",
      options: [
        { id: "A", label: "a) isim-fiil", isCorrect: true },
        { id: "B", label: "b) sıfat-fiil", isCorrect: false },
        { id: "C", label: "c) zarf-fiil", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q38",
      type: "multiple-choice",
      prompt: "'Koşarak eve geldi.' cümlesindeki fiilimsi nedir?",
      explanation: "'Koşarak' zarf-fiildir.",
      options: [
        { id: "A", label: "a) koşarak", isCorrect: true },
        { id: "B", label: "b) eve", isCorrect: false },
        { id: "C", label: "c) geldi", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q39",
      type: "multiple-choice",
      prompt: "'Geleneklere uymayanları eleştirdi.' cümlesindeki fiilimsi nedir?",
      explanation: "'Uymayan' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) uymayanları", isCorrect: true },
        { id: "B", label: "b) geleneklere", isCorrect: false },
        { id: "C", label: "c) eleştirdi", isCorrect: false },
        { id: "D", label: "d) yok", isCorrect: false }
      ],
    },
    {
      id: "unit03-test01-q40",
      type: "multiple-choice",
      prompt: "'Sevdiğim kitapları raftan aldım.' cümlesindeki fiilimsi nedir?",
      explanation: "'Sevdiğim' sıfat-fiildir.",
      options: [
        { id: "A", label: "a) sevdiğim", isCorrect: true },
        { id: "B", label: "b) kitapları", isCorrect: false },
        { id: "C", label: "c) aldım", isCorrect: false },
        { id: "D", label: "d) raftan", isCorrect: false }
      ],
    },
  ],
  masteryTest: [],
};

export default unit03;
