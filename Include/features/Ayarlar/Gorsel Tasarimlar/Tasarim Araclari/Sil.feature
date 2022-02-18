Feature: Tasarim Araclari Sil

  Scenario Outline: Tasarim Araclari Sil
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Sayfa butonlarından 2 numaralı sayfa butonuna tıklanır
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <name> ünvanlı veriye tıklanır
    * Butonlardan Sil isimli butona tıklanır
    #* Popup mesajı Ön değer tasarım silinemez, öncelikle farklı tasarım ön değer olarak tanımlanmalıdır. içeriyor mu
    * Yönetim popupında Hayır seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | name  |
      | LOGOGIB      | Aa802030 |    2.02.2022 |     2.02.2022 | 69133 |
