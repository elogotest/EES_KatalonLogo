$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Arsiv/Erisim Kontrol.feature");
formatter.feature({
  "name": "e-Arsiv Erisim Kontrol",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Arsiv Erisim Kontrol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType\u003dxml\u0026ids\u003d2720727 isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003ctag1\u003e tagli ubl geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType\u003dhtml\u0026ids\u003d2720727 isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "E-Arşiv Raporu popupı açıldı mı",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id\u003d41324\u0026invoiceCreationType\u003d0\u0026userDocType\u003d1 isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003ctag\u003e tagli ubl geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id\u003d41657\u0026invoiceCreationType\u003d1\u0026userDocType\u003d1 isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003ctag\u003e tagli ubl geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dxml\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003ctag\u003e tagli ubl geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dpdf\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "PDF açıldı mı",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dhtml\u0026ids\u003d20353831\u0026showWithGF\u003dtrue\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni sekme başlığında e-Arşiv Fatura var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option\u003d0 isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi1\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dpdf\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dhtml\u0026ids\u003d20353831\u0026showWithGF\u003dtrue\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.step({
  "name": "Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option\u003d0 isimli linke gidilir",
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
        "tag",
        "tag1",
        "kullaniciAdi1"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "invoice",
        "earsiv:eArsivRaporu",
        "ELOGOGIB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Arsiv Erisim Kontrol",
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
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType\u003dxml\u0026ids\u003d2720727 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "earsiv:eArsivRaporu tagli ubl geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.ublGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType\u003dhtml\u0026ids\u003d2720727 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Arşiv Raporu popupı açıldı mı",
  "keyword": "* "
});
formatter.match({
  "location": "popup.PopupiAcildiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id\u003d41324\u0026invoiceCreationType\u003d0\u0026userDocType\u003d1 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invoice tagli ubl geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.ublGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id\u003d41657\u0026invoiceCreationType\u003d1\u0026userDocType\u003d1 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invoice tagli ubl geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.ublGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dxml\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invoice tagli ubl geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.ublGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dpdf\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PDF açıldı mı",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.pdfGorseliKontrolEdilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dhtml\u0026ids\u003d20353831\u0026showWithGF\u003dtrue\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yeni sekme başlığında e-Arşiv Fatura var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.yeniSekmedeVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option\u003d0 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
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
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
  "keyword": "* "
});
formatter.match({
  "location": "girisSayfasi.login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dpdf\u0026ids\u003d20353831\u0026showWithGF\u003dfalse\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.hataMesajiGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType\u003dhtml\u0026ids\u003d20353831\u0026showWithGF\u003dtrue\u0026created\u003d2021-10-31T21:00:00.000Z isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.hataMesajiGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option\u003d0 isimli linke gidilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.linkSecilir(String)"
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