Feature: e-Arsiv Raporlari Buton Kontrolu

  Scenario Outline: e-Arsiv Raporlari Buton Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Listelenen öğe bilgisi kayıt edilir
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Listelenen öğe sayısı doğru mu
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine <filtreDegeri> dropdowndan degeri seçilir
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri1> baslangic degerini yaz
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    #* Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tablodan 280771 isimli verinin detayı tıklanır
    * Tablodan 280771 isimli verinin detayı tıklanır
    * Filtre alanlarında Dönem Tarihi var mı
    * Filtre alanlarında Bölüm Tarihi var mı
    * Filtre alanlarında ETTN var mı
    * Filtre alanlarında Rapor No var mı
    * Filtre alanlarında Durum var mı
    * Filtre alanlarında Saklama var mı
    * Filtre butonlarında Filtreleri Kaydet var mı
    * Filtre butonlarında Listele var mı
    * Filtre butonlarında Temizle var mı
    * Butonlardan Excel var mı
    * Butonlardan XML var mı
    * Butonlardan Rapor var mı
    * Butonlardan İzleme Kayıtları var mı
    * Butonlardan GİB'e Gönder var mı
    * Butonlardan Yeniden Oluştur var mı
    * Butonlardan Mutabakat var mı
    * Butonlardan Rapor Oluştur var mı
    * Butonlardan Excel isimli butona tıklanır
    * Alt butonlardan Excel 'e Aktar var mı
    * Alt butonlardan Tümünü Excel 'e Aktar var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri1 | filtreDegeri2 |
      | LOGOGIB      | Aa802030 | 2022 Ocak    |    01.01.2022 |    31.01.2022 |
