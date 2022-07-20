Feature: e-Arsiv Raporları Tekrar Rapor Olustur

  Scenario Outline: e-Arsiv Raporları Tekrar Rapor Olustur
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Rapor Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden Rapor Numarası filtresine <raporNo> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Rapor Islemleri butonuna tıklanır
    * Menü altındaki seçeneklerden Tekrar Rapor Oluştur isimli butona tıklanır
    * Yeni ekranlar yönetim popup butonlarından Tamam seçilir
    #* Yeni ekranlar popup mesajı İşleminiz başarıyla içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | raporNo | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 2744176 | 01.05.2022 | ali.kara@logo.com.tr |
