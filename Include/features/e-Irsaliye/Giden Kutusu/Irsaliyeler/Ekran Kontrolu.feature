	Feature: Giden Kutusu Irsaliyeler Buton Kontrolu

  Scenario Outline: Giden Kutusu Irsaliyeler Buton Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü Giden Kutusu başlığı altındaki İrsaliyeler seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tablodan Logo isimli verinin detayı tıklanır
    * Tablodan Logo isimli verinin detayı tıklanır
    #* Listelenen öğe sayısı Sayfa 1 / 2 (16 öğe) mi
    #* Filtrelerden ETTN filtresine bb24e38e-ea93-4a49-b22e-52269aabcf95 textini yaz
    * Filtre alanlarında Alıcı Ünvan var mı
    * Filtre alanlarında Oluşturma Tarihi var mı
    * Filtre alanlarında İrsaliye Yanıtı var mı
    * Filtre alanlarında Tür var mı
    * Filtre alanlarında Toplam Tutar var mı
    * Filtre alanlarında Atanan Departman var mı
    * Filtre alanlarında İrsaliye No var mı
    * Filtre alanlarında Alıcı VKN/TCKN var mı
    * Filtre alanlarında İrsaliye Tarihi var mı
    * Filtre alanlarında Zarf ETTN var mı
    * Filtre alanlarında Kullanıcı Kodu var mı
    * Filtre alanlarında Belge Statüsü var mı
    #* Filtre alanlarında Zarf Durumu var mı
    * Filtre alanlarında İrsaliye ETTN var mı
    * Filtre alanlarında Senaryo var mı
    * Filtre alanlarında Tüm Hesaplar var mı
    * Filtre butonlarında Filtreleri Kaydet var mı
    * Filtre butonlarında Listele var mı
    * Filtre butonlarında Temizle var mı
    * Butonlardan Excel var mı
    * Butonlardan Toplu İndirme var mı
    * Butonlardan UBL var mı
    * Butonlardan Yazdır var mı
    * Butonlardan PDF var mı
    * Butonlardan Varsayılan İle Göster var mı
    * Butonlardan İzleme Kayıtları var mı
    * Butonlardan Departman Ata var mı
    * Butonlardan Departman Geri Al var mı
    * Butonlardan Statü Ata var mı
    * Butonlardan Excel isimli butona tıklanır
    * Alt butonlardan Excel'e Aktar var mı
    * Alt butonlardan Tümünü Excel'e Aktar var mı
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan PDF Seçilenleri İndir var mı
    * Alt butonlardan PDF Tümünü İndir var mı
    * Alt butonlardan UBL Seçilenleri İndir var mı
    * Alt butonlardan UBL Tümünü İndir var mı
    # * Butonlardan UBL isimli butona tıklanır
    #* Alt butonlardan Göster var mı
    #* Alt butonlardan İndir var mı
    #* Butonlardan PDF isimli butona tıklanır
    #* Alt butonlardan Göster var mı
    #* Alt butonlardan İndir var mı
    * Butonlardan Statü Ata isimli butona tıklanır
    * Alt butonlardan Öndeğer var mı
    #Fulltextsearch Islemleri
    #* Anasayfaya geri dönülür
    #* Ana menüden e-İrsaliye seçilir
    #* Alt menü Giden Kutusu başlığı altındaki İrsaliyeler seçilir
    #* Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    #* Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    #Alıcı Unvanı
    * Filtrelerden Alıcı Ünvanı filtresine Logo Elektronik GIB Test textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    #* Filtrelerden Alıcı Ünvanı filtresine Logo Elektronik GIB textini yaz
    #* Filtre butonlarından Listele seçilir
    #* Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı Ünvanı filtresine *Elektronik GIB Test textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı Ünvanı filtresine Logo Elektronik* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı Ünvanı filtresine *Elektronik* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    #Alıcı VKN/TCKN
    * Filtrelerden Alıcı Ünvanı filtresinin iceriğini sil
    * Filtrelerden Alıcı VKN/TCKN filtresine 6090122074 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı VKN/TCKN filtresine *90122074 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı VKN/TCKN filtresine 60901220* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden Alıcı VKN/TCKN filtresine *9012207* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    #İrsaliye no
    * Filtrelerden Alıcı VKN/TCKN filtresinin iceriğini sil
    * Filtrelerden İrsaliye No filtresine GEF2022388825263 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden İrsaliye No filtresine *F2022388825263 textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden İrsaliye No filtresine GEF20223888252* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Filtrelerden İrsaliye No filtresine *F202238882526* textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    #Müşteri Bayi Kodu
    * Filtrelerden Alıcı VKN filtresinin iceriğini sil
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | fatura_tarihi_baslangic | fatura_tarihi_bitis |
      | LOGOGIB      | Aa802030 |   04.02.2022 |    04.02.2022 |              01.04.2020 |          30.04.2020 |
