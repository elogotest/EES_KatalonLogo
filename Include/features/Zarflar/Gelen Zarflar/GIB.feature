Feature: Gelen Zarf GIB

  Scenario Outline: Gelen Zarf GIB
    * Kullanici adi <kullaniciAdi> ve sifre <sifre> olarak giris yapilir
    * Ana menüden Zarflar secilir
    * Alt menüden Gelen Zarflar secilir
    * Filtrelerden Olusturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Olusturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Tablodan <veri_Adi> isimli veri secilir
    * Butonlardan UBL isimli butona tiklanir
    * <tag> tagli ubl geldi mi
    * GİB Durum Sorgulama popupi acildi mi
    * Popup kapatilir
    * Kullanici islemlerinden cikis secilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | veri_Adi | tag                         |
      | ELOGO6       | 123456 |   01.11.2020 |    30.11.2020 | E LOGO 6 | sh:StandardBusinessDocument |
