Feature: e-Fatura Giden Kutusu Faturalar Sertifika

  Scenario Outline: e-Fatura Giden Kutusu Faturalar Sertifika
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlarda Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden İptal Et isimli butona tıklanır
    * İptal Tipi GIB Portal'den İptal Edildi olarak secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup butonlarından Tamam secilir
   	* Yeni ekranlar popup mesajı Seçili belge iptal içeriyor mu
   	* Yeni ekranlarda Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden İptal Geri Al isimli butona tıklanır
    * Yeni ekranlar popup butonlarından Tamam secilir
    * Yeni ekranlar popup mesajı İptal Edildi durumunda içeriyor mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 0BEDD008-6F68-467E-A797-7CE4AC0AA240 | 27.06.2022 | ali.kara@logo.com.tr |
