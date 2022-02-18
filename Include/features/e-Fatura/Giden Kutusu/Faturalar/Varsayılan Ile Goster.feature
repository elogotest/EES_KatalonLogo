Feature: Faturanin Varsayılan Ile Gosterilmesi

  Scenario Outline: Faturanin Varsayılan Ile Gosterilmesi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Faturalar seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Elogo asistan kapatılır
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Varsayılan İle Göster isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-FATURA var mı kontrol edilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | filtreDegeri | filtreDegeri2 | veri_Adi                  |
      | LOGOGIB      | Aa802030 |   01.02.2022 |    01.02.2022 | eLogo Otomasyon (pb-test) |
