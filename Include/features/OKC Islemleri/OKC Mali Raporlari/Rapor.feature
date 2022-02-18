Feature: OCK Mali Raporlari Rapor

  Scenario Outline: OCK Mali Raporlari Rapor
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden ÖKC İşlemleri seçilir
    * Alt menüden ÖKC Mali Raporlar seçilir
    * Filtrelerden Dönem filtresine 2022 Ocak dropdowndan degeri seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Rapor isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni Nesil ÖKC Mali Rapor popupı açıldı mı
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | veri_Adi | filtreDegeri | filtreDegeri2 |
      | LOGOGIB      | Aa802030 |     2253 |   01.01.2022 |    31.01.2022 |
