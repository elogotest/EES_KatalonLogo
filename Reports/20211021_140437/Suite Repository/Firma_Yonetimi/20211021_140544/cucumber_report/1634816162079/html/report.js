$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Firma Yonetimi/Yetki Yonetimi/Departman Tanimlari/Departman Ekle.feature");
formatter.feature({
  "name": "Departman Eklenir",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Departman Eklenir",
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
  "name": "Sekmelerden Departman Tanımları seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Departman Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Departman bilgileri \u003cdepartman\u003e, \u003caciklama\u003e, \u003cposta\u003e, \u003catayabilirMi\u003e olarak girilir",
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
        "departman",
        "aciklama",
        "posta",
        "atayabilirMi"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "VirgosolDepartman",
        "Otomasyon",
        "otomasyon@virgosol.com",
        "Atayamaz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Departman Eklenir",
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
  "name": "Sekmelerden Departman Tanımları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.sekmeSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Departman Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Departman bilgileri VirgosolDepartman, Otomasyon, otomasyon@virgosol.com, Atayamaz olarak girilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.departmanBilgisiGirilir(String,String,String,String)"
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