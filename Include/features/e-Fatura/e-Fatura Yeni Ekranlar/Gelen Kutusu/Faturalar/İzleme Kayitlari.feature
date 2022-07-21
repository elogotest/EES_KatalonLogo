Feature: e-Fatura Gelen Kutusu Faturalar İzleme Kayitlari

  Scenario Outline: e-Fatura Gelen Kutusu Faturalar İzleme Kayitlari
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Faturalar seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden ETTN filtresine <ettn> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlarda Tablodaki Menu butonuna tıklanır
    * Menü altındaki seçeneklerden İzleme Kayıtları isimli butona tıklanır
    * Yeni açılan sekmeye geçiş yapılır
    * Yeni ekran filtre butonlarından Kapat isimli butona tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | ettn                                 | baslangic  | e-Posta              |
      | ELOGO6       | 123456 | 7ad2512b-451d-49be-9ecf-e18b204bbd23 | 27.06.2022 | ali.kara@logo.com.tr |
