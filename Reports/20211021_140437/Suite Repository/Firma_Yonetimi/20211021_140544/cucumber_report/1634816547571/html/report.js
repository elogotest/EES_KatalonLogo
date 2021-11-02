$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Firma Yonetimi/Yetki Yonetimi/Rol ve Yetki Tanimlari/Yetki Tanimla.feature");
formatter.feature({
  "name": "Yetki tanimlama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Yetki tanimlama",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Firma Yönetimi seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menüden Yetki Yönetimi seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Sekmelerden Rol ve Yetki Tanımları seçilir",
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
  "name": "Tablodan \u003crol_Adi\u003e isimli veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Yetki Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Yetki olarak \u003cyetki\u003e seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
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
        "rol_Adi",
        "yetki"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "brk",
        "e-İrsaliye/Gelen Kutusu/İrsaliyeler/Excel"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Yetki tanimlama",
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
  "name": "Ana menüden Firma Yönetimi seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menüden Yetki Yönetimi seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.altMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sekmelerden Rol ve Yetki Tanımları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.sekmeSecilir(String)"
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
  "name": "Tablodan brk isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Yetki Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yetki olarak e-İrsaliye/Gelen Kutusu/İrsaliyeler/Excel seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.yetkiTanimlanir(String)"
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