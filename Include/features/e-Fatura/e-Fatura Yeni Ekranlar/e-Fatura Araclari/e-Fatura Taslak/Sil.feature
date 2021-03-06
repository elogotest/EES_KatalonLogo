Feature: e-Fatura Taslak Sil

  Scenario Outline: e-Fatura Taslak Sil
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
    * Yeni ekranlar Sil butonuna tıklanır
    * Yeni ekranlar acılan popup Seçilen fatura silinecektir, devam etmek istiyor musunuz ? içeriyor mu
    * Yeni ekranlar yönetim popup butonlarından iptal seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | veri_Adi                   | baslangic  | numara           |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | 05.07.2022 | SSX2022717761069 |
