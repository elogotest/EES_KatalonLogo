Feature: e-Mustahsil Makbuzu excele aktarma

  Scenario Outline: e-Mustahsil Makbuzu excele aktarma
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtrelerden Müstahsil Ad Soyad filtresine <veri_Adi> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Excel isimli butona tıklanır
    * Alt butonlardan Excel'e Aktar butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Popup email <Email> olarak girilir
    * Yönetim popupında Gönder seçilir
    * Popup mesajı talebiniz işleme alınmıştır içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Butonlardan Excel isimli butona tıklanır
    * Alt butonlardan Tümünü Excel'e Aktar butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Popup email <Email> olarak girilir
    * Yönetim popupında Gönder seçilir
    * Popup mesajı talebiniz işleme alınmıştır içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Ana menüden Raporlar seçilir
    * Alt menüden Toplu Veri İndirme seçilir
    * Filtrelerden Talep No filtresine Rapor No bilgisi yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi             | Email                                                  |
      | LOGOGIB      | Aa802030 |   01.02.2022 |    01.02.2022 | Hacı Mehmet Adıgüzel | elogotestelogo@gmail.com;ali.karaotomasyon@logo.com.tr |
