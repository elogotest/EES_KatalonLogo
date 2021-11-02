$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Firma Yonetimi/Yetki Yonetimi/Departman Tanimlari/Kural Tanimla/Kural Ekle.feature");
formatter.feature({
  "name": "Kural tanimlama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Kural tanimlama",
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
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan \u003cdepartman_Adi\u003e isimli veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Kural Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Kural olarak \u003cbelge_Turu\u003e,\u003cyon\u003e,\u003cbirinci_Parametre_Secenekleri\u003e,\u003cbirinci_Parametre_Degeri\u003e,\u003cIkinci_Parametre_Secenekleri\u003e,\u003cIkinci_Parametre_Degeri\u003e,\u003cMail_Gonderilsin_Mi\u003e girilir",
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
        "departman_Adi",
        "belge_Turu",
        "yon",
        "birinci_Parametre_Secenekleri",
        "birinci_Parametre_Degeri",
        "Ikinci_Parametre_Secenekleri",
        "Ikinci_Parametre_Degeri",
        "Mail_Gonderilsin_Mi"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "VirgosolDepartman",
        "e-Fatura",
        "Giden",
        "Tümü için Yetkili",
        "",
        "",
        "",
        "Mail Gönderilsin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kural tanimlama",
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
  "name": "Tablodan VirgosolDepartman isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Kural Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kural olarak e-Fatura,Giden,Tümü için Yetkili,,,,Mail Gönderilsin girilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.kuralTanimlama(String,String,String,String,String,String,String)"
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