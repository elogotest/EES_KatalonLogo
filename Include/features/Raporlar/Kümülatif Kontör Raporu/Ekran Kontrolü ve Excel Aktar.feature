Feature: Kümülatif Kontör Raporu Kontrolleri

  Scenario Outline: Kümülatif Kontör Raporu Kontrolleri
    * Kullanici adi <kullaniciAdi> ve sifre <sifre> olarak giris yapilir
    * Ana menüden Raporlar secilir
    * Alt menüden Kümülatif Kontör Raporu secilir
    * Filtrelerden Firma Adi filtresine E LOGO 6 textini yaz
    * Filtrelerden İslem Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden İslem Tarihi filtresine <filtreDegeri1> bitis degerini yaz
    * Enter'a bas
    * Filtrelerden VKN / TCKN filtresine 1234567806 textini yaz
    * Filtrelerden Kullanici Kodu filtresine ELOGO6 textini yaz
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Hizmet Aciklamasi filtresine e-İrsaliye Giden dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Tipi filtresine Ana Firma dropdowndan degeri secilir
    * Filtrelerden Hizmet Aciklamasi filtresine e-İrsaliye Gelen dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanici Kodu filtresine  textini yaz
    * Filtrelerden Hizmet Aciklamasi filtresine Hepsi dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Adi filtresine  textini yaz
    * Filtrelerden VKN / TCKN filtresine 1234567806 textini yaz
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Hizmet Aciklamasi filtresine e-MM Mail dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanici Kodu filtresine ELOGO6 textini yaz
    * Filtrelerden Hizmet Aciklamasi filtresine Hepsi dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Hizmet Aciklamasi filtresine e-Müstahsil Makbuzu dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Adi filtresine ELOGO6ALT textini yaz
    * Filtrelerden VKN / TCKN filtresine 1234567805 textini yaz
    * Filtrelerden Kullanici Kodu filtresine ELOGO6ALT textini yaz
    * Filtrelerden Hizmet Aciklamasi filtresine Hepsi dropdowndan degeri secilir
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Adi filtresine  textini yaz
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanici Kodu filtresine  textini yaz
    * Filtrelerden Firma Tipi filtresine Alt Firma dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Adi filtresine ELOGO6ALT textini yaz
    * Filtre butonlarindan Listele secilir
    * Filtrelerden Hizmet Aciklamasi filtresine e-Fatura Gelen dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Firma Adi filtresine  textini yaz
    * Filtrelerden VKN / TCKN filtresine 1234567805 textini yaz
    * Filtrelerden Hizmet Aciklamasi filtresine Hepsi dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanici Kodu filtresine ELOGO6ALT textini yaz
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Hizmet Aciklamasi filtresine MT940 dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Tabloda veri var mi kontrol edilir
    * Filtrelerden Kullanici Kodu filtresine  textini yaz
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri secilir
    * Filtrelerden Hizmet Aciklamasi filtresine Hepsi dropdowndan degeri secilir
    * Filtre butonlarindan Listele secilir
    * Raporlar sayfa boyutu 20 olarak secilir
    * Sayfa butonlarindan 2 numarali sayfa butonuna tiklanir
    * Tabloda veri var mi kontrol edilir
    * Sayfa butonlarindan 1 numarali sayfa butonuna tiklanir
    * Raporlar sayfa boyutu 10 olarak secilir
    * Sayfa butonlarindan 2 numarali sayfa butonuna tiklanir
    * Tabloda veri var mi kontrol edilir
    * Sayfa butonlarindan 3 numarali sayfa butonuna tiklanir
    * Tabloda veri var mi kontrol edilir
    * Sayfa butonlarindan 1 numarali sayfa butonuna tiklanir
    * Raporlar sayfa boyutu 50 olarak secilir
    * Tabloda veri var mi kontrol edilir
    * Butonlardan Excel isimli butona tiklanir
    * Ön eki Kümülatif_Kontör_Raporu olan dosya indirildi mi
    * Kullanici islemlerinden cikis secilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri1 | veri_Adi |
      | ELOGO6       | 123456 |   15.10.2021 |    21.10.2021 | E LOGO 6 |
