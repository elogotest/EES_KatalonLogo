Feature: Kümülatif Kontör Raporu Kontrolleri

  Scenario Outline: Kümülatif Kontör Raporu Kontrolleri
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Raporlar seçilir
    * Alt menüden Kümülatif Kontör Raporu seçilir
    * Filtrelerden Firma Adı filtresine LOGO YAZILIM SANAYİ VE TİCARET ANONİM ŞİRKETİ textini yaz
    * Filtrelerden Firma Adı filtresine LOGO YAZILIM SANAYİ VE TİCARET ANONİM ŞİRKETİ textini yaz
    * Elogo asistan kapatılır
    * Filtrelerden İşlem Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden İşlem Tarihi filtresine <filtreDegeri1> bitis degerini yaz
    * Enter'a bas
    * Filtrelerden VKN / TCKN filtresine 1234567806 textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine LOGOGIB textini yaz
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Hizmet Açıklaması filtresine e-İrsaliye Giden dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Tipi filtresine Ana Firma dropdowndan degeri seçilir
    * Filtrelerden Hizmet Açıklaması filtresine e-İrsaliye Gelen dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine  textini yaz
    * Filtrelerden Hizmet Açıklaması filtresine Hepsi dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Adı filtresine  textini yaz
    * Filtrelerden VKN / TCKN filtresine 1234567806 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Hizmet Açıklaması filtresine e-MM Mail dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine ELOGO6 textini yaz
    * Filtrelerden Hizmet Açıklaması filtresine Hepsi dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Hizmet Açıklaması filtresine e-Müstahsil Makbuzu dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Adı filtresine ELOGO6ALT textini yaz
    * Filtrelerden VKN / TCKN filtresine 1234567805 textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine ELOGO6ALT textini yaz
    * Filtrelerden Hizmet Açıklaması filtresine Hepsi dropdowndan degeri seçilir
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Adı filtresine  textini yaz
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine  textini yaz
    * Filtrelerden Firma Tipi filtresine Alt Firma dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Adı filtresine ELOGO6ALT textini yaz
    * Filtre butonlarından Listele seçilir
    * Filtrelerden Hizmet Açıklaması filtresine e-Fatura Gelen dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Firma Adı filtresine LOGO YAZILIM SANAYİ VE TİCARET ANONİM ŞİRKETİ textini yaz
    * Filtrelerden VKN / TCKN filtresine 6090122074 textini yaz
    * Filtrelerden Hizmet Açıklaması filtresine Hepsi dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden VKN / TCKN filtresine  textini yaz
    * Filtrelerden Kullanıcı Kodu filtresine ELOGO6ALT textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Hizmet Açıklaması filtresine MT940 dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Kullanıcı Kodu filtresine  textini yaz
    * Filtrelerden Firma Tipi filtresine Tümü dropdowndan degeri seçilir
    * Filtrelerden Hizmet Açıklaması filtresine Hepsi dropdowndan degeri seçilir
    * Filtre butonlarından Listele seçilir
    * Raporlar sayfa boyutu 20 olarak seçilir
    #* Sayfa butonlarından 2 numaralı sayfa butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    #* Sayfa butonlarından 1 numaralı sayfa butonuna tıklanır
    * Raporlar sayfa boyutu 10 olarak seçilir
    #* Sayfa butonlarından 2 numaralı sayfa butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    #* Sayfa butonlarından 3 numaralı sayfa butonuna tıklanır
    #* Tabloda veri var mı kontrol edilir
    #* Sayfa butonlarından 1 numaralı sayfa butonuna tıklanır
    * Raporlar sayfa boyutu 50 olarak seçilir
    * Tabloda veri var mı kontrol edilir
    * Butonlardan Excel isimli butona tıklanır
    * Ön eki Kümülatif_Kontör_Raporu olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri1 | veri_Adi                                      |
      | LOGOGIB      | Aa802030 |   01.02.2022 |    03.02.2022 | LOGO YAZILIM SANAYİ VE TİCARET ANONİM ŞİRKETİ |
