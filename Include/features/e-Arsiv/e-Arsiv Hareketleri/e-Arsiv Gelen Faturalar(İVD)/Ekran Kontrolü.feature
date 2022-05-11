Feature: e-Arsiv Gelen Faturaları(İVD) Ekran ve Filtre Kontrolü

  Scenario Outline: e-Arsiv Gelen Faturaları(İVD) Ekran ve Filtre Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki -Arşiv Gelen Faturalar (İVD) seçilir
    #* Yeni oluşturma ekranı filtre butonlarından Filtreler seçilir
    * Yeni oluşturma ekranı filtre alanlarında Fatura Numarası var mı
    * Yeni oluşturma ekranı filtre alanlarında VKN/TCKN var mı
    * Yeni oluşturma ekranı filtre alanlarında Gönderim Şekli var mı
    * Yeni oluşturma ekranı filtre alanlarında Para Birimi var mı
    * Yeni oluşturma ekranı filtre alanlarında Oluşturma Tarihi var mı
    * Yeni oluşturma ekranı filtre alanlarında Gönderci Unvan var mı
    * Yeni oluşturma ekranı filtre alanlarında Tesisat Numarası var mı
    * Yeni oluşturma ekranı filtre alanlarında Toplam Tutar var mı 
    * Yeni oluşturma ekranı filtre alanlarında Ödenecek Tutar var mı 
    * Yeni oluşturma ekranı filtre alanlarında Vergi Toplamı var mı
    * Yeni oluşturma ekranı filtre butonlarında Filtreler var mı
    * Yeni oluşturma ekranı filtre butonlarında Kolonlar var mı
    * Yeni oluşturma ekranı filtre butonlarında Yeni Ekle var mı
    * Yeni oluşturma ekranı filtre butonlarında Alıcıya Gönder var mı
    * Yeni oluşturma ekranı filtre butonlarında Vazgeç var mı
    * Yeni oluşturma ekranı filtre butonlarında Temizle var mı
    * Yeni oluşturma ekranı filtre butonlarında Filtrele var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | 
      | ELOGO6       | 123456 |   
