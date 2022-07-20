Feature: e-Arsiv Faturaları İptal Et ve Geri Al

  Scenario Outline: e-Arsiv Faturaları İptal Et ve Geri Al
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    #* Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Menu butonuna tıklanır
    * Yeni ekranlar Iptal Islemleri butonuna tıklanır
   	* e-Arsiv Faturaları Iptal Et butonuna tıklanır
   	* Tamam secilir
   	* Yeni ekranlar yönetim popup butonlarından Tamam seçilir
   	* Yeni ekranlar Menu butonuna tıklanır
    * Yeni ekranlar Iptal Islemleri butonuna tıklanır
   	* Yeni ekranlar Iptal Geri Al butonuna tıklanır
   	* Yeni ekranlar yönetim popup butonlarından Tamam seçilir
   	* Yeni ekranlar popup mesajı iptal işlemi geri alınmıştır içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 21fd602b-1a6c-44e0-a433-2c8da2114cfb | 26.05.2022 | ali.kara@logo.com.tr |
