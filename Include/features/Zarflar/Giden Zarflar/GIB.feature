Feature: Giden Zarf GIB

  Scenario Outline: Giden Zarf GIB
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Zarflar seçilir
    * Alt menüden Giden Zarflar seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan GİB isimli butona tıklanır
    * Popup başlığı GİB Durum Sorgulama içeriyor mu
    * Popup kapatılır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                                      |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    31.01.2022 | LOGO YAZILIM SANAYİ VE TİCARET ANONİM ŞİRKETİ |
