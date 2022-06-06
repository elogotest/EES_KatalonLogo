Feature: e-Arsiv Raporları Excel

  Scenario Outline: e-Arsiv Raporları Excel
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
    * Yeni ekranlar Excel butonuna tıklanır
    * Excel alt butonlarından Excele Akatar'a tıklanır
    * Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekran filtre butonlarından Gönder isimli butona tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | raporNo | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 2744417 | 26.05.2022 | ali.kara@logo.com.tr |
