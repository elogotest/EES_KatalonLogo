Feature: e-Fatura Gecmise Donuk Fatura Olusturmak Evet

  Scenario Outline: e-Fatura Gecmise Donuk Fatura Olusturmak Evet
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    #* Belge Numarası eLogo Tarafından Oluşturulsun Evet Evet seçili mi
    * Anasayfaya geri dönülür
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Oluşturma seçilir
    #* Tablodaki tüm veriler silinir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının e-Fatura Bilgileri başlığını içerdiği kontrol edilir
    #* Posta kodu etiketi urn:mail:defaultpk@elogo6.com.tr olarak girilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Fatura tarihi Bilgisi <fatura_tarihi> olarak girilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Mal/Hizmet başlığına <urun_Adi> girilir
    * Ürün ekleme alanında Açıklaması başlığına <aciklamasi> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Numara Oluştur isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    * Popup mesajı oluşmuştur içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Tablodaki eFatura verisinin fatura numarası <fatura_no> içeriyor mu
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Gönder isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
    * Filtrelerden Ettn filtresine Ettn bilgisi yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    #* Tabloda yeni oluşturulan eFatura verisi başarılı mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | alici_Adi         | fatura_tarihi    | fatura_no | urun_Adi  | aciklamasi | unvan                                             | tag     |
      | ELOGO6       | 123456 | VirgosolFaturaVKN | 27.09.2020 23:44 | EE        | Otomasyon | Virgosol   | LOGO ELEKTRONİK TİCARET HİZMETLERİ ANONİM ŞİRKETİ | invoice |
