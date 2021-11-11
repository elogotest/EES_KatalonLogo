$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/Regresyon/e-Mustahsil Makbuz/TCKN-e-Mustahsil Makbuz.feature");
formatter.feature({
  "name": "TCKNo ile e-Mustahsil Makbuzu Olusturmasi ve Excele aktarilmasi",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TCKNo ile e-Mustahsil Makbuzu Olusturmasi ve Excele aktarilmasi",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzu Oluşturma seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodaki tüm veriler silinir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alıcı adı alanına \u003calici_Adi\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ekle butonuna basılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında Mal/Hizmet başlığına \u003cmalzeme_adi\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında Miktarı başlığına \u003cmiktari\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında Birim Fiyat başlığına \u003cbirimFiyat\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında G.V Stopaj Oranı% başlığına \u003cstopaj_Orani\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Notlar alanına \u003cnot\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ettn bilgisi kayıt edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kaydet butonu seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda Ettn bilgisi kaydedilen veri oluşturuldu mu",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan Ettn bilgisi kaydedilen veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Numara Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Devam etmek istiyor musunuz içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı oluşmuştur içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan Ettn bilgisi kaydedilen veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Gönder isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Devam etmek istiyor musunuz içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzları seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Ettn filtresine Ettn bilgisi yaz",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda yeni oluşturulan emm verisi başarılı mı",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kullaniciAdi",
        "sifre",
        "alici_Adi",
        "malzeme_adi",
        "miktari",
        "birimFiyat",
        "stopaj_Orani",
        "not",
        "adı_soyadı"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "UC0038",
        "Otomasyon",
        "400",
        "100",
        "10",
        "Otomasyon Not",
        "VirgosolOtomasyonTEST"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TCKNo ile e-Mustahsil Makbuzu Olusturmasi ve Excele aktarilmasi",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGO6 ve Şifre 123456 olarak giriş yapılır",
  "keyword": "* "
});
formatter.match({
  "location": "girisSayfasi.login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzu Oluşturma seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodaki tüm veriler silinir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.olusturmaTarihi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.gorselTasarimSayfasininBasligindaVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alıcı adı alanına UC0038 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.aliciSec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ekle butonuna basılır",
  "keyword": "* "
});
formatter.match({
  "location": "genel.ekleButonunaBasilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün ekleme alanında Mal/Hizmet başlığına Otomasyon girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün ekleme alanında Miktarı başlığına 400 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün ekleme alanında Birim Fiyat başlığına 100 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün ekleme alanında G.V Stopaj Oranı% başlığına 10 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notlar alanına Otomasyon Not girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.notGirilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ettn bilgisi kayıt edilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.EttnBilgisiKayitEdilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kaydet butonu seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.kaydetSecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tabloda Ettn bilgisi kaydedilen veri oluşturuldu mu",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaEttnliVeriOlusturulduMu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodan Ettn bilgisi kaydedilen veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanEttnliVeriSecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Numara Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Devam etmek istiyor musunuz içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı oluşmuştur içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodan Ettn bilgisi kaydedilen veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanEttnliVeriSecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Gönder isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Devam etmek istiyor musunuz içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Ettn filtresine Ettn bilgisi yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreEttnYaz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreButonSec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeriVarMi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tabloda yeni oluşturulan emm verisi başarılı mı",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeriBasariliMiEmm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "kullaniciIslemleri.kullaniciIslemi(String)"
});
formatter.result({
  "status": "passed"
});
});