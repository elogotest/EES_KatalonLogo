Feature: Ticari Fatura ile Yanit Gonder Kontrolu

  Scenario Outline: Ticari Fatura ile Yanit Gonder Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Oluşturma seçilir
    * Tablodaki tüm veriler silinir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının e-Fatura Bilgileri başlığını içerdiği kontrol edilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Senaryo alanından Ticari Fatura seçilir
    * Tip alanından Satış seçilir
    * Döküman Para Birimi alanından Türk Lirası seçilir
    * Ön Ek ARV olarak seçilir
    * Tasarım alanından VirgosolOtomasyon seçilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Mal/Hizmet başlığına <urun_Adi> girilir
    * Ürün ekleme alanında Açıklaması başlığına <aciklamasi> girilir
    * Ürün ekleme alanında Miktarı başlığına <miktari> girilir
    * Ürün ekleme alanında Birim Fiyat başlığına <birimFiyat> girilir
    * Ürün ekleme alanında İskonto Oranı % başlığına 10 girilir
    * Ettn bilgisi kayıt edilir
    * Kaydet butonu seçilir
    * Tabloda Ettn bilgisi kaydedilen veri oluşturuldu mu
    * Tablodan Ettn bilgisi kaydedilen veri seçilir
    * Butonlardan Numara Oluştur isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    * Popup mesajı oluşmuştur içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Tablodan Ettn bilgisi kaydedilen veri seçilir
    * Butonlardan Gönder isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    #* Yönetim popupında Tamam seçilir*1300/1200 başarılı mı kontrolü ekle
    #* Kullanıcı işlemlerinden Çıkış seçilir
    #* Kullanıcı adı <kullaniciAdi1> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Faturalar seçilir
    # * Filtrelerden Ettn filtresine Ettn bilgisi yaz
    * Filtrelerden eFatura Ettn filtresine Ettn bilgisi yaz
    #* Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan E LOGO 6 isimli veri seçilir
    * Butonlardan Yanıt Gönder isimli butona tıklanır
    #* Popup başlığı Uygulama Yanıtı Gönder içeriyor mu
    * Yönetim popupında Gönder seçilir
    * Popup mesajı Uygulama yanıtı başarıyla oluşturuldu. içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Tabloda yeni oluşturulan fatura yanıtı verisi başarılı mı
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Filtrelerden İliskili Fatura Ettn filtresine Ettn bilgisi yaz
    * Filtre butonlarından Listele seçilir
    #* Tablodan 1234567806 isimli veri seçilir
    #* Tabloda yeni oluşturulan fatura yanıtı verisi başarılı mı
    * Tablodaki 1234567806 isimli verinin Yanıt adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında UYGULAMA YANITI var mı kontrol edilir
    * Ana sekmeye geçilir
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Filtrelerden İliskili Fatura Ettn filtresine Ettn bilgisi yaz
    #* Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki fatura yanıtı verisi başarılı mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | alici_Adi | urun_Adi  | aciklamasi | miktari | birimFiyat | not           | unvan                 | kullaniciAdi1 |
      | ELOGO6       | 123456 | ELOGO6    | Otomasyon | Virgosol   |     400 |        100 | Otomasyon Not | VirgosolOtomasyonTEST | ELOGOGIB      |
