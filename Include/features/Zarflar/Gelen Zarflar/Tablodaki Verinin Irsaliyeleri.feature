Feature: Gelen Zarf Tablodaki Verinin Irsaliyeleri

  Scenario Outline: Gelen Zarf Tablodaki Verinin Irsaliyeleri
    * Kullanici adi <kullaniciAdi> ve sifre <sifre> olarak giris yapilir
    * Ana menüden Zarflar secilir
    * Alt menüden Gelen Zarflar secilir
    * Filtrelerden Olusturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Olusturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Tablodaki <veri_Adi> isimli verinin Uygulama Yanitlari adli butonuna tiklanir
    * Yeni acilan sekmeye gecilir
    * Tabloda veri var mi kontrol edilir
    * Ana sekmeye gecilir
    * Kullanici islemlerinden cikis secilir
    

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | veri_Adi |
      | ELOGO6       | 123456 |   01.12.2020 |    31.12.2020 | E LOGO 6 |
