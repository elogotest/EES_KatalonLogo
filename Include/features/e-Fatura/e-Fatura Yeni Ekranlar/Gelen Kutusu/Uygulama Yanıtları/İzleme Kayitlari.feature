Feature: e-Fatura Gelen Kutusu Uygulama Yanıtları İzleme Kayitlari

  Scenario Outline: e-Fatura Gelen Kutusu Uygulama Yanıtları İzleme Kayitlari
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden Uygulama Yanıtı Numarası filtresine <numara> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden İzleme Kayıtları isimli butona tıklanır
    * Yeni açılan sekmeye geçiş yapılır
    * Yeni ekran filtre butonlarından Kapat isimli butona tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | numara                               | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | f9edc114-7d7e-48d5-af66-be0f3998403d | 21.07.2022 | ali.kara@logo.com.tr |
