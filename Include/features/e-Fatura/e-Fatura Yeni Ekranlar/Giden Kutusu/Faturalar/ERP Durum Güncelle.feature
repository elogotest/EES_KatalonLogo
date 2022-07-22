Feature: e-Fatura Giden Kutusu Faturalar Tekrar ERP'de Durum Güncelle

  Scenario Outline: e-Fatura Giden Kutusu Faturalar ERP'de Durum Güncelle
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden ERP'de Durum Güncelle isimli butona tıklanır
   	* Yeni ekranlar popup mesajı Ters entegrasyon servisi içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 0BEDD008-6F68-467E-A797-7CE4AC0AA240 | 27.06.2022 | ali.kara@logo.com.tr |
