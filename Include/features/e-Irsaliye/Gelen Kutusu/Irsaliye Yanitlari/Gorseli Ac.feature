Feature: Irsaliye Yanitinin Gorselini Ac

  Scenario Outline: Irsaliye Yanitinin Gorselini Ac
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü Gelen Kutusu başlığı altındaki İrsaliye Yanıtları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <veri_Adi> isimli verinin İrsaliye Yanıtı adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında İRSALİYE YANITI var mı kontrol edilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                  |          |
      | LOGOGIB      | Aa802030 |   01.02.2022 |     1.02.2022 | eLogo Otomasyon (pb-test) | Muhasebe |
