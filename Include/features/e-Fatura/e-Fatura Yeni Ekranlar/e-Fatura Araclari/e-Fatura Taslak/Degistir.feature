Feature: e-Fatura Taslak Degistir

  Scenario Outline: e-Fatura Taslak Degistir
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
    * Yeni ekranlar Tablodaki Menu butonuna tıklanır
  	* Yeni ekranlar Degistir butonuna tıklanır
  	* Yeni ekran filtre butonlarından Kaydet isimli butona tıklanır
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | veri_Adi                   | baslangic  | numara           |
      | ELOGO6       | 123456 | Elogo Otomasyon (pb-stage) | 05.07.2022 | SHV2022683687057 |
