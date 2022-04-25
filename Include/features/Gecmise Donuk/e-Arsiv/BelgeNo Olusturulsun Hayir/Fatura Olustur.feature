Feature: eArsiv Gecmise Donuk Fatura Olustur Hayir

  Scenario Outline: eArsiv Gecmise Donuk Fatura Olustur Hayir
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * Belge Numarası eLogo Tarafından Oluşturulsun Hayır Hayır seçili mi
    * Anasayfaya geri dönülür
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Alıcı Seç seçilir
    * Yeni olusturma ekranından <alici_Adi> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
    * Fatura tarihi Bilgisi <fatura_tarihi> olarak girilir
    * Yeni olusturma ekranı MalHizmet Bilgileri Otomasyon,Katalon,100,10 olarak girilir
    * Yeni olusturma ekranı Notlar alanına Otomasyon Not bilgisi girilir
    * Yeni oluşturma ekranı filtre butonlarından Kaydet seçilir
    #* https://efatura-test.elogo.com.tr/InvoiceCreation/UserInvoiceCreationList isimli linke gidilir
    * Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni oluşturma ekranı ETTN filtresine ettn bilgisini yaz
    * Yeni oluşturma ekranı Filtrele butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    * Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Numara Ver seçilir
    * Açılan popuptan evet seçilir
    * Tablodaki dropdown butonlarından Alıcıya Gönder seçilir
    * Açılan popuptan evet seçilir
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Filtrelerden Ettn filtresine Ettn bilgisi yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | alici_Adi               | fatura_tarihi    | urun_Adi  | aciklamasi | unvan                  |
      | ELOGOGIB     | 123456 | VirgosolOtomasyon699944 | 31-12-2021 23:44 | Otomasyon | Virgosol   | VirgosolOtomasyon39267 |
