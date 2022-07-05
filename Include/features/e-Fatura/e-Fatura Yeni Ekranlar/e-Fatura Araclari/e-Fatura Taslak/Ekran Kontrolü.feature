Feature: e-Fatura Taslak Ekran Kontrol

  Scenario Outline: e-Fatura Taslak Ekran Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    #* Yeni ekran üst butonlardan Filtreler isimli butona tıklanır
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Üst butonlardan Filtreler var mı
    * Yeni ekranlar Üst butonlardan Kolonlar var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Numarası var mı
    * Yeni ekranlar Filtre başlıklarından Oluşturma Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından ETTN var mı
    * Yeni ekranlar Filtre başlıklarından VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Alıcı Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Fatura Tipi var mı
    * Yeni ekranlar Filtre başlıklarından Tüm Hesaplar var mı
    * Yeni ekranlar Filtre başlıklarından Durum var mı
    * Yeni ekranlar Filtre başlıklarından Müşteri Bayi Kodu var mı
    * Yeni ekranlar Filtre başlıklarından Senaryo var mı
    * Yeni ekranlar Filtre başlıklarından Ödenecek Tutar var mı
    * Yeni ekranlar Filtre butonlarından Filtrele var mı
    * Yeni ekranlar Filtre butonlarından Temizle var mı
    * Yeni ekranlar Filtre butonlarından Vazgeç var mı
    #* Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    #* Enter'a bas
    #* Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekran sayfa numarasi 2 olarak secilir
    * Yeni ekran sayfa numarasi 3 olarak secilir
    * Yeni ekran sayfa numarasi 1 olarak secilir
    * Yeni ekranlar sonraki sayfa numarasına tıklanır
    * Yeni ekranlar önceki sayfa numarasına tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | 
      | ELOGO6       | 123456 | 
