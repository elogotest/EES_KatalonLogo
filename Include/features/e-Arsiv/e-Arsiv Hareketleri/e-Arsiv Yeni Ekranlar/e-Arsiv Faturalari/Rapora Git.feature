Feature: e-Arsiv Faturaları Rapora Git

  Scenario Outline: e-Arsiv Faturaları Rapora Git
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Rapora Git isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * Tabloda veri var mı kontrol edilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 21fd602b-1a6c-44e0-a433-2c8da2114cfb | 26.05.2022 | ali.kara@logo.com.tr |
