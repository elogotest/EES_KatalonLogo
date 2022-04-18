Feature: e-Fatura e-Belge Tarihi Degistirilebilsin

  Scenario Outline: e-Fatura e-Belge Tarihi Degistirilebilsin
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge tarihi degistirilebilsin Evet secilir
    * Anasayfaya geri dönülür
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni oluşturma ekranında Filtrelerden ETTN filtresine 5800cd32-2df3-4268-b69a-ad356841cf41 textini yaz
    * Yeni oluşturma ekranı Filtrele butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    * Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Değiştir seçilir
    * Yeni oluşturma ekranı Fatura Tarihi <fatura_tarihi> olarak girilir
    * Yeni oluşturma ekranı filtre butonlarından Vazgeç seçilir
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge tarihi degistirilebilsin Hayır secilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | unvan                   | fatura_tarihi    |
      | ELOGOGIB     | 123456 |   10.11.2020 |    30.11.2020 | VirgosolOtomasyon600413 | 02-09-2020 23:44 |
