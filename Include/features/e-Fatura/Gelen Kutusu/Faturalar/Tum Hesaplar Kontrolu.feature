Feature: e-Fatura Gelen Kutusu Faturalar Tum Hesaplar Kontrolu

  Scenario Outline: e-Fatura Gelen Kutusu Faturalar Tum Hesaplar Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Faturalar seçilir
    * Filtre butonlarından Tüm Hesaplar butonuna tıklanır
    * Filtre butonlarından Listele seçilir
    #* Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  |
      | ELOGO6       | 123456 |
