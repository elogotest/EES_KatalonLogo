Feature: e-Mustahsil Makbuzu Raporlari Yeniden Olustur

  Scenario Outline: e-Mustahsil Makbuzu Raporlari Yeniden Olustur
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
    * Butonlardan Yeniden Oluştur isimli butona tıklanır
    * Popup mesajı Seçtiğiniz e-Belge raporları yeniden oluşturulacaktır. Devam etmek istiyor musunuz? içeriyor mu
    * Yönetim popupında Evet seçilir
    * Popup mesajı "GİB'e gönderilmek için kuyrukta", "Rapor imzalandı" ve "GİB'den Durum Sorgulandı" statüsündeki raporlar yeniden oluşturulamaz. içeriyor mu
    #* Yönetim popupında Evet seçilir
    #* Popup mesajı Seçtiğiniz kayıtlardan 1 adedi tekrar oluşturmak üzere kuyruğa kaydedildi. içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    31.01.2022 |    14399 |
