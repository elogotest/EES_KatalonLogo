Feature: e-Arsiv Faturaları Statü Secimi

  Scenario Outline: e-Arsiv Faturaları Statü Secimi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Statü Seçimi isimli butona tıklanır
   	* Dosya Tipi Öndeğer olarak secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup mesajı Statü başarılı olarak içeriyor mu
   	* Yeni ekranlar Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Statü Seçimi isimli butona tıklanır
   	* Dosya Tipi pahabicilemez olarak secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup mesajı Statü başarılı olarak içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 21fd602b-1a6c-44e0-a433-2c8da2114cfb | 26.05.2022 | ali.kara@logo.com.tr |
