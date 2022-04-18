Feature: e-Fatura Gecmise Donuk Fatura Olusturmak Evet

  Scenario Outline: e-Fatura Gecmise Donuk Fatura Olusturmak Evet
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge numarası degistirilebilsin Evet secilir
    * Anasayfaya geri dönülür
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni oluşturma ekranında Filtrelerden ETTN filtresine ce4b4251-e11e-4966-967d-68fdf44d0d0b textini yaz
    * Yeni oluşturma ekranı Filtrele butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    * Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Değiştir seçilir
    * Belge no bilgisi <belge_no> olarak girilir
    * Enter'a bas
    * Yeni oluşturma ekranı filtre butonlarından Kaydet seçilir
    * Yeni oluşturma ekranı filtre butonlarından Vazgeç seçilir
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge numarası degistirilebilsin Hayır secilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | unvan                   | belge_no         |
      | ELOGOGIB     | 123456 |   15.11.2020 |    17.11.2020 | VirgosolOtomasyon600413 | ZZZ2021000000029 |
