Feature: e-Arsiv Raporlari Tablodaki Verinin Gorseli

  Scenario Outline: e-Arsiv Raporlari Tablodaki Verinin Gorseli
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir
    * Filtrelerden Dönem Tarihi filtresine <filtreDegeri> dropdowndan degeri seçilir
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <veri_Adi> isimli verinin Faturalar adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan Domestic Customer TR 3 isimli verinin detayı tıklanır
    #* Seçilen verinin Rapor Numarası bilgisi 278991 ile eşleşiyor mu
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | veri_Adi |
      | LOGOGIB      | Aa802030 | 2022 Ocak    |   278991 |
