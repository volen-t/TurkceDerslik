import type { Unit } from "../../types/course";

export const unit01: Unit = {
  id: "unit-01",
  title: "Sözcükte Anlam",
  overview:
    "Sözcüklerin temel, mecaz, terim, somut, soyut ve çok anlamlı kullanımlarını tanıyarak cümlelerdeki anlam ilişkilerini kavrama becerisi kazanılır.",
  topics: [
    {
      id: "unit01-topic-01",
      title: "Sözcük ve Anlam Kavramı",
      summary: "Sözcüklerin iletişimdeki rolünü ve anlamsal çeşitliliğini tanıtır.",
      content:
        "Sözcük, insanlar arasındaki iletişimi sağlayan dilin anlamlı en küçük parçasıdır. Bir sözcük herhangi bir varlığı, kavramı ya da eylemi karşılayabilir.",
      examples: [],
    },
    {
      id: "unit01-topic-02",
      title: "Gerçek (Temel) Anlam",
      summary: "Sözcüğün sözlükteki ilk anlamı ve bu anlamdan uzaklaşmadan kazandığı kullanımlar gerçek anlamdır.",
      content:
        "Sözcüğün sözlükteki ilk anlamına ve bu anlamdan tamamen uzaklaşmadan kazandığı yeni anlamlara gerçek (temel) anlam denir.\n\nUyarı: Yan anlam, sözcüğün gerçek anlamından biraz uzaklaşarak cümle içinde kazandığı yeni anlamdır. Ancak Ortaokul Türkçe müfredatında yan anlam ayrı bir konu olarak yer almaz. Bu nedenle yan anlamlı kullanımları da gerçek anlam başlığı altında değerlendiririz.",
      examples: [
        "İki gündür dişinde bir sızı hissediyordu.",
        "Havalar ısınınca çocuklar parklara akın etti.",
        "Ağacın sararan yaprakları bir bir döküldü.",
        "Kapının kolu yeni boyanmış. (Yan anlam örneği, müfredatta gerçek anlam kapsamında değerlendirilir.)",
        "Şişenin ağzını kapatır mısın? (Yan anlam örneği, müfredatta gerçek anlam kapsamında değerlendirilir.)",
      ],
    },
    {
      id: "unit01-topic-03",
      title: "Mecaz Anlam",
      summary: "Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yeni anlam mecazdır.",
      content:
        "Bir sözcüğün, gerçek anlamından tamamen uzaklaşarak cümle içinde kazandığı yeni anlam mecaz anlamdır. Mecazlar, anlatımı zenginleştirir ve okuyucuda farklı çağrışımlar uyandırır.",
      examples: [
        "Bu davranışıyla herkesin gözünde büyüdü.",
        "Bana iyi davranmasına rağmen ona bir türlü ısınamadım.",
        "Hayat koşulları onu katı yürekli olmaya zorlamıştı.",
      ],
    },
    {
      id: "unit01-topic-04",
      title: "Terim Anlam",
      summary: "Bilim, sanat ya da meslek dallarına özgü kavramları karşılayan sözcükler terim anlam taşır.",
      content:
        "Bir bilim, sanat ya da meslek dalıyla ilgili özel ve belirli kavramları karşılayan sözcüklere terim denir. Terimler, ilgili alanın uzmanları tarafından ortak anlamda kullanılır.",
      examples: [
        "Oyunun ilk perdesi bitmeden seyirciler kımıldanmaya başladı.",
        "Kol kaslarını güçlendirmek için düzenli olarak egzersiz yapıyor.",
        "Bir organizmanın yapı ve görev bakımından en küçük birliğine hücre denir.",
      ],
    },
    {
      id: "unit01-topic-05",
      title: "Somut Anlam",
      summary: "Beş duyu organımızdan en az biriyle algılanabilen kavramlar somut anlamlıdır.",
      content:
        "Beş duyu organımızın herhangi biriyle algılayabildiğimiz veya kavrayabildiğimiz anlamları ifade eden sözcükler somut anlam taşır.",
      examples: [
        "Hava iyice soğudu, üşütmeyesiniz. (Dokunma)",
        "Acılı sıcak bir çorba sana iyi gelir. (Tat alma)",
        "Taze ekmek kokusu tüm mutfağı sardı. (Koku alma)",
        "Çocuklar, zil sesini duyar duymaz bahçeye koştular. (Duymak)",
        "Yemyeşil çimlerde uzanmaktan her zaman keyif almıştır. (Görmek)",
      ],
    },
    {
      id: "unit01-topic-06",
      title: "Soyut Anlam",
      summary: "Duyu organlarımızla algılanamayan kavramları karşılayan sözcükler soyut anlamlıdır.",
      content:
        "Beş duyu organımızın herhangi biriyle algılayamadığımız ya da doğrudan kavrayamadığımız anlamları ifade eden sözcükler soyut anlam taşır.",
      examples: [
        "Bir adım daha atacak hâli yoktu.",
        "Heyecandan eli ayağına dolaştı.",
        "Merhametin kaynağı sevgidir.",
        "Tek ihtiyacın olan biraz cesaret.",
      ],
    },
    {
      id: "unit01-topic-07",
      title: "Çok Anlamlılık",
      summary: "Bir sözcüğün farklı bağlamlarda birden çok anlam ifade etmesine çok anlamlılık denir.",
      content:
        "Bir sözcüğün birden çok anlamı ifade edecek şekilde kullanılmasına çok anlamlılık denir. Sözcük farklı cümlelerde farklı anlamlara gelecek biçimde kullanılabilir.",
      examples: [
        "Bu kap en fazla bir litre süt alır. (İçine sığmak)",
        "Nihayet iyi haberler aldık. (Kendine ulaştırılmak)",
        "Masanın tozunu ıslak bir bezle aldı. (Temizlemek)",
        "Üstüne bir battaniye alıp uyudu. (Örtmek)",
      ],
    },
  ],
  practice: [
    {
      id: "unit01-test01-q01",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde TAŞ sözcüğü gerçek anlamda kullanılmıştır?",
      explanation: "Gerçek anlam: TAŞ sözcüğü fiziksel nesneyi karşılıyor.",
      options: [
        { id: "A", label: "A) Çocuğun kalbi kırıldı.", isCorrect: false },
        { id: "B", label: "B) Yolda kocaman bir TAŞ vardı.", isCorrect: true },
        { id: "C", label: "C) Bu olay içimi yaktı.", isCorrect: false },
        { id: "D", label: "D) Adamın eli açık.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q02",
      type: "multiple-choice",
      prompt: "“Bu haber KALBİMİ çok yaraladı.” cümlesinde KALP hangi anlamdadır?",
      explanation: "Mecaz anlam: Kalp sözcüğü duygusal merkez anlamıyla kullanılmıştır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Terim", isCorrect: false },
        { id: "D", label: "D) Somut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q03",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde TERİM anlamlı bir sözcük vardır?",
      explanation: "Terim anlam: Parabol matematikte özel bir kavramdır.",
      options: [
        { id: "A", label: "A) Kardeşim bana güvendi.", isCorrect: false },
        { id: "B", label: "B) Matematikte PARABOL konusunu işledik.", isCorrect: true },
        { id: "C", label: "C) Bahçedeki çiçekler açtı.", isCorrect: false },
        { id: "D", label: "D) Çocuğun elleri üşümüştü.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q04",
      type: "multiple-choice",
      prompt: "“Dolaptaki ELMA’lar çok güzeldi.” cümlesindeki ELMA hangi anlamdadır?",
      explanation: "Somut anlam: Elma duyularla algılanabilen gerçek bir nesnedir.",
      options: [
        { id: "A", label: "A) Mecaz", isCorrect: false },
        { id: "B", label: "B) Somut", isCorrect: true },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q05",
      type: "multiple-choice",
      prompt: "“ARKADAŞLIK, insanın en büyük zenginliğidir.” cümlesinde ARKADAŞLIK hangi anlamdadır?",
      explanation: "Soyut anlam: Arkadaşlık duyularla algılanamaz bir kavramdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Soyut", isCorrect: true },
        { id: "D", label: "D) Somut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q06",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde SOYUT anlamlı bir sözcük vardır?",
      explanation: "Soyut anlam: Sevinç duyularla algılanamaz duygusal bir kavramdır.",
      options: [
        { id: "A", label: "A) ELMA", isCorrect: false },
        { id: "B", label: "B) MASA", isCorrect: false },
        { id: "C", label: "C) SEVİNÇ", isCorrect: true },
        { id: "D", label: "D) ÇİÇEK", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q07",
      type: "multiple-choice",
      prompt: "“Öğretmenimiz bu hafta FİİLİMSİLERİ anlattı.” cümlesinde FİİLİMSİ hangi anlamdadır?",
      explanation: "Terim anlam: Fiilimsi dil bilgisinde kullanılan bir terimdir.",
      options: [
        { id: "A", label: "A) Mecaz", isCorrect: false },
        { id: "B", label: "B) Gerçek", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q08",
      type: "multiple-choice",
      prompt: "“Çocuğun gözleri ışıl ışıl PARLIYORDU.” cümlesindeki PARLAMAK hangi anlamdadır?",
      explanation: "Mecaz anlam: Parlamak sözcüğü burada mutluluğu/sağlığı anlatan mecazdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Somut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q09",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde sözcük mecaz anlamda kullanılmıştır?",
      explanation: "Mecaz anlam: Taş kesilmek ifadesi donup kalmayı anlatan mecazdır.",
      options: [
        { id: "A", label: "A) Bahçedeki TAŞ çok büyüktü.", isCorrect: false },
        { id: "B", label: "B) Adam sıkıntıdan adeta TAŞ kesildi.", isCorrect: true },
        { id: "C", label: "C) Kitap masanın üstündeydi.", isCorrect: false },
        { id: "D", label: "D) Dolaptaki ÇİLEKLER çok güzeldi.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q10",
      type: "multiple-choice",
      prompt: "“Türkçe dersinde ÖZNE ve YÜKLEMİ öğrendik.” cümlesindeki sözcükler hangi anlamdadır?",
      explanation: "Terim anlam: Özne ve yüklem dil bilgisinde yer alan terimlerdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q11",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde KALP sözcüğü gerçek anlamdadır?",
      explanation: "Gerçek anlam: Kalp organının fiziksel çalışmasından söz ediliyor.",
      options: [
        { id: "A", label: "A) Genç kızın yüreği çok yaralıydı.", isCorrect: false },
        { id: "B", label: "B) Çocuğun KALBİ hızlı hızlı atıyordu.", isCorrect: true },
        { id: "C", label: "C) Onun yüreği sevgi doluydu.", isCorrect: false },
        { id: "D", label: "D) Sözleri yüreğimi dağladı.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q12",
      type: "multiple-choice",
      prompt: "“Adamın ELİ çok açıktır.” cümlesindeki ELİ AÇIK ifadesi hangi anlamdadır?",
      explanation: "Mecaz anlam: Eli açık cömertliği anlatan deyimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Somut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q13",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde somut anlamlı bir sözcük vardır?",
      explanation: "Somut anlam: Elma duyularla algılanabilen bir varlıktır.",
      options: [
        { id: "A", label: "A) KORKU insanı yıpratır.", isCorrect: false },
        { id: "B", label: "B) Çocuk annesinden SEVGİ bekliyordu.", isCorrect: false },
        { id: "C", label: "C) Sepette üç tane ELMA vardı.", isCorrect: true },
        { id: "D", label: "D) HAKSIZLIK onu çok incitti.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q14",
      type: "multiple-choice",
      prompt: "“Futbolda OFSAYT kuralı vardır.” cümlesindeki OFSAYT hangi anlamdadır?",
      explanation: "Terim anlam: Ofsayt futbol oyununa özgü bir terimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q15",
      type: "multiple-choice",
      prompt: "“Onunla konuşmak bana HUZUR veriyor.” cümlesindeki HUZUR hangi anlamdadır?",
      explanation: "Soyut anlam: Huzur duyularla algılanamaz bir duygudur.",
      options: [
        { id: "A", label: "A) Somut", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Mecaz", isCorrect: false },
        { id: "D", label: "D) Gerçek", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q16",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde TERİM anlam vardır?",
      explanation: "Terim anlam: Perspektif resim sanatında kullanılan teknik bir kavramdır.",
      options: [
        { id: "A", label: "A) ÇİÇEKLER açmaya başladı.", isCorrect: false },
        { id: "B", label: "B) Bu tabloya PERSPEKTİF kazandırılmalı.", isCorrect: true },
        { id: "C", label: "C) Çocuk KALBİNİ kırdı.", isCorrect: false },
        { id: "D", label: "D) Bahçede yeni bir TAŞ vardı.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q17",
      type: "multiple-choice",
      prompt: "“Kardeşim çok CESARETLİ bir insandır.” cümlesinde CESARET hangi anlamdadır?",
      explanation: "Soyut anlam: Cesaret duyularla algılanamayan bir ruhi niteliktir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Somut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q18",
      type: "multiple-choice",
      prompt: "“Çocuğun ELLERİ buz gibiydi.” cümlesindeki ELLER hangi anlamdadır?",
      explanation: "Somut anlam: Eller dokunulabilen fiziki bir organdır.",
      options: [
        { id: "A", label: "A) Somut", isCorrect: true },
        { id: "B", label: "B) Soyut", isCorrect: false },
        { id: "C", label: "C) Mecaz", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q19",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde sözcük mecaz anlamda kullanılmıştır?",
      explanation: "Mecaz anlam: Kalbin kırılması duygusal incinmeyi anlatır.",
      options: [
        { id: "A", label: "A) Kardeşim yeni bir KİTAP aldı.", isCorrect: false },
        { id: "B", label: "B) Çocuğun KALBİ kırıldı.", isCorrect: true },
        { id: "C", label: "C) Bahçedeki ARMUTLAR olgunlaşmış.", isCorrect: false },
        { id: "D", label: "D) Masanın üstünde DEFTER vardı.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test01-q20",
      type: "multiple-choice",
      prompt: "“İNSAN hak ettiği yerde olmalıdır.” cümlesindeki HAK sözcüğü hangi anlamdadır?",
      explanation: "Soyut anlam: Hak hukuk, adalet gibi soyut bir kavramı karşılar.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Somut", isCorrect: false },
        { id: "C", label: "C) Soyut", isCorrect: true },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q21",
      type: "multiple-choice",
      prompt: "\"ÇOCUKLUK yıllarını özlemle anıyordu.\" cümlesinde ÇOCUKLUK hangi anlamdadır?",
      explanation: "Soyut anlam: Çocukluk duyularla algılanamayan bir dönem kavramıdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Somut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q22",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde sözcük gerçek anlamda kullanılmıştır?",
      explanation: "Gerçek anlam: Kapı fiziksel bir nesnedir.",
      options: [
        { id: "A", label: "A) Bu olay yüreğimi YAKTI.", isCorrect: false },
        { id: "B", label: "B) Sınıfın KAPISI açıktı.", isCorrect: true },
        { id: "C", label: "C) Genç kızın hayalleri YIKILDI.", isCorrect: false },
        { id: "D", label: "D) Adamın gözü DÜNYA görmüyordu.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q23",
      type: "multiple-choice",
      prompt: "\"Futbolcular SAHAYA çıktı.\" cümlesindeki SAHA hangi anlamdadır?",
      explanation: "Terim anlam: Saha spor alanını ifade eden bir terimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q24",
      type: "multiple-choice",
      prompt: "\"Bu sorunun ÇÖZÜMÜ çok basit.\" cümlesindeki ÇÖZÜM hangi anlamdadır?",
      explanation: "Soyut anlam: Çözüm zihinsel bir süreç sonucunda ulaşılan kavramdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Somut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q25",
      type: "multiple-choice",
      prompt: "\"Yaşlı kadın BASTONUNA yaslanıyordu.\" cümlesindeki BASTON hangi anlamdadır?",
      explanation: "Gerçek anlam: Baston somut olarak dokunabildiğimiz bir nesnedir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: true },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q26",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde mecaz anlamlı sözcük vardır?",
      explanation: "Mecaz anlam: Küp gibi olmak deyimi kişinin çok sinirlenmesini anlatır.",
      options: [
        { id: "A", label: "A) Kardeşim yeni bir DEFTER aldı.", isCorrect: false },
        { id: "B", label: "B) Genç adam sinirden KÜP gibi oldu.", isCorrect: true },
        { id: "C", label: "C) Çocuğun ELİ çok üşümüş.", isCorrect: false },
        { id: "D", label: "D) Bahçedeki ÇİÇEKLER çok güzeldi.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q27",
      type: "multiple-choice",
      prompt: "\"Kimya dersinde ELEMENTleri işliyoruz.\" cümlesindeki ELEMENT hangi anlamdadır?",
      explanation: "Terim anlam: Element kimya dersinde kullanılan bilimsel terimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q28",
      type: "multiple-choice",
      prompt: "\"Yaşadığı HAKSIZLIK onu çok üzdü.\" cümlesindeki HAKSIZLIK hangi anlamdadır?",
      explanation: "Soyut anlam: Haksızlık adaletle ilgili soyut bir kavramdır.",
      options: [
        { id: "A", label: "A) Somut", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Gerçek", isCorrect: false },
        { id: "D", label: "D) Mecaz", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q29",
      type: "multiple-choice",
      prompt: "\"O tam bir KURTTUR.\" cümlesinde KURT hangi anlamdadır?",
      explanation: "Mecaz anlam: Kurt sözcüğü kurnaz, tecrübeli kişi için mecazdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Terim", isCorrect: false },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q30",
      type: "multiple-choice",
      prompt: "Aşağıdakilerin hangisinde somut anlamlı bir sözcük vardır?",
      explanation: "Somut anlam: Çocuk gözle görülüp dokunulabilen bir varlıktır.",
      options: [
        { id: "A", label: "A) SEVGİ insanı mutlu eder.", isCorrect: false },
        { id: "B", label: "B) ÇOCUK annesine sarıldı.", isCorrect: true },
        { id: "C", label: "C) ADALET toplumun temelidir.", isCorrect: false },
        { id: "D", label: "D) CESARET herkeste olmalı.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q31",
      type: "multiple-choice",
      prompt: "\"Bilgisayarım BOZULDU.\" cümlesindeki BOZULMAK hangi anlamdadır?",
      explanation: "Gerçek anlam: Bozulmak cihazın çalışmamasını ifade eden gerçek kullanımdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: true },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q32",
      type: "multiple-choice",
      prompt: "\"Bu tabloya RENK katmalısın.\" cümlesinde RENK hangi anlamdadır?",
      explanation: "Mecaz anlam: Renk katmak ifadesi anlatımı canlandırma anlamında mecazdır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q33",
      type: "multiple-choice",
      prompt: "\"Kardeşim çok DUYGUSAL biridir.\" cümlesindeki DUYGUSAL hangi anlamdadır?",
      explanation: "Soyut anlam: Duygusal olmak duyusal olarak algılanamayan bir özelliktir.",
      options: [
        { id: "A", label: "A) Soyut", isCorrect: true },
        { id: "B", label: "B) Somut", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: false },
        { id: "D", label: "D) Gerçek", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q34",
      type: "multiple-choice",
      prompt: "\"Telefonumun ŞARJI bitti.\" cümlesindeki ŞARJ hangi anlamdadır?",
      explanation: "Terim anlam: Şarj elektrik ve teknoloji alanında kullanılan teknik terimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Terim", isCorrect: true },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Mecaz", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q35",
      type: "multiple-choice",
      prompt: "Aşağıdakilerden hangisinde sözcük mecaz anlamda kullanılmıştır?",
      explanation: "Mecaz anlam: Kalbin kırılması duygusal incinmeyi anlatan mecazdır.",
      options: [
        { id: "A", label: "A) Çocuğun KALBİ hızlı atıyordu.", isCorrect: false },
        { id: "B", label: "B) Onun KALBİ çok kırıldı.", isCorrect: true },
        { id: "C", label: "C) Doktor KALBİ kontrol etti.", isCorrect: false },
        { id: "D", label: "D) Kalp ameliyatı başarılı geçti.", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q36",
      type: "multiple-choice",
      prompt: "\"İNSANLAR haklarını bilmelidir.\" cümlesinde HAK hangi anlamdadır?",
      explanation: "Soyut anlam: Hak adalet ve hukukla ilgili soyut bir kavramdır.",
      options: [
        { id: "A", label: "A) Somut", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: true },
        { id: "C", label: "C) Terim", isCorrect: false },
        { id: "D", label: "D) Gerçek", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q37",
      type: "multiple-choice",
      prompt: "\"Masanın üzerinde KİTAP vardı.\" cümlesindeki KİTAP hangi anlamdadır?",
      explanation: "Gerçek anlam: Kitap fiziksel bir nesne olarak gerçek anlamdadır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: true },
        { id: "B", label: "B) Mecaz", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: false },
        { id: "D", label: "D) Soyut", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q38",
      type: "multiple-choice",
      prompt: "\"Bu adam tam bir ASLANDIR.\" cümlesindeki ASLAN hangi anlamdadır?",
      explanation: "Mecaz anlam: Aslan benzetmesi yiğitliği, cesareti anlatır.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Mecaz", isCorrect: true },
        { id: "C", label: "C) Soyut", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q39",
      type: "multiple-choice",
      prompt: "\"Genç kızın HAYALLERİ yıkıldı.\" cümlesindeki HAYAL hangi anlamdadır?",
      explanation: "Soyut anlam: Hayal duyularla algılanamayan bir düşüncedir.",
      options: [
        { id: "A", label: "A) Soyut", isCorrect: true },
        { id: "B", label: "B) Somut", isCorrect: false },
        { id: "C", label: "C) Gerçek", isCorrect: false },
        { id: "D", label: "D) Terim", isCorrect: false }
      ],
    },
    {
      id: "unit01-test02-q40",
      type: "multiple-choice",
      prompt: "\"SANAT toplumun aynasıdır.\" cümlesindeki SANAT hangi anlamdadır?",
      explanation: "Terim anlam: Sanat belirli bir alanı ifade eden kültürel bir terimdir.",
      options: [
        { id: "A", label: "A) Gerçek", isCorrect: false },
        { id: "B", label: "B) Soyut", isCorrect: false },
        { id: "C", label: "C) Terim", isCorrect: true },
        { id: "D", label: "D) Somut", isCorrect: false }
      ],
    },
  ],
  masteryTest: [],
};

export default unit01;



