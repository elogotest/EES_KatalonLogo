Feature: e-Serbest Meslek Makbuzlari Goruntule

  Scenario Outline: e-Serbest Meslek Makbuzlari Goruntule
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <veri_Adi> isimli verinin Görüntüle adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-Serbest Meslek Makbuzu var mı kontrol edilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                  |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    31.01.2022 | eLogo Otomasyon (pb-test) |
