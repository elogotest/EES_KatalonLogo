Feature: e-Arsiv Raporlari Yeniden Olustur

  Scenario Outline: e-Arsiv Raporlari Yeniden Olustur
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine <filtreDegeri> dropdowndan degeri seçilir
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Rapor No filtresine 275985 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Yeniden Oluştur isimli butona tıklanır
    #* Popup mesajı Seçtiğiniz kayıtlardan sadece uygun statüdeki raporlar yeniden oluşturulacaktır. Devam etmek istiyor musunuz? içeriyor mu
    * Yönetim popupında Evet seçilir
    * Tabloda Rapor Oluşturulmak İçin Kuyrukta veya Rapor Yeniden Oluşturulacak veya Rapor Oluşturuldu verilerinden biri oluşturuldu mu
    #* Popup mesajı Seçilen raporlar yeniden oluşturulacaktır. Devam etmek istiyor musunuz? içeriyor mu
    #* Yönetim popupında Evet seçilir
    #* Popup mesajı Seçtiğiniz kayıtlardan 1 adedi tekrar oluşturmak üzere kuyruğa kaydedildi. içeriyor mu
    #* Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | veri_Adi |
      | LOGOGIB      | Aa802030 | 2022 Ocak    |   275985 |
