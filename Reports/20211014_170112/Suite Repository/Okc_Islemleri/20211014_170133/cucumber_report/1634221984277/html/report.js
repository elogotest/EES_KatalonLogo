$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/OKC Islemleri/OKC Mali Raporlari/Ekran Kontrolu.feature");
formatter.feature({
  "name": "OCK Mali Raporlari Buton Kontrolu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "OCK Mali Raporlari Buton Kontrolu",
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
  "name": "Tablodan 179 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan 179 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Oluşturma Tarihi var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Dönem var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Rapor Türü var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında ETTN var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Bölüm No var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Satış Tutarı var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Durum var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarında Filtreleri Kaydet var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarında Listele var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarında Temizle var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Excel var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan XML var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Rapor var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan İzleme Kayıtları var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Excel isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan Excel \u0027e Aktar var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan Tümünü Excel \u0027e Aktar var mı",
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
        "filtreDegeri",
        "filtreDegeri2"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "01.01.2021",
        "11.01.2021"
      ]
    }
  ]
});
formatter.scenario({
  "name": "OCK Mali Raporlari Buton Kontrolu",
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
  "name": "Tablodan 179 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiVerininDetayi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodan 179 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiVerininDetayi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Oluşturma Tarihi var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Dönem var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Rapor Türü var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında ETTN var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Bölüm No var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Satış Tutarı var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Durum var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre butonlarında Filtreleri Kaydet var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre butonlarında Listele var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre butonlarında Temizle var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Excel var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan XML var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Rapor var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan İzleme Kayıtları var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
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
  "name": "Alt butonlardan Excel \u0027e Aktar var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan Tümünü Excel \u0027e Aktar var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonVarMi(String)"
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