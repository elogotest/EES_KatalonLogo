$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/OKC Islemleri/OKC Mali Raporlari/Excele Aktar.feature");
formatter.feature({
  "name": "OCK Mali Raporlari Excele Aktar",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "OCK Mali Raporlari Excele Aktar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden ÖKC İşlemleri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menüden ÖKC Mali Raporlar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Dönem filtresine 2021 Ocak dropdowndan degeri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine \u003cfiltreDegeri\u003e baslangic degerini yaz",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine \u003cfiltreDegeri2\u003e bitis degerini yaz",
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
  "name": "Tablodan \u003cveri_Adi\u003e isimli veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Excel isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan Excel\u0027e Aktar butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Ön eki okcRaporlari olan dosya indirildi mi",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Excel isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan Tümünü Excel\u0027e Aktar butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Ön eki okcRaporlari olan dosya indirildi mi",
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
        "veri_Adi",
        "filtreDegeri",
        "filtreDegeri2"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "179",
        "01.01.2021",
        "11.01.2021"
      ]
    }
  ]
});
formatter.scenario({
  "name": "OCK Mali Raporlari Excele Aktar",
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
  "name": "Ana menüden ÖKC İşlemleri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menüden ÖKC Mali Raporlar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.altMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Dönem filtresine 2021 Ocak dropdowndan degeri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreDropdownSec(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 01.01.2021 baslangic degerini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreBaslangicYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 11.01.2021 bitis degerini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreBitisYaz(String,String)"
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
  "name": "Tablodan 179 isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Excel isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan Excel\u0027e Aktar butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ön eki okcRaporlari olan dosya indirildi mi",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.dosyaIndirildiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Excel isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan Tümünü Excel\u0027e Aktar butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ön eki okcRaporlari olan dosya indirildi mi",
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