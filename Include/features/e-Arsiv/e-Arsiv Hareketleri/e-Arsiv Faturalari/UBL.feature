Feature: e-Arsiv Faturasi UBLi

  Scenario Outline: e-Arsiv Faturasi UBLi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan UBL isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * <tag> tagli ubl geldi mi
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                  | tag     |
      | LOGOGIB      | Aa802030 |   02.02.2022 |    31.07.2020 | eLogo Otomasyon (pb-test) | invoice |
