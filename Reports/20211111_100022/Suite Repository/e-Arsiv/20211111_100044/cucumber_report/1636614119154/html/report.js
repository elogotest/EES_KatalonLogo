$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Arsiv/e-Arsiv Araclari/e-Arsiv Dosya Islemleri/Buton Kontrolu.feature");
formatter.feature({
  "name": "e-Arsiv Dosya Islemleri Buton Kontrolu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Arsiv Dosya Islemleri Buton Kontrolu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Arşiv seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Arşiv Araçları başlığı altındaki e-Arşiv Dosya İşlemleri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan İndir var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından 2 numaralı sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından 3 numaralı sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından sonraki sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından önceki sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından ilk sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa butonlarından son sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Sayfa boyutu 50 olarak seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
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
  "name": "e-Arsiv Dosya Islemleri Buton Kontrolu",
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
  "name": "Ana menüden e-Arşiv seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Arşiv Araçları başlığı altındaki e-Arşiv Dosya İşlemleri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan İndir var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından 2 numaralı sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.numaraliSayfayaGec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından 3 numaralı sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.numaraliSayfayaGec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından sonraki sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.sonrakiSayfayaGec()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından önceki sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.oncekiSayfayaGec()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından ilk sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.ilkSayfayaGec()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa butonlarından son sayfa butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.sonSayfayaGec()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sayfa boyutu 50 olarak seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.sayfaBoyutu(String)"
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