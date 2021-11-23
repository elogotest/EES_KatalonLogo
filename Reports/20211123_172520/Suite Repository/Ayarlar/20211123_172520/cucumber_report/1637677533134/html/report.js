$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/Ayarlar/Gorsel Tasarimlar/Tasarim Araclari/Yukle e-Fatura.feature");
formatter.feature({
  "name": "Tasarim Araclari Yukle e-Fatura",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Tasarim Araclari Yukle e-Fatura",
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
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Yukle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan e-Fatura butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Tasarım Araçları Dosya Yükleme alanına \u003cdosya\u003e dizinindeki dosya yüklenir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda \u003cdosya_adi\u003e ünvanlı veri oluşturuldu mu",
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
        "dosya_adi",
        "dosya"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "FCDD449F-F6B4-4D5F-B436-1E81B80A7193.xslt-",
        "C:\\otomasyonupfiles\\Ayarlar\\FCDD449F-F6B4-4D5F-B436-1E81B80A7193.xslt"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tasarim Araclari Yukle e-Fatura",
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
  "name": "Butonlardan Yukle isimli butona tıklanır",
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
  "name": "Tasarım Araçları Dosya Yükleme alanına C:\\otomasyonupfiles\\Ayarlar\\FCDD449F-F6B4-4D5F-B436-1E81B80A7193.xslt dizinindeki dosya yüklenir",
  "keyword": "* "
});
formatter.match({
  "location": "yukle.tasaarimAraclariDosyaYukleme(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tabloda FCDD449F-F6B4-4D5F-B436-1E81B80A7193.xslt- ünvanlı veri oluşturuldu mu",
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