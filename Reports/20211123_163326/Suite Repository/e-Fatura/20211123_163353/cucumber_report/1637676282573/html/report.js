$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Fatura/Giden Kutusu/Uygulama Yanıtlari/Izleme Kayitlari.feature");
formatter.feature({
  "name": "Uygulama Yanitinin Gecmisi",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Uygulama Yanitinin Gecmisi",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Fatura seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü Giden Kutusu başlığı altındaki Uygulama Yanıtları seçilir",
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
  "name": "Butonlardan İzleme Kayıtları isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni açılan sekmeye geçilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003cbaslik\u003e baslikli gecmis sayfasi geldi mi",
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
        "filtreDegeri",
        "filtreDegeri2",
        "veri_Adi",
        "baslik"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "01.12.2020",
        "31.12.2020",
        "1234567806",
        "Uygulama Yanıtları İzleme Kayıtları"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Uygulama Yanitinin Gecmisi",
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
  "name": "Ana menüden e-Fatura seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü Giden Kutusu başlığı altındaki Uygulama Yanıtları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 01.12.2020 baslangic degerini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreBaslangicYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Oluşturma Tarihi filtresine 31.12.2020 bitis degerini yaz",
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
  "name": "Tablodan 1234567806 isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan İzleme Kayıtları isimli butona tıklanır",
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
  "name": "Uygulama Yanıtları İzleme Kayıtları baslikli gecmis sayfasi geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.gecmisGeldiMi(String)"
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