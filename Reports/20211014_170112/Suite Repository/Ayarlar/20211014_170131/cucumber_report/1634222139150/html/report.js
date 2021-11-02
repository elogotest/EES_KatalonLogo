$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Ayarlar/Gorsel Tasarimlar/Hazir Tasarim Araci/e-Fatura/Buton Kontrolu.feature");
formatter.feature({
  "name": "e-Fatura Hazir Tasarim Araci On Deger Ata",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Fatura Hazir Tasarim Araci On Deger Ata",
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
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Ön Değer Ata adlı butonu var mı",
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
        "sifre"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Fatura Hazir Tasarim Araci On Deger Ata",
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
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mavi Temalı e-Fatura Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Fatura Eksi Tutarlı Tasarım Şablonu adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
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