Feature: e-Arsiv Gelen Faturaları(İVD) Ekran ve Filtre Kontrolü

  Scenario Outline: e-Arsiv Gelen Faturaları(İVD) Ekran ve Filtre Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Gelen Faturalar (İVD) seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni ekranlar Filtre başlıklarından Fatura Numarası var mı
    * Yeni ekranlar Filtre başlıklarından VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Gönderici Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Tesisat Numarası var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | 
      | ELOGO6       | 123456 |   
