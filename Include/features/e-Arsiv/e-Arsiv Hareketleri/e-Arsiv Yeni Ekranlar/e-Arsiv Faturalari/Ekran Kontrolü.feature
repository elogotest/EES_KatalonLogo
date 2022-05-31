Feature: e-Arsiv Faturaları Ekran ve Filtre Kontrolü

  Scenario Outline: e-Arsiv Faturaları Ekran ve Filtre Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    #* Yeni ekran üst butonlardan Filtreler isimli butona tıklanır
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Üst butonlardan Filtreler var mı
    * Yeni ekranlar Üst butonlardan Kolonlar var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Numarası var mı
    * Yeni ekranlar Filtre başlıklarından Oluşturma Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Ödenecek Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Toplam Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Ödenecek Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Vergi Matrahı var mı
    * Yeni ekranlar Filtre başlıklarından ETTN var mı
    * Yeni ekranlar Filtre başlıklarından VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Alıcı Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Müşteri Bayi Kodu var mı
    * Yeni ekranlar Filtre başlıklarından Tüm Hesaplar var mı
    * Yeni ekranlar Filtre başlıklarından Belge Statüsü var mı
    * Yeni ekranlar Filtre başlıklarından Atanan Departman var mı
    * Yeni ekranlar Filtre başlıklarından Para Birimi var mı
    * Yeni ekranlar Filtre başlıklarından Durum var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Tipi var mı
    * Yeni ekranlar Filtre başlıklarından Gönderim Şekli var mı
    * Yeni ekranlar Filtre başlıklarından Rapor Durumu var mı
    * Yeni ekranlar Filtre başlıklarından İptal / İtiraz Durumu var mı
    * Yeni ekranlar Filtre başlıklarından İptal/İtiraz Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Saklama var mı
    * Yeni ekranlar Filtre başlıklarından Yazdırma Durumu var mı
    * Yeni ekranlar Filtre butonlarından Filtrele var mı
    * Yeni ekranlar Filtre butonlarından Temizle var mı
    * Yeni ekranlar Filtre butonlarından Vazgeç var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | 
      | ELOGO6       | 123456 |   
