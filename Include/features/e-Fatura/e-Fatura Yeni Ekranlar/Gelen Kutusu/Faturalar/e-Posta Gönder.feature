Feature: e-Fatura Gelen Kutusu Faturalar e-Posta Gönder

  Scenario Outline: e-Fatura Gelen Kutusu Faturalar e-Posta Gönder
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
    * Yeni ekranlar ePosta Gönder butonuna tıklanır
    * Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekran filtre butonlarından Gönder isimli butona tıklanır
    * Yeni ekranlar popup mesajı Durumu başarılı 1 adet belge içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 7ad2512b-451d-49be-9ecf-e18b204bbd23 | 27.06.2022 | ali.kara@logo.com.tr |
