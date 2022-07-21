Feature: e-Fatura Gelen Uygulama Yanıtları Faturaya Git

  Scenario Outline: e-Fatura Gelen Uygulama Yanıtları Faturaya Git
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden Uygulama Yanıtı Numarası filtresine <raporNo> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    * Yeni ekranlar Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden Faturaya Git isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * Tabloda veri var mı kontrol edilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | raporNo                              | baslangic  |
      | ELOGO6       | 123456 | f9edc114-7d7e-48d5-af66-be0f3998403d | 21.07.2022 |
