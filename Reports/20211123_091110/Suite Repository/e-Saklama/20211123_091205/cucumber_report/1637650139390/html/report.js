$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Saklama/e-Defter/e-Defter Saklama/Indir.feature");
formatter.feature({
  "name": "e-Defter Saklama Indir",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Defter Saklama Indir",
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
  "name": "2020 adlı yıl seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "2020 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ocak 2020 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Yevmiye Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "\u003cdosyaIsmi\u003e adlı klasör seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan İndir isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları indirilecek içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ön eki eDefter olan dosya indirildi mi",
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
        "ELOGOGIB",
        "123456",
        "6090408038-202001-Y-000000.zip"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Defter Saklama Indir",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
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
  "name": "2020 adlı yıl seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliYılAcilir(String)"
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
  "name": "2020 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ocak 2020 adlı klasör açılır",
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
  "name": "6090408038-202001-Y-000000.zip adlı klasör seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan İndir isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları indirilecek içeriyor mu",
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
  "name": "Ön eki eDefter olan dosya indirildi mi",
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