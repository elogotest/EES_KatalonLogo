Feature: Yeni olusturma ekranı Gönderim tipi Kagit ve İstisna tipinde e-Arsiv faturasi olusturulmasi

  Scenario Outline: Yeni olusturma ekranı Gönderim tipi Kagit ve İstisna tipinde e-Arsiv faturasi olusturulmasi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    * Tablodaki verilerin tamamı silinir
    * Açılan popuptan evet seçilir
    * Tablodaki verilerin tamamı seçilir
    * Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Alıcı Seç seçilir
    * Yeni olusturma ekranından <vkntckn> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
    * Yeni olusturma ekranı Tip alanından İstisna seçilir
    * Yeni olusturma ekranı MalHizmet Bilgileri Otomasyon,Katalon,100,10 olarak girilir
    * Yeni olusturma ekranı Notlar alanına Otomasyon Not bilgisi girilir
    * Yeni oluşturma ekranı filtre butonlarından Kaydet seçilir
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
    * e-Arşiv oluşturulan faturanın tutar bilgisi 142.780,00 ile aynı mı
    #* Tabloda Başarılı ünvanlı veri oluşturuldu mu
    * Tabloda yeni oluşturulan eArsiv verisi başarılı mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | vkntckn    |
      | ELOGO6       | 123456 | 5422405266 |
