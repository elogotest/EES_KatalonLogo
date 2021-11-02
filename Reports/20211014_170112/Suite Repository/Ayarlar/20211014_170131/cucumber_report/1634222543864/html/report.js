$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Ayarlar/Gorsel Tasarimlar/Tasarim Araclari/Tasarla e-Fatura.feature");
formatter.feature({
  "name": "Tasarim Araclari Tasarla e-Fatura",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Tasarim Araclari Tasarla e-Fatura",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Tasarla isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan e-Fatura butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Dinamik başlıklarda \u003cbaslik\u003e var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Tasarım açıklaması alanına \u003caciklama\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Oluşturulan Fatura başlığında e-FATURA var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Kaydet isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Tasarım ön değer tasarım olarak tanımlansın mı? içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda \u003caciklama\u003e ünvanlı veri oluşturuldu mu",
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
        "baslik",
        "aciklama"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "E-FATURA TASARIM AÇIKLAMASI",
        "VirgosolOtomasyon"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tasarim Araclari Tasarla e-Fatura",
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
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Tasarla isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan e-Fatura butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dinamik başlıklarda E-FATURA TASARIM AÇIKLAMASI var mı",
  "keyword": "* "
});
formatter.match({
  "location": "ayarlarim.dinamikBasliklardaVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tasarım açıklaması alanına VirgosolOtomasyon girilir",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.tasarimAciklamasiGirilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Oluşturulan Fatura başlığında e-FATURA var mı",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.faturaBaslıgıDogruMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Kaydet isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Tasarım ön değer tasarım olarak tanımlansın mı? içeriyor mu",
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
  "name": "Tabloda VirgosolOtomasyon ünvanlı veri oluşturuldu mu",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaUnvanliVeriOlusturulduMu(String)"
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