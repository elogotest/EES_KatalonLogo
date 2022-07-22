Feature: e-Fatura Giden Kutusu Faturalar e-Posta Gönder

  Scenario Outline: e-Fatura Giden Kutusu Faturalar e-Posta Gönder
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
    * Yeni ekranlar ePosta Gönder butonuna tıklanır
    * Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekran filtre butonlarından Gönder isimli butona tıklanır
    * Yeni ekranlar popup mesajı Durumu başarılı 1 adet belge içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 0BEDD008-6F68-467E-A797-7CE4AC0AA240 | 27.06.2022 | ali.kara@logo.com.tr |
