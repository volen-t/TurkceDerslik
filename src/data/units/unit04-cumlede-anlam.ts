import type { Unit } from "../../types/course";

export const unit04: Unit = {
  id: "unit-04",
  title: "Cümlede Anlam",
  overview:
    "Öznel-nesnel ifadelerden duygu bildiren söylemlere, neden-sonuç, amaç-sonuç, koşul, benzetme ve karşılaştırma yapılarından örtülü anlam ve cümle kurmaya kadar farklı anlam ilişkilerini tanıtır.",
  topics: [
    {
      id: "unit04-topic-01",
      title: "Öznel Cümleler",
      summary: "Kanıtlanması kişinin duygu ve düşüncelerine bağlı yargılar öznel cümlelerdir.",
      content:
        "Öznel cümleler, yazarın ya da konuşanın duygu, düşünce, beğeni ve değerlendirmelerini yansıtır. Doğruluğu veya yanlışlığı kişiden kişiye değiştiği için kanıtlanamaz; bu yüzden görecelidir.",
      examples: [
        "Güneşin doğuşunu izlemek bana huzur veriyor.",
        "Yaz mevsiminde kırlara çıkıp dolaşmak herkesin hakkı."
      ],
    },
    {
      id: "unit04-topic-02",
      title: "Nesnel Cümleler",
      summary: "Doğruluğu veya yanlışlığı kanıtlanabilen yargılar nesneldir.",
      content:
        "Nesnel cümleler kişisel görüşten bağımsızdır; deney, gözlem, ölçme ya da genel kabul görmüş bilgilerle kanıtlanabilir. Cümlede özne kişisel yorum katmamıştır.",
      examples: [
        "Matematik, sayısal bir derstir.",
        "Sıcaktan terleyen adam önce pencereyi açtı.",
        "Çantasını alıp koşarak dışarı çıktı."
      ],
    },
    {
      id: "unit04-topic-03",
      title: "Doğrudan ve Dolaylı Anlatım",
      summary: "Başkasına ait sözler ya aynen aktarılır (doğrudan) ya da anlamı korunarak yeniden ifade edilir (dolaylı).",
      content:
        "Doğrudan anlatımda konuşanın sözleri tırnak içinde, hiçbir değişiklik yapılmadan aktarılır. Dolaylı anlatımda ise sözün özü korunur, ancak anlatan kişinin cümle yapısıyla yeniden kurulur; genellikle 'söyledi', 'belirtti', 'vurguladı' gibi yüklemlerle biter.",
      examples: [
        "Annem, \"Gelirken biraz meyve al.\" dedi. (Doğrudan)",
        "Azra, düzenli çalışarak kazandığını söyledi. (Dolaylı)",
        "\"Zihin paraşüt gibidir, açık olmazsa işe yaramaz.\" sözünü hep söylerdi."
      ],
    },
    {
      id: "unit04-topic-04",
      title: "Sebep-Sonuç ve Amaç-Sonuç Cümleleri",
      summary: "Eylemin gerçekleşme nedeni ile hedefini ayırt eder; sebep gerçekleşmiş, amaç ise hedeflenen durumdur.",
      content:
        "Sebep-sonuç cümleleri, bir yargının hangi gerekçeyle gerçekleştiğini açıklar ve genellikle '-dığı için', '-dığından', 'diye', 'nedeniyle' gibi bağlayıcılarla kurulur. Amaç-sonuç cümleleri ise bir eylemin hangi hedef doğrultusunda yapıldığını belirtir; '-mak için', '-mak üzere', 'amacıyla' gibi yapılar kullanılır. Amaç-sonuçta hedef henüz gerçekleşmemiştir; sebep-sonuçta sebep gerçekleşmiştir.",
      examples: [
        "Yağmur yağdığı için toprak mis gibi koktu. (Sebep-Sonuç)",
        "Çocukları daha iyi bir eğitim alsın diye buraya taşınmış. (Amaç-Sonuç)",
        "Sana güvendiğim için sordum. (Sebep-Sonuç)",
        "Bu konuyu seninle görüşmeye geldim. (Amaç-Sonuç)"
      ],
    },
    {
      id: "unit04-topic-05",
      title: "Koşul (Şart) - Sonuç Cümleleri",
      summary: "Bir yargının başka bir durumun gerçekleşmesine bağlı olduğu cümlelerdir.",
      content:
        "Koşul-sonuç cümleleri, '-se/-sa', '-ince', '-dikçe', 'ise', 'ancak' gibi yapılarla kurulur ve ana eylemin gerçekleşmesi bir koşula bağlanır. Şartın gerçekleşmesi sonucu getirir.",
      examples: [
        "Konuya hâkim olmak istiyorsan sıkı bir araştırma yapmalısın.",
        "Söz verdiğin saatte getirmek üzere arabamı alabilirsin."
      ],
    },
    {
      id: "unit04-topic-06",
      title: "Duygu Bildiren Cümle Türleri",
      summary: "Varsayım, azımsama, yakınma, sitem, şaşırma, beklenti, küçümseme, öneri, yadsıma, ön yargı, eleştiri, öz eleştiri, tasarı, aşamalı durum, pişmanlık, kanıksama gibi farklı duygu yüklü yapıları kapsar.",
      content:
        "Duyguyu ifade eden cümleler farklı başlıklarda toplanır: varsayım (diyelim ki, farz edelim), azımsama, yakınma (şikâyet), sitem, şaşırma, beklenti (gerçekleşmiş/gerçekleşmemiş), küçümseme, öneri (tavsiye), yadsıma, ön yargı, eleştiri (olumlu/olumsuz), öz eleştiri, tasarı, aşamalı durum, pişmanlık, kanıksama. Her biri cümlenin taşıdığı duygusal bakışı gösterir.",
      examples: [
        "Diyelim ki tüm isteklerin gerçekleşti. (Varsayım)",
        "Hep beni oyun dışı bırakıyorlar. (Yakınma)",
        "Sen kim, doktor olmak kim? (Küçümseme)",
        "Keşke ona bu kadar sert davranmasaydım. (Pişmanlık)",
        "Artık hiçbir şey beni şaşırtmıyor. (Kanıksama)"
      ],
    },
    {
      id: "unit04-topic-07",
      title: "İçerik ve Üslup Cümleleri",
      summary: "İçerik 'ne anlatıyor?', üslup ise 'nasıl anlatıyor?' sorusuna cevap verir.",
      content:
        "İçerik cümleleri bir metnin konusunu, ele aldığı olay ve durumları açıklar; üslup cümleleri ise yazarın dili nasıl kullandığını, anlatım biçimini (benzetme, yöresel söyleyiş, sade dil vb.) vurgular.",
      examples: [
        "Yazar, son eserinde şehir hayatının karmaşasını ele almış. (İçerik)",
        "Eserde yöresel söyleyişlere sıkça yer verilmiş. (Üslup)"
      ],
    },
    {
      id: "unit04-topic-08",
      title: "Tahmin, Olasılık ve Kesinlik",
      summary: "Yargının kesinlik derecesine göre tahmin, olasılık ya da kesinlik bildiren cümleler ayırt edilir.",
      content:
        "Tahmin cümleleri sezgi ya da deneyime dayanarak öngörüde bulunur. Olasılık cümleleri bir durumun gerçekleşme ihtimalini belirtir ancak kesin değildir. Kesinlik cümleleri ise şüpheye yer bırakmaz, net yargı bildirir.",
      examples: [
        "Hava karardı, yağmur yağabilir. (Tahmin)",
        "Yarın okula gelemeyebilirim. (Olasılık)",
        "Toplantı sona ermiştir, çıkabilirsiniz. (Kesinlik)"
      ],
    },
    {
      id: "unit04-topic-09",
      title: "Benzetme ve Karşılaştırma Cümleleri",
      summary: "İki unsur arasında benzerlik veya farklılık kurarak anlatımı güçlendiren cümlelerdir.",
      content:
        "Benzetme cümlelerinde zayıf olan kavram güçlü olana benzetilir; 'gibi', 'sanki', 'adeta' gibi sözlerle desteklenir. Karşılaştırma cümlelerinde ise iki ya da daha fazla unsurun benzerlik, farklılık ya da üstünlük yönleri kıyaslanır.",
      examples: [
        "Taş gibi bir lokmayı çiğnemeye çalışıyordu. (Benzetme)",
        "Mehmet bu konuda senden daha tecrübelidir. (Karşılaştırma)",
        "Eda da kardeşi gibi zekidir. (Benzerlik karşılaştırması)"
      ],
    },
    {
      id: "unit04-topic-10",
      title: "Örtülü Anlam ve Cümle Oluşturma",
      summary: "Örtülü anlam cümlede doğrudan söylenmeyen mesajdır; cümle oluşturma karışık sözcüklerden kurallı cümle yapmayı öğretir.",
      content:
        "Örtülü anlam (ima), sözde açıkça ifade edilmeyen ancak bağlamdan çıkarılabilen ikinci anlamdır. 'Cümle oluşturma' çalışmaları ise karışık halde verilen sözcük veya sözcük gruplarını anlamlı, kurallı bir cümleye dönüştürmeyi hedefler.",
      examples: [
        "İş çıkışı markete de uğrayacağım. (Örtülü anlam: Market dışında yerlere gideceğim.)",
        "Sudan sebeplerle yine küsmüşler. (Örtülü anlam: Daha önce de küsmüşler.)",
        "Arkadaş sağlık gibidir, değerini yok olunca anlarsın. (Cümle oluşturma örneği)"
      ],
    },
  ],
  practice: [
    {
      id: "unit04-test01-q01",
      type: "multiple-choice",
      prompt: "(1) Pozantı üzerinden dönülen sapaktan giderek kısa sürede ve rahatça Çamlıyayla’ya ulaşıyorum. (2) Burası, diğer bilinen adıyla Namrun, Mersin’in kuzeyinde kalıyor. (3) Çamlar arasından giden yolda, Kadıncık Barajı civarında zirve yapan mavi ve yeşilin eşsiz güzelliğiyle gözlerim bayram ediyor. (4) Muhteşem manzaranın kıyısında, başka bir yerde bulunmayan halis köy tereyağında kızarmış tavukların tadına bakmak için mola veriyorum.\nNumaralanmış cümlelerden hangisi belirttiği öznel ve nesnel yargı yönüyle diğerlerinden farklıdır?",
      explanation: "2. cümlede Çamlıyayla’nın Mersin’in kuzeyinde olduğu nesnel bir bilgidir; diğerleri anlatıcının öznel değerlendirmelerini içerir.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: true },
        { id: "C", label: "C) 3", isCorrect: false },
        { id: "D", label: "D) 4", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q02",
      type: "multiple-choice",
      prompt: "I. Sultanahmet Camisi’nin diğer camiler içinde hem büyüklüğü hem de çinileriyle farklı bir duruşu, İstanbulluların gözünde de ayrı bir yeri vardır.\nII. Ramazan Ayı’nın İstanbul’a saldığı güzelliklerden pay alan bu caminin minarelerine kurulan mahyalar gözleri ve gönülleri aydınlatır.\nIII. 1609-1617 yılları arasında, Osmanlı Padişahı I. Ahmed tarafından Mimar Sedefkâr Mehmed Ağa’ya yaptırılan bu cami, Ayasofya’nın karşısında yer alır.\nIV. Caminin içi de muhteşem avlusu da iftar vaktinden sahura kadar inananlarla defalarca dolup taşar.\nNumaralanmış cümlelerden hangisi nesnel yargıdır?",
      explanation: "III. cümlede caminin yapım tarihi ve konumu verilir; doğruluğu kanıtlanabilen nesnel bir bilgidir.",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: false },
        { id: "C", label: "C) III", isCorrect: true },
        { id: "D", label: "D) IV", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q03",
      type: "multiple-choice",
      prompt: "(1) Alışveriş merkezlerinin insanı para harcamaya sevk eden ortamının yerini bereket ve samimiyet alır burada. (2) Güneşin doğuşuyla beraber başlar ticaret. (3) Kapalı alanda durmadan çalan hareketli müzikler, esnafın dikkate ve neşeye sevk eden sesleriyle takas edilir. (4) Alışverişin ayrı bir keyfi vardır burada.\nBu metindeki numaralandırılmış cümlelerden hangisi nesnel yargı içermektedir?",
      explanation: "2. cümlede ticaretin güneşin doğuşuyla başladığı belirtilir; bu nesnel bir bilgidir.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: true },
        { id: "C", label: "C) 3", isCorrect: false },
        { id: "D", label: "D) 4", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q04",
      type: "multiple-choice",
      prompt: "(1) Dede Korkut Hikâyeleri, Orta Asya’da yaşayan Oğuzlar ve onların Anadolu’ya gelen boylarının toplum hayatını, inanç ve törelerini su katılmamış şekilde anlatır. (2) Türk hakanlarına akıl hocalığı yapan Dede Korkut’un Türkler arasında ağızdan ağıza dolaşan muhteşem 12 hikâyesi vardır. (3) Bu hikâyeler 15. yüzyılda, Akkoyunlular Dönemi’nde Dede Korkut Kitabı adıyla bir kitapta toplanmıştır. (4) Bugün hâlâ Deli Dumrul, Bamsı Beyrek gibi halk arasında yaşayan hikâyeler hep Dede Korkut’un o arı duru Türkçesiyle söylediği hikâyelerdir.\nNumaralanmış cümlelerden hangisi belirttiği öznel ve nesnel yargı yönüyle diğerlerinden farklıdır?",
      explanation: "3. cümlede kitabın toplanma tarihi ve dönemi verilir; nesnel bir bilgi.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: false },
        { id: "C", label: "C) 3", isCorrect: true },
        { id: "D", label: "D) 4", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q05",
      type: "multiple-choice",
      prompt: "Örgü örmek için gerekli malzemelerin en başında iplik gelir. (1) İplik üretiminde yün, pamuk, keten, naylon gibi lifler kullanılır. (2) İpler genellikle doğal ya da yapay boyalarla boyanır. (3) Böylece renkli iplikler elde edilir. (4) Ardından yumaklar hâlinde sarılan iplikler örülmek için hazırlanır.\nNumaralanmış cümlelerin hangisinde amaç-sonuç ilişkisi vardır?",
      explanation: "4. cümlede ipliklerin sarılmasının amacı örülmek için hazırlanmak.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: false },
        { id: "C", label: "C) 3", isCorrect: false },
        { id: "D", label: "D) 4", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q06",
      type: "multiple-choice",
      prompt: "(1) Şakraklar genellikle çalı meyveleri, ağaçların tomurcukları ve tohumlarla beslenir. (2) Yavrularını beslemek için böcek de avlarlar. (3) Birçok kuş türü beslenirken sürekli hareket eder ancak şakraklar genellikle aynı dalda durur ve az hareket eder. (4) İnsanlardan pek çekinmedikleri için şakrakları yakından uzun süre izlemek mümkündür.\nNumaralanmış cümlelerin hangisinde amaç-sonuç ilişkisi vardır?",
      explanation: "2. cümlede böcek avlamanın amacı yavruları beslemek.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: true },
        { id: "C", label: "C) 3", isCorrect: false },
        { id: "D", label: "D) 4", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q07",
      type: "multiple-choice",
      prompt: "Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi vardır?\nA) İşimi bitirir bitirmez koşarak yanlarına vardım.\nB) Mürekkebi bittiği için kalemim yazmaz oldu.\nC) Sokaklar gece boyunca köpüklü suyla yıkandı.\nD) Para kazanmak için gurbete gitmeye karar verdi.",
      explanation: "D seçeneğinde gurbete gitmenin amacı para kazanmak.",
      options: [
        { id: "A", label: "A) İşimi bitirir bitirmez koşarak yanlarına vardım.", isCorrect: false },
        { id: "B", label: "B) Mürekkebi bittiği için kalemim yazmaz oldu.", isCorrect: false },
        { id: "C", label: "C) Sokaklar gece boyunca köpüklü suyla yıkandı.", isCorrect: false },
        { id: "D", label: "D) Para kazanmak için gurbete gitmeye karar verdi.", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q08",
      type: "multiple-choice",
      prompt: "(1) Osmanlı Dönemi’nde oyuncakçılığın merkezi İstanbul’un Eyüp semtiydi. (2) Burada üretilen oyuncaklara “Eyüp oyuncakları” denirdi ve bunlar başka kentlere de gönderilirdi. (3) İçine su doldurup üflediğinizde öten düdüklü testi, kaynana zırıltısı, yuvarlak çınçın, cambaz, aynalı araba Eyüp oyuncaklarının yalnızca bir kısmıdır. (4) Zaman içinde teknolojinin hızla ilerleyip bu tip oyuncaklara olan ilginin azalmasıyla Eyüp oyuncakları neredeyse tümüyle ortadan kalkmış. (5) Ancak günümüzde tarihî Eyüp oyuncaklarının üretimini yeniden canlandırmak için çalışmalar yürütülüyor.\nBu metinde sebep-sonuç ve amaç-sonuç içeren cümleler aşağıdakilerin hangisinde doğru verilmiştir?\nSebep-Sonuç | Amaç-Sonuç\n---|---\nA) 1 | 4\nB) 2 | 5\nC) 3 | 4\nD) 4 | 5",
      explanation: "4. cümlede teknolojinin ilerlemesi sonucu oyuncakların kalkması (sebep-sonuç); 5. cümlede yeniden canlandırmak için çalışmalar (amaç-sonuç).",
      options: [
        { id: "A", label: "A) 1 | 4", isCorrect: false },
        { id: "B", label: "B) 2 | 5", isCorrect: false },
        { id: "C", label: "C) 3 | 4", isCorrect: false },
        { id: "D", label: "D) 4 | 5", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q09",
      type: "multiple-choice",
      prompt: "(1) Yağmur ormanları Güneş ışınlarının Dünya’ya en dik olarak düştüğü Ekvator bölgesinde bulunur. (2) Bu ormanlar aynı zamanda dünyanın en çok yağış alan bölgesinde yer almakta. (3) Yeryüzünde bulunan bitki ve hayvan türlerinin %80’i bu ormanlarda yaşar. (4) İklim özellikleri bu bitki ve hayvan türlerinin burada yaşamalarına olanak verir. (5) Üstelik yağmur ormanları dünyanın yalnızca %6’sını kaplar.\nNumaralandırılmış cümlelerin hangileri arasında sebep-sonuç ilişkisi vardır?",
      explanation: "3 ve 4 arasında iklim özelliklerinin türlerin yaşamasına olanak vermesi (sebep-sonuç).",
      options: [
        { id: "A", label: "A) 1 ve 2", isCorrect: false },
        { id: "B", label: "B) 2 ve 3", isCorrect: false },
        { id: "C", label: "C) 3 ve 4", isCorrect: true },
        { id: "D", label: "D) 4 ve 5", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q10",
      type: "multiple-choice",
      prompt: "(1) Çitalar dünyanın en hızlı hayvanlarından biridir. (2) Koşarken saatte 110 kilometre hıza ulaşabilirler. (3) Çitalar uzun ve ince kemikleri, esnek yapıdaki omurgaları ve uzun kuyrukları sayesinde hızlı koşabilmektedir. (4) Yaklaşık 500 metre boyunca çok hızlı koşabilirler fakat bu süre sonunda dinlenmeleri gerekir.\nBu metindeki numaralanmış cümlelerin hangisinde neden-sonuç ilişkisi vardır?",
      explanation: "3. cümlede hızlı koşmanın nedeni fiziksel yapı.",
      options: [
        { id: "A", label: "A) 1", isCorrect: false },
        { id: "B", label: "B) 2", isCorrect: false },
        { id: "C", label: "C) 3", isCorrect: true },
        { id: "D", label: "D) 4", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q11",
      type: "multiple-choice",
      prompt: "(I) Çin Seddi, Çin’in eski dönemlerinde inşa edilen büyük bir savaştan korunma duvarıdır. (II) Bu duvar, Çin’i istilalardan korumak amacıyla inşa edilmiştir. (III) Çin Seddi, tarihsel bir miras olarak günümüzde de büyük bir ilgi görmektedir. (IV) Çin Seddi’ni ziyaret ederseniz tarihte büyük bir yolcuğa çıkarsınız.\nNumaralanmış cümlelerin hangisinde koşul-sonuç ilişkisi vardır?",
      explanation: "IV. cümlede ziyaret koşuluyla yolculuk sonucu (koşul-sonuç).",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: false },
        { id: "C", label: "C) III", isCorrect: false },
        { id: "D", label: "D) IV", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q12",
      type: "multiple-choice",
      prompt: "(I) Dünyanın en büyük adası olan Grönland, Kuzey Atlantik ve Arktik Okyanusları arasında yer alır. (II) Grönland, büyük buz tabakaları ve çarpıcı doğal güzellikleri ile ünlüdür. (III) Bu ada, aynı zamanda yerli halkın zengin kültürünü barındırır. (IV) Bir gün Grönland’a yolunuz düşerse benzersiz buzullar ve buzdağlarıyla karşılaşabilirsiniz.\nNumaralanmış cümlelerin hangisinde koşul-sonuç ilişkisi vardır?",
      explanation: "IV. cümlede yol düşmesi koşuluyla karşılaşma sonucu (koşul-sonuç).",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: false },
        { id: "C", label: "C) III", isCorrect: false },
        { id: "D", label: "D) IV", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q13",
      type: "multiple-choice",
      prompt: "I. Diyelim ki okul uzadı o zaman ne yapacaksın?\nII. Dün akşamki gibi devam ettiyse ödevini bitirmiştir.\nIII. Çeviri yapmak için Sibel’den yardım alabilirsin.\nIV. Okuduğum romanda yazar küçük bir çocuğun başından geçenleri anlatmış.\nAşağıdakilerden hangisi numaralanmış cümlelerin ifade ettiği anlamlardan biri değildir?",
      explanation: "",
      options: [
        { id: "A", label: "A) Öneri", isCorrect: false },
        { id: "B", label: "B) Tahmin", isCorrect: false },
        { id: "C", label: "C) Varsayım", isCorrect: false },
        { id: "D", label: "D) Ön Yargı", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q14",
      type: "multiple-choice",
      prompt: "I. Yeni çıkardığı şiir kitabında şiirler özenli değil. (Eleştiri)\nII. Yarın yeni açtığı iş yerini ziyaret edebilirim. (Tahmin)\nIII. Hava çok soğuk, montunu giymeden dışarı çıkma. (Uyarı)\nIV. Okuduğum romanda yazar küçük bir çocuğun başından geçenleri anlatmış. (İçerik)\nNumaralanmış cümlelerin hangisinin ifade ettiği anlam yay ayraç içinde yanlış verilmiştir?",
      explanation: "II. cümlede gelecekteki olay öngörüsü, beklenti.",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: true },
        { id: "C", label: "C) III", isCorrect: false },
        { id: "D", label: "D) IV", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q15",
      type: "multiple-choice",
      prompt: "Gerçekleşmesi beklenen davranışları ifade eden cümlelere beklenti cümleleri denir. Beklenti cümleleri gerçekleşmiş beklenti ve gerçekleşmemiş beklenti cümleleri olmak üzere ikiye ayrılır.\nBu bilgiye göre aşağıdaki cümlelerin hangisinde beklenti gerçekleşmemiştir?",
      explanation: "A seçeneğinde beklenti gerçekleşmemiş.",
      options: [
        { id: "A", label: "A) Sınıfımızdaki herkesin denemeden yüksek netler yapacağını düşünüyordum.", isCorrect: true },
        { id: "B", label: "B) Çalışmalarımın bir gün bu şekilde karşılığı olacağını biliyordum.", isCorrect: false },
        { id: "C", label: "C) Önümüzdeki yıl iş yerinde daha iyi bir pozisyonda olacağımı düşünüyorum.", isCorrect: false },
        { id: "D", label: "D) Bu dönem sessiz bir şekilde ders dinleyeceğinizi umuyorum.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q16",
      type: "multiple-choice",
      prompt: "(I) Yemyeşil manzarası ve serin şelaleleriyle ilk durağımız Rize’deki Ayder Yaylası! (II) Bu yaylaya gelirken çok güzel yollardan geçtik. (III) Babam gittiğimizde yayladaki bir dağ evinde kalacağımızdan bahsetti. (IV) Bu yayla evinde gece boyu çok üşüyeceğimden eminim.\nBu parçada numaralanmış cümlelerin hangisinde “ön yargı” anlamı vardır?",
      explanation: "IV. cümlede henüz gitmeden üşüme yargısı, ön yargı.",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: false },
        { id: "C", label: "C) III", isCorrect: false },
        { id: "D", label: "D) IV", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q17",
      type: "multiple-choice",
      prompt: "Pişmanlık ve hayıflanma duygularını birbirine karıştırmamak gerekir. Pişmanlık, yapılan bir eylemden dolayı duyulan üzüntüyü anlatırken hayıflanma yapılmayan bir eylemden duyulan üzüntüyü ifade eder.\nBuna göre aşağıdakilerden hangisi “hayıflanma” cümlesidir?",
      explanation: "D seçeneğinde yapılmayan eylemden üzüntü, hayıflanma.",
      options: [
        { id: "A", label: "A) Elimdeki işleri bitirmek için sabahlara kadar uğraşmasaydım keşke.", isCorrect: false },
        { id: "B", label: "B) Geçen günkü fırtınada keşke o kadar ince giyinmeseydim.", isCorrect: false },
        { id: "C", label: "C) Keşke Ahmet’e bildiğim her şeyi anlatmasaydım.", isCorrect: false },
        { id: "D", label: "D) Bu arabayı almadan önce keşke güzelce baktırsaydık.", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q18",
      type: "multiple-choice",
      prompt: "(I) Uzun zamandır yaylamız gözümde tütüyor. (II) Senin gittiğini bilseydim ben de seninle gelirdim. (III) Ama tek başına gidip bana haber vermemene gerçekten inanamadım. (IV) Keşke gitmeden önce bana söyleseydim.\nBu parçadaki numaralanmış cümlelerle ilgili aşağıdakilerden hangisi söylenemez?",
      explanation: "II. cümlede hayıflanma duygusu vardır, küçümseme değil.",
      options: [
        { id: "A", label: "A) I. cümlede özlem duygusu hâkimdir.", isCorrect: false },
        { id: "B", label: "B) II. cümlede küçümseme anlamı vardır.", isCorrect: true },
        { id: "C", label: "C) III. cümlede şaşırma duygusu hakimdir.", isCorrect: false },
        { id: "D", label: "D) IV. cümlede sitem anlamı vardır.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q19",
      type: "multiple-choice",
      prompt: "Tatilde boş duracağıma keşke biraz soru çözseydim.\nBu kadar ekmek ile doyacağımı zannetmiyorum.\nUzun zamandır bu kadar güzel bir şiire rastlamamıştım.\nAşağıdakilerden hangisi bu cümlelerden herhangi birine hâkim olan duygulardan değildir?",
      explanation: "İlk cümle pişmanlık, diğerleri farklı duygular.",
      options: [
        { id: "A", label: "A) Beğeni", isCorrect: false },
        { id: "B", label: "B) Azımsama", isCorrect: false },
        { id: "C", label: "C) Pişmanlık", isCorrect: true },
        { id: "D", label: "D) Hayıflanma", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q20",
      type: "multiple-choice",
      prompt: "I. adını verdikleri\nII. bilim insanları\nIII. arpa plastiği\nIV. Kopenhag Üniversitesindeki\nV. geliştirdi\nVI. bir malzeme\nNumaralanmış sözlerle anlamlı bir bütün oluşturulduğunda doğru sıralama hangisi olur?",
      explanation: "Doğru sıralama D: Kopenhag Üniversitesindeki bilim insanları arpa plastiği adını verdikleri bir malzeme geliştirdi.",
      options: [
        { id: "A", label: "A) I-IV-II-III-V-VI", isCorrect: false },
        { id: "B", label: "B) III-II-IV-I-VI-V", isCorrect: false },
        { id: "C", label: "C) IV-I-VI-V-II-III", isCorrect: false },
        { id: "D", label: "D) IV-II-III-I-VI-V", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q21",
      type: "multiple-choice",
      prompt: "I. insanlara\nII. sabit fikirli\nIII. soğuk demire\nIV. laf anlatmaya\nV. gibidir\nVI. çalışmak\nVII. şekil vermek\nNumaralanmış ifadeler anlamlı ve kurallı bir cümle olacak şekilde sıralandığında hangisi baştan üçüncü olur?",
      explanation: "Baştan üçüncü IV: Sabit fikirli insanlara laf anlatmaya çalışmak soğuk demire şekil vermek gibidir.",
      options: [
        { id: "A", label: "A) II", isCorrect: false },
        { id: "B", label: "B) III", isCorrect: false },
        { id: "C", label: "C) IV", isCorrect: true },
        { id: "D", label: "D) V", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q22",
      type: "multiple-choice",
      prompt: "I. bir kalbi\nII. gelen özür\nIII. kırdıktan sonra\nIV. doyduktan sonra\nV. tuza benzer\nVI. sofraya gelen\nNumaralanmış sözcük gruplarıyla anlamlı ve kurallı bir cümle oluşturulursa doğru sıralama hangisi olur?",
      explanation: "Doğru sıralama A: Kırdıktan sonra gelen özür, doyduktan sonra sofraya gelen tuza benzer.",
      options: [
        { id: "A", label: "A) I-III-II-IV-VI-V", isCorrect: true },
        { id: "B", label: "B) II-IV-III-I-VI-V", isCorrect: false },
        { id: "C", label: "C) III-II-IV-VI-V-I", isCorrect: false },
        { id: "D", label: "D) V-VI-I-III-IV-II", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q23",
      type: "multiple-choice",
      prompt: "I. giden\nII. çalışma ve\nIII. başarıya\nIV. geçer\nV. sebattan\nVI. tüm yollar\nNumaralanmış sözlerle anlamlı ve kurallı bir cümle oluşturulmak istenirse doğru sıralama aşağıdakilerden hangisi olur?",
      explanation: "Doğru sıralama C: Başarıya giden tüm yollar çalışma ve sebattan geçer.",
      options: [
        { id: "A", label: "A) I-IV-II-III-V-VI", isCorrect: false },
        { id: "B", label: "B) III-II-IV-VI-V-I", isCorrect: false },
        { id: "C", label: "C) III-I-VI-II-V-IV", isCorrect: true },
        { id: "D", label: "D) IV-II-III-I-VI-V", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q24",
      type: "multiple-choice",
      prompt: "Nelson Mandela, Güney Afrika’nın ilk siyahi devlet başkanıdır.\nMandela, 1994 yılında demokratik seçimlerle devlet başkanı seçilmiş ve 27 yıl hapis cezasının ardından ülkesine özgürlük getirmiştir.\nBu cümlelerin anlamca doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?",
      explanation: "Doğru birleştirme A: Nelson Mandela'nın seçilmesi ve özgürlük getirmesi.",
      options: [
        { id: "A", label: "A) Güney Afrika’nın ilk siyahi devlet başkanı Nelson Mandela, 1994 yılında demokratik seçimlerle devlet başkanı seçilmiş ve 27 yıl hapis cezasının ardından ülkesine özgürlük getirmiştir.", isCorrect: true },
        { id: "B", label: "B) Nelson Mandela, Güney Afrika’da demokratik seçimlerle devlet başkanı seçilmiş ve 27 yıl hapis cezası sonrasında ülkesine özgürlük kazandırmıştır.", isCorrect: false },
        { id: "C", label: "C) Güney Afrika tarihinde önemli bir figür olan Nelson Mandela, 1994’te demokratik seçimlerle devlet başkanı seçilmiş ve hapis cezasının ardından ülkesine özgürlük getirmiştir.", isCorrect: false },
        { id: "D", label: "D) 1994’te seçilen Güney Afrika’nın ilk siyahi devlet başkanı Nelson Mandela, 27 yıl hapis cezasının ardından ülkesine demokrasi ve özgürlük getirmiştir.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q25",
      type: "multiple-choice",
      prompt: "“Ahmet Hamdi Tanpınar’ın eserlerinde işlediği konular: insan ömrü, toplumun tarihi ve hatta doğanın döngüsü... Tanpınar, hepsini bir araya getirir ve bu konuları kelimelerle âdeta bir saat gibi işler. Bu yüzden onun kitaplarında sadece bir hikâye değil, zamanı ilmek ilmek dokuyan bir ruh bulursunuz.”\nBu metinde geçen altı çizili cümleyle anlatılmak istenen nedir?",
      explanation: "Zamanı saat gibi işlemek, düzenli ve işlevsel ele almak.",
      options: [
        { id: "A", label: "A) Eserlerinde zamanı çok düzenli, dikkatli ve işlevsel bir şekilde ele almaktadır.", isCorrect: true },
        { id: "B", label: "B) Eserlerinde toplumun geçmişine yönelik detaylar bulunur.", isCorrect: false },
        { id: "C", label: "C) Yazıları, insan ömrünü ve doğayı sanatsal bir bakışla işler.", isCorrect: false },
        { id: "D", label: "D) Sadece bir yazar değil, aynı zamanda bir tarihçidir.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q26",
      type: "multiple-choice",
      prompt: "“Eğitim, yalnızca bilgi aktarmakla kalmalı; aynı zamanda geçmişle geleceği buluşturarak bireylerin hayatlarına anlam katmalıdır.”\nBu cümleye anlamca en yakın cümle aşağıdakilerden hangisidir?",
      explanation: "Geçmişle geleceği buluşturarak anlam katmak.",
      options: [
        { id: "A", label: "A) Eğitim, bireylerin geçmiş deneyimlerinden ders çıkarmasını sağlamalıdır.", isCorrect: false },
        { id: "B", label: "B) Eğitim, geçmişin birikimlerini ve geleceğin ihtiyaçlarını göz önünde bulundurmalıdır.", isCorrect: true },
        { id: "C", label: "C) Eğitim, bireyleri bilgiyle donatmanın yanında onları sosyal hayata hazırlamalıdır.", isCorrect: false },
        { id: "D", label: "D) Eğitim, bilgi aktarımından ziyade sadece eleştirel düşünme becerileri kazandırmalıdır.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q27",
      type: "multiple-choice",
      prompt: "“Bir romanda köylerin yalnızca taşını, toprağını değil; insanını, acısını ve sevinçlerini de görmek isterim. Ancak o zaman gerçek bir köy romanı okuyorum diyebilirim.”\nBu metinde geçen altı çizili cümleyle anlatılmak istenen nedir?",
      explanation: "Köylülerin günlük yaşamını ve duygularını anlatmak.",
      options: [
        { id: "A", label: "A) Köy romanlarında sadece köyün doğal yapısına yer verilmelidir.", isCorrect: false },
        { id: "B", label: "B) Gerçek bir köy romanı, köylülerin günlük yaşamını ve duygularını anlatmalıdır.", isCorrect: true },
        { id: "C", label: "C) Köy romanlarında yalnızca köyün tarihî geçmişine odaklanılmalıdır.", isCorrect: false },
        { id: "D", label: "D) Gerçek bir köy romanı, köylülerin yaşam mücadelelerini anlatmalıdır.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q28",
      type: "multiple-choice",
      prompt: "Anlamca birbirine zıt olan, birbiriyle çelişen cümlelere karşıt (zıt) anlamlı cümleler denir. Bu tür cümlelerde konu genellikle aynıdır fakat konuya bakış açısı farklıdır.\nBuna göre aşağıdaki cümlelerden hangisi “Bilimsel gelişmeler insanlığın yararına olabilir.” cümlesinin karşıt anlamını ifade eder?",
      explanation: "Yanlış kullanımın felaketlere neden olması, yararının karşıtı.",
      options: [
        { id: "A", label: "A) Yeni gelişmeler, sağlık alanında devrim yaratabilir.", isCorrect: false },
        { id: "B", label: "B) Çevreye duyarlı bilimsel çözümler önemlidir.", isCorrect: false },
        { id: "C", label: "C) Bilim, insanların yaşam kalitesini artırır.", isCorrect: false },
        { id: "D", label: "D) Bilimsel gelişmelerin yanlış kullanımı felaketlere neden olabilir.", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q29",
      type: "multiple-choice",
      prompt: "Bir şairin eserlerinde hayatının izlerini bulmak mümkündür. Ancak bu durum, şairin her şiirinde kendi duygularını doğrudan aktardığı anlamına gelmez. Şiir, bir yanıyla gerçek duyguların ifadesi; bir yanıyla da estetik bir kurmacadır. Bu yüzden şairin eserleriyle hayatı arasında birebir bir bağ kurmak yanıltıcı olabilir.\nBu metindeki altı çizili ifadeyle aşağıdakilerden hangisinin yanlışlığı vurgulanmaktadır?",
      explanation: "Şairin her şiirinde doğrudan duygularını aktardığı düşüncesi yanlış.",
      options: [
        { id: "A", label: "A) Şairin, şiirlerinde estetik unsurları göz ardı ettiği.", isCorrect: false },
        { id: "B", label: "B) Şiirlerin, okurun hislerini harekete geçirmesi gerektiği.", isCorrect: false },
        { id: "C", label: "C) Şairin her şiirinde kendi duygularını doğrudan dile getirdiği.", isCorrect: true },
        { id: "D", label: "D) Şiirin, yalnızca hayal ürünü bir tür olduğu düşüncesi.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q30",
      type: "multiple-choice",
      prompt: "Bir düşüncenin tam tersini ifade eden cümlelere karşıt (zıt) anlamlı cümleler denir.\nBuna göre,\nI. Spor yapmak, insanın hem bedensel hem zihinsel sağlığına iyi gelir.\nII. Spor, zaman kaybına neden olan, sakatlanma riski bulunan bir aktivitedir.\nIII. Düzenli spor yapan bireyler daha enerjik ve sağlıklı olur.\nIV. Spor yapmak, zamanla insanın bedenine ve zihnine olumsuz etkiler bırakır.\nnumaralanmış cümlelerden hangileri birbiriyle karşıt (zıt) anlamlıdır?",
      explanation: "I olumlu, IV olumsuz yargı içerir.",
      options: [
        { id: "A", label: "A) I ve II", isCorrect: false },
        { id: "B", label: "B) II ve III", isCorrect: false },
        { id: "C", label: "C) I ve IV", isCorrect: true },
        { id: "D", label: "D) III ve IV", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q31",
      type: "multiple-choice",
      prompt: "“Kış ayları gelince, her şeyin durağanlaştığını düşünürsün. Ama toprak, tam da bu dönemde baharın hazırlığını yapar. Eğer toprağın bu sessiz çabasını görmezsen kışın bereketinden mahrum kalırsın.”\nBu metinde altı çizili cümlenin ifade ettiği anlam aşağıdakilerin hangisinde verilmiştir?",
      explanation: "Sessiz çaba ile kışın bereketi, sürekli çalışma gereği.",
      options: [
        { id: "A", label: "A) Doğa, her dönemde kendine özgü bir işleyiş sergiler.", isCorrect: false },
        { id: "B", label: "B) Kış ayları, üretimin ve yenilenmenin durduğu zamandır.", isCorrect: false },
        { id: "C", label: "C) Her şeyin kıymeti, yalnızca görünen çabayla anlaşılır.", isCorrect: false },
        { id: "D", label: "D) Yenilik ve gelişim için her zaman çalışmak gerekir.", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q32",
      type: "multiple-choice",
      prompt: "Wright Kardeşler, ilk başarılı olan motorlu uçak uçuşunu 1903 yılında gerçekleştirmiştir.\nWright Kardeşler’in gerçekleştirdiği uçuş, havacılık tarihinin dönüm noktalarından biri olarak kabul edilmektedir.\nBu iki cümlede ifade edilenlerin anlamca doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?",
      explanation: "Doğru birleştirme B: Uçuşun tarihi ve önemi.",
      options: [
        { id: "A", label: "A) Havacılık tarihinin dönüm noktalarından biri olan 1903 yılındaki başarılı uçuş, Wright Kardeşler tarafından motorlu bir uçakla gerçekleştirilmiştir.", isCorrect: false },
        { id: "B", label: "B) Wright Kardeşler’in 1903 yılında gerçekleştirdikleri ilk başarılı olan motorlu uçak uçuşu, havacılık tarihinin dönüm noktalarından biri olarak kabul edilmektedir.", isCorrect: true },
        { id: "C", label: "C) Motorlu uçak uçuşunu 1903 yılında gerçekleştiren Wright Kardeşler, bu başarılarıyla havacılık tarihine adlarını yazdırmışlardır.", isCorrect: false },
        { id: "D", label: "D) Wright Kardeşler, havacılık tarihinin en önemli dönüm noktalarından biri olan motorlu uçak uçuşunu 1903 yılında başarmıştır.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q33",
      type: "multiple-choice",
      prompt: "Tamamen aynı anlamda olmasalar da anlam yönünden birbirini destekleyen cümlelere yakın anlamlı cümleler denir.\nBu açıklamaya göre “Bazı insanlar, iş dünyasında uzun süre geçirdikten sonra daha temkinli yatırımlar yapmaya başlarlar.” cümlesi aşağıdaki cümlelerden hangisiyle yakın anlamlıdır?",
      explanation: "Deneyimle temkinli yatırımlar, riskten kaçınma.",
      options: [
        { id: "A", label: "A) Bazı insanlar zamanla daha çok risk alıp daha fazla para kazanmak isteyebilirler.", isCorrect: false },
        { id: "B", label: "B) Deneyim kazandıkça, sanatçılar daha derin ve soyut imgelerle çalışmaya yönelebilirler.", isCorrect: false },
        { id: "C", label: "C) İnsanlar deneyim kazandıkça risk almaktan kaçınabilir ve daha güvenli işlere yönelebilirler.", isCorrect: true },
        { id: "D", label: "D) Zamanla, insanlar alıştıkları kalıplardan kurtulup daha riskli projelere yönelebilirler.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q34",
      type: "multiple-choice",
      prompt: "Başkasına ait bir sözün hiç değiştirilmeden aktarılmasına doğrudan anlatım, başkasına ait bir sözün kendi cümlelerimizle aktarılmasına dolaylı anlatım denir.\nBuna göre aşağıdakilerin hangisinde doğrudan anlatım yapılmıştır?",
      explanation: "Söz tırnak içinde, doğrudan aktarılmış.",
      options: [
        { id: "A", label: "A) Atatürk, yeni neslin öğretmenlerin eseri olacağını ifade etmiştir.", isCorrect: false },
        { id: "B", label: "B) Farklı soru tiplerini görmek için bol bol soru çözüyorum, dedi.", isCorrect: true },
        { id: "C", label: "C) Buraları çok beğendiğini ve kısa süre sonra tekrar geleceğini söyledi.", isCorrect: false },
        { id: "D", label: "D) Hava durumu sunucusu yarın bir kar fırtınasının beklendiğini duyurdu.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q35",
      type: "multiple-choice",
      prompt: "Cümlede açık bir şekilde söylenmediği halde cümlenin anlamından ya da cümledeki bazı ifadelerden çıkarılan anlama örtülü anlam denir.\nBuna göre aşağıdakilerin hangisinde örtülü anlam yoktur?",
      explanation: "Cümle açık, örtülü anlam çıkarılmıyor.",
      options: [
        { id: "A", label: "A) Dün akşam oynanan milli maçı ben de izlemeyi unuttum.", isCorrect: false },
        { id: "B", label: "B) Ahmet, derslerindeki başarısından dolayı yine taktir almış.", isCorrect: false },
        { id: "C", label: "C) Öğrenciler artık okuldaki yemekleri şikâyet etmiyorlar.", isCorrect: false },
        { id: "D", label: "D) Yarın sabah erkenden okula bisikletimle gideceğim.", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q36",
      type: "multiple-choice",
      prompt: "Birden fazla varlık, kavram ya da durumun karşılaştırıldığı cümlelere karşılaştırma cümlesi denir.\nBuna göre aşağıdakilerden hangisi karşılaştırma cümlesi değildir?",
      explanation: "Sadece tercih, karşılaştırma yok.",
      options: [
        { id: "A", label: "A) Turnuva tarihindeki en erken golü atmayı başardık.", isCorrect: false },
        { id: "B", label: "B) Kabuğu yeşil olan elmaların lezzetini çok severim.", isCorrect: true },
        { id: "C", label: "C) Filler, hayvanların çoğundan daha fazla yiyecek tüketir.", isCorrect: false },
        { id: "D", label: "D) Bu oyuncağı çalıştırmak için daha güçlü bir pil lazım.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q37",
      type: "multiple-choice",
      prompt: "Bir kişinin sözünün olduğu gibi değil de aktaran kişinin sözcükleriyle ifade edilmesine dolaylı anlatım denir.\nBu bilgiye göre aşağıdakilerin hangisinde dolaylı anlatım yapılmıştır?",
      explanation: "Kendi sözcükleriyle aktarma, dolaylı.",
      options: [
        { id: "A", label: "A) Omuzlarını silkerek “Ben artık onunla konuşmuyorum.” dedi.", isCorrect: false },
        { id: "B", label: "B) Nasreddin Hoca bu durumu “Parayı veren düdüğü çalar.” diyerek özetlemiş.", isCorrect: false },
        { id: "C", label: "C) Okuduğu kitaplar arasında en çok Tolstoy’un eserini beğendiğini söyledi.", isCorrect: true },
        { id: "D", label: "D) Tek istediğim verdiğim emeklerin karşılığını hakkıyla alabilmek, diyor.", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q38",
      type: "multiple-choice",
      prompt: "I. Burak başka yerlerde de arabayı hızlı kullanmaktadır.\nII. Burak köylerde gezmeyi çok sever.\nIII. Burak bu köye daha önce gelmemiştir.\nIV. Burak araba kullanmayı yeni öğrenmiştir.\nNumaralanmış cümlelerden hangileri “Burak, ilk defa geldiği bu köyde de arabayı hızlı kullanıyor.” cümlesinden çıkarılabilecek örtülü anlamlardır?",
      explanation: "Başka yerlerde hızlı kullanır, bu köyde ilk defa.",
      options: [
        { id: "A", label: "A) I ve II", isCorrect: false },
        { id: "B", label: "B) I ve III", isCorrect: true },
        { id: "C", label: "C) II ve III", isCorrect: false },
        { id: "D", label: "D) III ve IV", isCorrect: false }
      ],
    },
    {
      id: "unit04-test01-q39",
      type: "multiple-choice",
      prompt: "(I) Büyük ağaçların bulunduğu orman tabanlarında, bitki örtüsünün gelişmesi ya da ağaç fidelerinin büyümesi, yetersiz güneş ışığı nedeniyle zorlaşır. (II) Buralardaki fidelere ulaşan ışığı artırmak amacıyla yenilikçi bir yöntem denendi. (III) Yöntemde fidelerin altına aynalar yerleştirilerek aynaların ışığı yansıtabilme özellikleri kullanıldı. (IV) Böylece ortamdaki ışığın yönü değiştirilerek fidelerin yararlandığı ışık miktarı eskisinden daha fazla oldu.\nBu parçada numaralanmış cümlelerden hangisi karşılaştırma cümlesidir?",
      explanation: "Eskisinden daha fazla ışık, karşılaştırma.",
      options: [
        { id: "A", label: "A) I", isCorrect: false },
        { id: "B", label: "B) II", isCorrect: false },
        { id: "C", label: "C) III", isCorrect: false },
        { id: "D", label: "D) IV", isCorrect: true }
      ],
    },
    {
      id: "unit04-test01-q40",
      type: "multiple-choice",
      prompt: "Yaşanması mümkün olmayan, sadece zihnimizde canlanabilecek (düşsel) olaylar hayal ürünüdür.\nBuna göre aşağıdakilerin hangisinde hayal ürünü bir durum yoktur?",
      explanation: "Hayal kurma gerçek, diğerleri düşsel.",
      options: [
        { id: "A", label: "A) Böyle yağmurlu havalarda hayal kurmayı severim.", isCorrect: true },
        { id: "B", label: "B) Eve gelen peri kızı Keloğlan’dan üç dilek dilemesini istedi.", isCorrect: false },
        { id: "C", label: "C) Hayvanlar, zarar gören ormanlar hakkında toplantı yapıyordu.", isCorrect: false },
        { id: "D", label: "D) Ağaçların şarkısına eşlik eden sincaplar çok mutluydu.", isCorrect: false }
      ],
    },
  ],
  masteryTest: [],
};

export default unit04;
