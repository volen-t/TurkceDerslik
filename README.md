# TurkceDerslik
8. Sınıf Türkçe Konu Anlatım ve Sınava Hazırlık Uygulaması

## Güncel Tek Dosya Arşivi Nasıl Oluşturulur?

Dal (branch) yapısıyla uğraşmadan projenin son hâlini tek bir dosya olarak almak için `bundle:archive` komutunu kullanabilirsiniz. Komut, mevcut dalın en güncel hâlini `release/` klasörü içinde `.zip` dosyası olarak üretir.

```bash
npm install
npm run bundle:archive
```

Komut tamamlandığında terminalde oluşan dosya yolunu göreceksiniz. Bu `.zip` dosyası tüm proje dosyalarını içerir ve başka bir yerde açılarak kullanılabilir.
