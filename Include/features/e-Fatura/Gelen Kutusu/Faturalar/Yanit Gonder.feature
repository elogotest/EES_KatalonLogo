Feature: Ticari Fatura ile Yanit Gonder Kontrolu

  Scenario Outline: Ticari Fatura ile Yanit Gonder Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Fatura Oluşturma seçilir
    * Alt menüden Fatura Oluşturma seçilir
    #* Elogo asistan kapatılır
    * Yeni oluşturma ekranı filtre butonlarından Yeni Ekle seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Alıcı Seç seçilir
    * Yeni olusturma ekranından <alici_Adi> VKN/TCKN bilgisine sahip kullanıcı seçilir
    * Yeni olusturulan faturanın Ettn bilgisi kayıt edilir
    * Yeni olusturma ekranı Gönderim Şekli Ticari Fatura olarak seçilir
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
    #* Açılan popup mesajı Oluşturulacak fatura numarası : KGC2022000000092 Fatura numarası oluşturulduktan sonra fatura silinemez. Fatura numarası, tarihi ve ön eki değiştirilemez. Devam etmek istiyor musunuz? ile aynı mı
    #* Yeni oluşturma ekranı filtre butonlarından Evet seçilir
    * Açılan popuptan evet seçilir
    #* Tablodaki yeni oluşan veri seçilir
    * Tablodaki dropdown butonlarından Alıcıya Gönder seçilir
    * Açılan popuptan evet seçilir
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
      | kullaniciAdi | sifre  | alici_Adi                  | urun_Adi  | aciklamasi | miktari | birimFiyat | not           | unvan                 |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | Otomasyon | Virgosol   |     400 |        100 | Otomasyon Not | VirgosolOtomasyonTEST |
