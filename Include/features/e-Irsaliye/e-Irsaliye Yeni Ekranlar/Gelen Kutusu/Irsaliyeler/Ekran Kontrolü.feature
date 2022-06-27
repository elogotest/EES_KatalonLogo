Feature: Gelen Kutusu Irsaliyeler Ekran Kontrolü

  Scenario Outline: Gelen Kutusu Irsaliyeler Ekran Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü Gelen Kutusu başlığı altındaki İrsaliyeler seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Üst butonlardan Filtreler var mı
    * Yeni ekranlar Üst butonlardan Kolonlar var mı
    * Yeni ekranlar Filtre başlıklarından İrsaliye Numarası var mı
    * Yeni ekranlar Filtre başlıklarından Oluşturma Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Sevk Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından İrsaliye Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Toplam Tutar var mı
    * Yeni ekranlar Filtre başlıklarından Zarf Numarası var mı
    * Yeni ekranlar Filtre başlıklarından ETTN var mı
    * Yeni ekranlar Filtre başlıklarından Gönderici VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Gönderici Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Müşteri Bayi Kodu var mı
    * Yeni ekranlar Filtre başlıklarından Tüm Hesaplar var mı
    * Yeni ekranlar Filtre başlıklarından Belge Statüsü var mı
    * Yeni ekranlar Filtre başlıklarından Atanan Departman var mı
    * Yeni ekranlar Filtre başlıklarından Para Birimi var mı
    * Yeni ekranlar Filtre başlıklarından Durum var mı
    * Yeni ekranlar Filtre başlıklarından İrsaliye Yanıtı var mı
    * Yeni ekranlar Filtre başlıklarından Senaryo var mı
    * Yeni ekranlar Filtre başlıklarından İrsaliye Tipi var mı
    * Yeni ekranlar Filtre başlıklarından Servis Durumu var mı
    * Yeni ekranlar Filtre başlıklarından Saklama var mı
    * Yeni ekranlar Filtre başlıklarından Yazdırma Durumu var mı
    * Yeni ekranlar Filtre butonlarından Filtrele var mı
    * Yeni ekranlar Filtre butonlarından Temizle var mı
    * Yeni ekranlar Filtre butonlarından Vazgeç var mı
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekran sayfa numarasi 2 olarak secilir
    * Yeni ekran sayfa numarasi 3 olarak secilir
    * Yeni ekran sayfa numarasi 1 olarak secilir
    * Yeni ekranlar sonraki sayfa numarasına tıklanır
    * Yeni ekranlar önceki sayfa numarasına tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | baslangic  |
      | ELOGO6       | 123456 | 20.06.2022 |
