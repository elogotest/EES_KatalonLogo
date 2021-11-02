$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/e-Saklama/e-Defter/e-Defter Saklama/Goster.feature");
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
  "name": "Filtrelerden YIL filtresine 2019 dropdowndan degeri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "2019 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Mayıs 2019 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Kebir Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Defter Raporu Beratı adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "\u003cdosyaIsmi\u003e adlı klasör seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Göster isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni açılan sekmeye geçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni sekme başlığında BERAT (DEFTER RAPORU) var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ana sekmeye geçilir",
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
        "9250128841-201905-DR-000000.zip"
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
  "name": "Filtrelerden YIL filtresine 2019 dropdowndan degeri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreDropdownSec(String,String)"
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
  "name": "2019 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mayıs 2019 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kebir Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Defter Raporu Beratı adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9250128841-201905-DR-000000.zip adlı klasör seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Göster isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yeni açılan sekmeye geçilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.yeniAcilanSekmeyeGecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yeni sekme başlığında BERAT (DEFTER RAPORU) var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.yeniSekmedeVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana sekmeye geçilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.anaSekmeyeGecilir()"
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