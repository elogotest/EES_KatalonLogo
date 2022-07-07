Feature: e-Fatura Taslak Excel

  Scenario Outline: e-Fatura Taslak Excel
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Yeni ekranlar Filtreler butonuna tıklanır
    * Yeni ekranlarda filtrelerden Oluşturma Tarihi filtresine <baslangic> textini yaz
    * Enter'a bas
    * Yeni ekranlarda filtrelerden Fatura Numarası filtresine <numara> textini yaz
    * Yeni ekran filtre butonlarından Filtrele isimli butona tıklanır
    * Tabloda veri var mı kontrol edilir
    * Yeni ekranlar tablodaki veri seçilir
    # İd çalışması sonrası excel değil sil olarak düzenlenecek
    * Yeni ekranlar Excel butonuna tıklanır
    * Excel alt butonlarından Excele Akatar'a tıklanır
    #* Yeni ekranlar acılan popup fatura için Excel çıktısı oluşturulacaktır, içeriyor mu
    #* Yeni ekranlar e-Posta bilgisi <e-Posta> olarak girilir
    * Yeni ekranlar yönetim popup butonlarından Tamam seçilir
    * Ön eki UserInvoice olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | veri_Adi                   | baslangic  | numara           | e-Posta              |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | 05.07.2022 | SSX2022717761069 | ali.kara@logo.com.tr |
