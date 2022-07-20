Feature: e-Arsiv Raporları İzleme Kayitlari

  Scenario Outline: e-Arsiv Raporları İzleme Kayitlari
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Rapor Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden Rapor Numarası filtresine <raporNo> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar için Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden İzleme Kayıtları isimli butona tıklanır
    * Yeni açılan sekmeye geçiş yapılır
    * Yeni ekran filtre butonlarından Kapat isimli butona tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | raporNo | baslangic  | 
      | ELOGO6       | 123456 | 2744176 | 01.05.2022 | 