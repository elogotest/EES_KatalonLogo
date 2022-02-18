Feature: Tasarim Araclari Guncelle

  Scenario Outline: Tasarim Araclari Guncelle
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <name> ünvanlı veriye tıklanır
    * Butonlardan Güncelle isimli butona tıklanır
    * Dinamik başlıklarda <baslik> var mı
    * Tasarım açıklaması alanına <aciklama> girilir
    * Oluşturulan Fatura başlığında e-FATURA var mı
    * Butonlardan Farklı Kaydet isimli butona tıklanır
    * Tabloda <aciklama> ünvanlı veri oluşturuldu mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | name     | baslik                      | aciklama          |
      | LOGOGIB      | Aa802030 |    2.02.2022 |     2.02.2022 | e-Fatura | E-FATURA TASARIM AÇIKLAMASI | VirgosolOtomasyon |
