$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/Zarflar/Giden Zarflar/Ekran Kontrolu.feature");
formatter.feature({
  "name": "Giden Zarflar Buton Kontrolu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Giden Zarflar Buton Kontrolu",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Zarflar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menüden Giden Zarflar seçilir",
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
  "name": "Tablodan ELOGO2 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan ELOGO2 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Zarf ID var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Durum Kodu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Oluşturma Tarihi var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Kullanıcı Kodu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Alıcı VKN var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Alıcı Ünvan var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Belge Türü var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Tüm Hesaplar var mı",
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
  "name": "Butonlardan Toplu İndirme var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan İndir var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan GİB var mı",
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
  "name": "Alt butonlardan Seçilenleri Excel \u0027e Aktar var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan Tümünü Excel \u0027e Aktar var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Toplu İndirme isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan UBL Seçilenleri İndir var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan UBL Tümünü İndir var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan İndir isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan İndir var mı",
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
        "01.01.2020",
        "31.01.2020"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Giden Zarflar Buton Kontrolu",
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
  "name": "Ana menüden Zarflar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menüden Giden Zarflar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.altMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 01.01.2020 baslangic degerini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreBaslangicYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 31.01.2020 bitis degerini yaz",
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
  "name": "Tablodan ELOGO2 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiVerininDetayi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodan ELOGO2 isimli verinin detayı tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiVerininDetayi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Zarf ID var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Durum Kodu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
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
  "name": "Filtre alanlarında Kullanıcı Kodu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Alıcı VKN var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Alıcı Ünvan var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Belge Türü var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Tüm Hesaplar var mı",
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
  "name": "Butonlardan Toplu İndirme var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonVarMi(String)"
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
  "name": "Butonlardan GİB var mı",
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
  "name": "Alt butonlardan Seçilenleri Excel \u0027e Aktar var mı",
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
  "name": "Butonlardan Toplu İndirme isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan UBL Seçilenleri İndir var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt butonlardan UBL Tümünü İndir var mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonVarMi(String)"
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
  "name": "Alt butonlardan İndir var mı",
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