$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/EES_Katalon-main/Include/features/e-Arsiv/e-Arsiv Hareketleri/e-Arsiv Raporlari/Rapor Olustur.feature");
formatter.feature({
  "name": "e-Arsiv Raporlari Rapor Olustur",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Arsiv Raporlari Rapor Olustur",
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
  "name": "Butonlardan Rapor Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı e-Arşiv raporları oluşturulacaktır. Devam etmek istiyormusunuz içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı İşleminiz başarıyla tamamlanmıştır. Raporun gönderilebilmesi için Raporlar ekranından ilgili raporlar seçilerek \"GİB\u0027e Gönder\" butonuna basılması gerekmektedir içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
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
  "name": "e-Arsiv Raporlari Rapor Olustur",
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
  "name": "Butonlardan Rapor Oluştur isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup mesajı e-Arşiv raporları oluşturulacaktır. Devam etmek istiyormusunuz içeriyor mu",
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
  "name": "Popup mesajı İşleminiz başarıyla tamamlanmıştır. Raporun gönderilebilmesi için Raporlar ekranından ilgili raporlar seçilerek \"GİB\u0027e Gönder\" butonuna basılması gerekmektedir içeriyor mu",
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