Feature: e-Fatura Taslak Degistir

  Scenario Outline: e-Fatura Taslak Degistir
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Degistir isimli butona tıklanır
    * Görsel tasarım sayfasının e-Fatura Bilgileri başlığını içerdiği kontrol edilir
    #* Notlar alanına <not> girilir
    * Kaydet butonu seçilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Gönder isimli butona tıklanır 
    * Popup mesajı Devam etmek istiyor musunuz? içeriyor mu
    * Yönetim popupında Evet seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | veri_Adi                   | not                    | unvan        |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | Otomasyon Not Degistir | Enes Erdoğan |
