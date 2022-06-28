Feature: e-Fatura Taslak Degistir

  Scenario Outline: e-Fatura Taslak Degistir
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Değiştir isimli butona tıklanır
    * Görsel tasarım sayfasının e-Fatura Bilgileri başlığını içerdiği kontrol edilir
    * Posta kodu etiketi <etiket> olarak girilir
    * Ettn bilgisi kayıt edilir
    #* Enter'a bas
    #* Notlar alanına <not> girilir
    #* Ürün ekleme alanında Mal/Hizmet başlığına Otomasyon girilir
    * Kaydet butonuna tıklanır
    * Filtre butonlarından Listele seçilir
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Gönder isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    #* Yönetim popupında Tamam seçilir
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Ettn filtresine Ettn bilgisi yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | veri_Adi                   | not                    | unvan                      | etiket                           |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | Otomasyon Not Degistir | Elogo Otomasyon (pb-stage) | urn:mail:defaultpk@elogo6.com.tr |
