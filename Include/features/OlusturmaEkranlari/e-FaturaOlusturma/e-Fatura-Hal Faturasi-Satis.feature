Feature: Yeni olusturma ekranı Hal Fatura  ve Satıs tipinde e-Fatura olusturulmasi

  Scenario Outline: Yeni olusturma ekranı Hal Fatura  ve Satis tipinde e-Fatura olusturulmasi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Tablodaki verilerin tamamı silinir
    * Açılan popuptan evet seçilir
    * Tablodaki verilerin tamamı seçilir
    * https://efatura-stage.elogo.com.tr/InvoiceCreation/UserInvoiceCreationList/create isimli linke gidilir
    #* Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    #* Yeni oluşturma ekranı filtre butonlarından  seçilir
    * Yeni olusturma ekranından <vkntckn> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
    * Yeni olusturma ekranı Gönderim Şekli Hal Fatura olarak seçilir
    * Yeni olusturma ekranı Tip alanından Satış seçilir
    * Künye Numarası girilir
    * Yeni olusturma ekranı Notlar alanına Otomasyon Not bilgisi girilir
    * Yeni oluşturma ekranı filtre butonlarından Kaydet seçilir
    * Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni oluşturma ekranı ETTN filtresine ettn bilgisini yaz
    * Yeni oluşturma ekranı Filtrele butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    * Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Numara Ver seçilir
    * Açılan popuptan evet seçilir
    #* Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Alıcıya Gönder seçilir
    * Açılan popuptan evet seçilir
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
     * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Ettn filtresine Ettn bilgisi yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | vkntckn    |
      | ELOGO6       | 123456 | ELOGO TEST |
