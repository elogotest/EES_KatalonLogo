Feature: e-Fatura Gelen Kutusu Uygulama Yanitlari Tümünü Indir

  Scenario Outline: e-Fatura Gelen Kutusu Faturalar Uygulama Yanitlari Tümünü Indir
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    #* Yeni ekranlarda filtrelerden Uygulama Yanıtı Numarası filtresine <numara> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Veri İndirme isimli butona tıklanır
    * Menü altındaki seçeneklerden Tümünü İndir isimli butona tıklanır
    * Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekranlar popup butonlarından Tamam secilir
    * Yeni ekranlar popup mesajı talebiniz işleme alınmıştır içeriyor mu
    * Ana menüden Raporlar seçilir
    * Alt menüden Toplu Veri İndirme seçilir
    * Filtrelerden Talep No filtresine Rapor No bilgisi yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tabloda yeni oluşturulan veri hazırlandı mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | numara                               | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | f9edc114-7d7e-48d5-af66-be0f3998403d | 27.06.2022 | ali.kara@logo.com.tr |
