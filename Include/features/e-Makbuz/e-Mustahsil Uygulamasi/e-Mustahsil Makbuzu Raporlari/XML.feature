Feature: e-Mustahsil Makbuzu Raporlari XML

  Scenario Outline: e-Mustahsil Makbuzu Raporlari XML
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzu Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine 2022 Ocak dropdowndan degeri seçilir
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan XML isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * <tag> tagli ubl geldi mi
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi | tag                 |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    01.31.2022 |    14447 | earsiv:eArsivRaporu |
