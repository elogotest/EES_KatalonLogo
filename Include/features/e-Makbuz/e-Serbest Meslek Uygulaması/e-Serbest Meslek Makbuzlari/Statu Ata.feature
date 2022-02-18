Feature: e-Serbest Meslek Makbuzlari Statu Ata

  Scenario Outline: e-Serbest Meslek Makbuzlari Statu Ata
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Statü Ata isimli butona tıklanır
    * Alt butonlardan Öndeğer butonuna tıklanır
    * Popup mesajı Statü Başarılı Olarak Güncellendi içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                  |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    31.01.2022 | eLogo Otomasyon (pb-test) |
