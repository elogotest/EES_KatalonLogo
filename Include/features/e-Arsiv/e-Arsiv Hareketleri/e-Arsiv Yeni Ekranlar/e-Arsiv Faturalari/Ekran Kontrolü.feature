Feature: e-Arsiv Faturaları Ekran ve Filtre Kontrolü

  Scenario Outline: e-Arsiv Faturaları Ekran ve Filtre Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * https://efatura-stage.elogo.com.tr/EArchive/EArchiveInvoicesList isimli linke gidilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Filtre başlıklarından Fatura Numarası var mı
    * Yeni ekranlar Filtre başlıklarından VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Gönderici Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Tesisat Numarası var mı
    * Yeni ekranlar Filtre başlıklarından Toplam Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Ödenecek Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Vergi Toplamı var mı
    * Yeni ekranlar Filtre başlıklarından Oluşturma Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Gönderim Şekli var mı
    * Yeni ekranlar Filtre başlıklarından Para Birimi var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | 
      | ELOGO6       | 123456 |   
