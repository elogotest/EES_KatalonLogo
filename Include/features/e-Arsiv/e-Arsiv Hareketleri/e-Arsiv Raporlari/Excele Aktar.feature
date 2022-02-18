Feature: e-Arsiv Raporunun excele aktarilmasi

  Scenario Outline: e-Arsiv Raporunun excele aktarilmasi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine <filtreDegeri> dropdowndan degeri seçilir
    * Elogo asistan kapatılır
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
      | kullaniciAdi | sifre    | filtreDegeri | veri_Adi | Email                                                  |
      | LOGOGIB      | Aa802030 | 2022 Ocak    |   280769 | elogotestelogo@gmail.com;ali.karaotomasyon@logo.com.tr |
