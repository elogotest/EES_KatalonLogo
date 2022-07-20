Feature: e-Arsiv Raporları Mutakabat Raporu

  Scenario Outline: e-Arsiv Raporları Mutakabat Raporu
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
    * Yeni ekranlar Mutakabat butonuna tıklanır
    * Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekranlar popup butonlarından Gönder secilir
    * Yeni ekranlar yönetim popup butonlarından Tamam seçilir
    * Yeni ekranlar popup mesajı Mutabakat Raporu Talebi Alınmıştır içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | raporNo | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 2744176 | 01.05.2022 | ali.kara@logo.com.tr |
