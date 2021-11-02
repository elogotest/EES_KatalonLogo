$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Ayarlar/Gorsel Tasarimlar/Hazir Tasarim Araci/e-Fatura/Tasarimi Indir.feature");
formatter.feature({
  "name": "e-Fatura Hazir Tasarim Araci Tasarimi Indir",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Fatura Hazir Tasarim Araci Tasarimi Indir",
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
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Sekmelerden e-Fatura seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003csablon\u003e adlı şablonun Tasarımı İndir adlı butonuna tıkla",
  "keyword": "* "
});
formatter.step({
  "name": "Ön eki \u003csablon\u003e olan dosya indirildi mi",
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
        "sablon"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Fatura Hazir Tasarim Araci Tasarimi Indir",
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
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sekmelerden e-Fatura seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.sekmeSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Tasarımı İndir adlı butonuna tıkla",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonunaTikla(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ön eki Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 olan dosya indirildi mi",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.dosyaIndirildiMi(String)"
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