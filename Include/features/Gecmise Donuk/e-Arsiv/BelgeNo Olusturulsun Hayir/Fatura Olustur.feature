Feature: eArsiv Gecmise Donuk Fatura Olustur Hayir

  Scenario Outline: eArsiv Gecmise Donuk Fatura Olustur Hayir
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * Belge Numarası eLogo Tarafından Oluşturulsun Hayır Hayır seçili mi
    * Anasayfaya geri dönülür
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Araçları başlığı altındaki e-Arşiv Fatura Oluşturma seçilir
    * Tablodaki tüm veriler silinir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının e-Arşiv Fatura Bilgileri başlığını içerdiği kontrol edilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Fatura tarihi Bilgisi <fatura_tarihi> olarak girilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Mal/Hizmet başlığına <urun_Adi> girilir
    * Ürün ekleme alanında Açıklaması başlığına <aciklamasi> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Numara Oluştur isimli butona tıklanır
    * Popup mesajı Fatura numarası, tarihi ve ön eki değiştirilemez. içeriyor mu
    * Yönetim popupında Evet seçilir
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | alici_Adi         | fatura_tarihi    | urun_Adi  | aciklamasi | unvan             |
      | ELOGOGIB     | 123456 | VirgosolFaturaVKN | 31.12.2021 23:44 | Otomasyon | Virgosol   | VirgosolOtomasyon |
