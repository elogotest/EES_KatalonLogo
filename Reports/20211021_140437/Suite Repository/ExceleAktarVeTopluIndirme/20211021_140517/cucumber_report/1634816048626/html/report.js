$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/e-Irsaliye/Gelen Kutusu/Irsaliye Yanitlari/Toplu Indirme.feature");
formatter.feature({
  "name": "e-Irsaliye Gelen Kutusu Uygulama Yanıtları Toplu Indirme - UBL Secilenlerin indirilmesi",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Irsaliye Gelen Kutusu Uygulama Yanıtları Toplu Indirme - UBL Secilenlerin indirilmesi",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-İrsaliye seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü Gelen Kutusu başlığı altındaki İrsaliye Yanıtları seçilir",
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
  "name": "Butonlardan Toplu İndirme isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan UBL Seçilenleri İndir butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Gönder seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Toplu Veri İndirme içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Toplu İndirme isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Alt butonlardan UBL Tümünü İndir butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Gönder seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Toplu Veri İndirme içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Raporlar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menüden Toplu Veri İndirme seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Talep No filtresine Rapor No bilgisi yaz",
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
        ""
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "01.01.2020",
        "31.12.2020",
        "ELOGO TEST",
        "Muhasebe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Irsaliye Gelen Kutusu Uygulama Yanıtları Toplu Indirme - UBL Secilenlerin indirilmesi",
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
  "name": "Ana menüden e-İrsaliye seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü Gelen Kutusu başlığı altındaki İrsaliye Yanıtları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
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
  "name": "Tablodan ELOGO TEST isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
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
  "name": "Alt butonlardan UBL Seçilenleri İndir butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yönetim popupında Gönder seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Toplu Veri İndirme içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
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
  "name": "Alt butonlardan UBL Tümünü İndir butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.altButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yönetim popupında Gönder seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Toplu Veri İndirme içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
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
  "name": "Ana menüden Raporlar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menüden Toplu Veri İndirme seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.altMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Talep No filtresine Rapor No bilgisi yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreRaporNoYaz()"
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