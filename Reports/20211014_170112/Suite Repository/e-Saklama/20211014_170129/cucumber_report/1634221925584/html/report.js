$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/e-Saklama/e-Defter/e-Defter Saklama/Sil.feature");
formatter.feature({
  "name": "e-Defter Saklama Goster",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Defter Saklama Goster",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Saklama seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Mart 2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Yevmiye Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Berat Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "\u003cdosyaIsmi\u003e adlı klasör seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Sil isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları silinecektir içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
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
        "dosyaIsmi"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "1234567806-202103-YB-000001.zip"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Defter Saklama Goster",
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
  "name": "Ana menüden e-Saklama seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
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
  "name": "2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mart 2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yevmiye Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Berat Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1234567806-202103-YB-000001.zip adlı klasör seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Sil isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları silinecektir içeriyor mu",
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