$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Arsiv/e-Arsiv Hareketleri/e-Arsiv Raporlari/Yeniden Olustur.feature");
formatter.feature({
  "name": "e-Arsiv Raporlari Yeniden Olustur",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Arsiv Raporlari Yeniden Olustur",
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
  "name": "Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Dönem Tarihi filtresine \u003cfiltreDegeri\u003e dropdowndan degeri seçilir",
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
  "name": "Butonlardan Yeniden Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Seçtiğiniz kayıtlardan sadece uygun statüdeki raporlar yeniden oluşturulacaktır. Devam etmek istiyor musunuz? içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda Rapor Oluşturulmak İçin Kuyrukta veya Rapor Yeniden Oluşturulacak veya Rapor Oluşturuldu verilerinden biri oluşturuldu mu",
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
        "veri_Adi"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "2021 Temmuz",
        "2712999"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Arsiv Raporlari Yeniden Olustur",
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
  "name": "Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Raporları seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Dönem Tarihi filtresine 2021 Temmuz dropdowndan degeri seçilir",
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
  "name": "Tablodan 2712999 isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Yeniden Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı Seçtiğiniz kayıtlardan sadece uygun statüdeki raporlar yeniden oluşturulacaktır. Devam etmek istiyor musunuz? içeriyor mu",
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
  "name": "Tabloda Rapor Oluşturulmak İçin Kuyrukta veya Rapor Yeniden Oluşturulacak veya Rapor Oluşturuldu verilerinden biri oluşturuldu mu",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeyaUnvanliVeriOlusturulduMu(String,String,String)"
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