Feature: e-Arsiv Faturalari Tum Hesaplar Butonu Kontrolu

  Scenario Outline: e-Arsiv Faturalari Tum Hesaplar Butonu Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Filtre butonlarından Tüm Hesaplar butonuna tıklanır
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    |
      | LOGOGIB      | Aa802030 |
