Feature: e-Fatura Gelen Kutusu Uygulama Yanıtları Ekran Kontrol

  Scenario Outline: e-Fatura Gelen Kutusu Uygulama Yanıtları Ekran Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    #* Yeni ekran üst butonlardan Filtreler isimli butona tıklanır
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Üst butonlardan Filtreler var mı
    * Yeni ekranlar Üst butonlardan Kolonlar var mı
    * Yeni ekranlar Filtre başlıklarından Uygulama Yanıtı Numarası var mı
    * Yeni ekranlar Filtre başlıklarından Oluşturma Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Uygulama Yanıtı Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Zarf Numarası var mı
    * Yeni ekranlar Filtre başlıklarından ETTN var mı
    * Yeni ekranlar Filtre başlıklarından VKN/TCKN var mı
    * Yeni ekranlar Filtre başlıklarından Gönderici Unvan var mı
    * Yeni ekranlar Filtre başlıklarından Tüm Hesaplar var mı
    * Yeni ekranlar Filtre başlıklarından Atanan Departman var mı
    * Yeni ekranlar Filtre başlıklarından Saklama var mı
    * Yeni ekranlar Filtre başlıklarından Durum var mı
    * Yeni ekranlar Filtre başlıklarından Uygulama Yanıtı var mı
    * Yeni ekranlar Filtre başlıklarından İlişkili Fatura Numarası var mı
    * Yeni ekranlar Filtre başlıklarından İlişkili Fatura ETTN var mı
    * Yeni ekranlar Filtre başlıklarından Servis Durumu var mı
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
    #* Yeni ekran sayfa boyutu 25 olarak secilir
    #* Yeni ekran sayfa boyutu 50 olarak secilir
    #* Yeni ekran sayfa boyutu 100 olarak secilir
    #* Yeni ekran sayfa boyutu 250 olarak secilir
    #* Yeni ekran sayfa boyutu 10 olarak secilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | baslangic  |
      | ELOGO6       | 123456 | 26.05.2022 |
