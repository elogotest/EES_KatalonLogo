$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Ayarlar/Araclar/Adres Defteri/Ekle.feature");
formatter.feature({
  "name": "Adres Defteri Ekle butonu Kontrolu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Adres Defteri Ekle butonu Kontrolu",
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
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına \u003cvkntckn\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Unvan alanına Test Kurum 6 yazılı mı",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İl textboxına \u003cil\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İlçe textboxına \u003cilce\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına \u003cvkntckn2\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Unvan alanına  yazılı mı",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İl textboxına \u003cil\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İlçe textboxına \u003cilce\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri butonlarından Vazgeç butonuna tıklanır",
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
        "kisaltma",
        "vkntckn",
        "vkntckn2",
        "unvan",
        "il",
        "ilce",
        "ulke_deger",
        "e-Fatura_etiket"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "VirgosolFaturaSunum33",
        "1234567806",
        "1234567906",
        "VirgosolOtomasyon",
        "İstanbul",
        "Kartal",
        "Türkiye",
        "urn:mail:defaultpk@diyalogo.com.tr"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adres Defteri Ekle butonu Kontrolu",
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
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.baslikliPopupGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 1234567806 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Unvan alanına Test Kurum 6 yazılı mı",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.unvanYazilimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İl textboxına İstanbul yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İlçe textboxına Kartal yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 1234567906 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Unvan alanına  yazılı mı",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.unvanYazilimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İl textboxına İstanbul yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İlçe textboxına Kartal yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri butonlarından Vazgeç butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adresDefteriButonlarindanTiklanir(String)"
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