Feature: e-Fatura e-Belge Numarasi silinebilsin

  Scenario Outline: e-Fatura e-Belge Numarasi silinebilsin
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge silinebilsin Evet secilir
    * Anasayfaya geri dönülür
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    #* Elogo asistan kapatılır
    * Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    * Yeni olusturma ekranından <vkntckn> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
    * Yeni olusturma ekranı Tip alanından Satış seçilir
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
    * Tablodaki dropdown butonlarından Sil seçilir
    * Açılan popuptan evet seçilir
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Parametreler seçilir
    * Parametre butonlarından Web Fatura Oluşturma Parametreleri isimli butona tıklanır
    * e-Belge silinebilsin Hayır secilir
    * Anasayfaya geri dönülür
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Alıcı Seç seçilir
    * Yeni olusturma ekranından <unvan> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
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
    * Tablodaki dropdown butonlarından Sil seçilir
    * Açılan popuptan evet seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | vkntckn                 | urun_Adi  | aciklamasi | unvan                   | filtreDegeri | filtreDegeri2 | unvan_2                 |
      | ELOGOGIB     | 123456 | VirgosolOtomasyon600413 | Otomasyon | Virgosol   | VirgosolOtomasyon600413 |   01.10.2020 |    31.10.2020 | VirgosolOtomasyon600413 |
