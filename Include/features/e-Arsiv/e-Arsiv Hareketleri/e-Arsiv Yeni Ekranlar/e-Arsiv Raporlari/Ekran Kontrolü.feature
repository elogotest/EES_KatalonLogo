Feature: e-Arsiv Raporları Ekran ve Filtre Kontrolü

  Scenario Outline: e-Arsiv Raporları Ekran ve Filtre Kontrolü
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlar Üst butonlardan Filtreler var mı
    * Yeni ekranlar Üst butonlardan Kolonlar var mı
    * Yeni ekranlar Filtre başlıklarından Rapor Numarası var mı
    * Yeni ekranlar Filtre başlıklarından ETTN var mı
    * Yeni ekranlar Filtre başlıklarından Rapor Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından GİB'e Gönderim Tarihi var mı
    * Yeni ekranlar Filtre başlıklarından Durum var mı
    * Yeni ekranlar Filtre başlıklarından Saklama var mı
    * Yeni ekranlar Filtre butonlarından Filtrele var mı
    * Yeni ekranlar Filtre butonlarından Temizle var mı
    * Yeni ekranlar Filtre butonlarından Vazgeç var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  |
      | ELOGO6       | 123456 |
