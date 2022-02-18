Feature: e-Serbest Makbuzu Raporlari GIBe Gonder

  Scenario Outline: e-Serbest Makbuzu Raporlari GIBe Gonder
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuz Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine 2022 Ocak dropdowndan degeri seçilir
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan GİB'e Gönder isimli butona tıklanır
    * Popup mesajı 48 adet e-SMM makbuzunuz rapora dahil edilmemiş veya raporun yanıt kodu Paket Başarıyla İşlendi durumunda değildir. Öncelikle bu makbuzların rapora dahil edilmesini ve GİB'den başarılı yanıt kodunu almasını sağlayınız. içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi |
      | LOGOGIB      | Aa802030 |   01.01.2022 |    31.01.2022 |    11554 |
