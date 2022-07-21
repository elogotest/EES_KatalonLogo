Feature: e-Fatura Gelen Kutusu Faturalar Departman Ata Geri Al

  Scenario Outline: e-Fatura Gelen Kutusu Faturalar Departman Ata Geri Al
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Faturalar seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Departman Seçimi isimli butona tıklanır
   	* Menü altındaki seçeneklerden Departman Ata isimli butona tıklanır
   	* Departman otomasyon olarak secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup mesajı Departman seçimi tamamlanmıştır içeriyor mu
  	* Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Departman Seçimi isimli butona tıklanır
   	* Menü altındaki seçeneklerden Departman Geri Al isimli butona tıklanır
   	* Departman otomasyon olarak secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup mesajı geri alınamaz içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 7ad2512b-451d-49be-9ecf-e18b204bbd23 | 27.06.2022 | ali.kara@logo.com.tr |
