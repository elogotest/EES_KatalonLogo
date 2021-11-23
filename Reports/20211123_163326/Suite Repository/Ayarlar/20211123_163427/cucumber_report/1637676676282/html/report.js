$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/Ayarlar/Araclar/Adres Defteri/Degistir.feature");
formatter.feature({
  "name": "Adres Defteri Degistir butonu Kontrolu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Adres Defteri Degistir Butonu Kontrolu",
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
  "name": "Filtrelerden Kısaltma filtresine \u003ckisaltma\u003e textini yaz",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan \u003ckisaltma\u003e isimli veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Değiştir isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defterindeki Adres Değiştir başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına \u003cvkntckn\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Unvan alanına VirgosolOtomasyon402115 yazılı mı",
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
        "il",
        "ilce"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "VirgosolArsivDeneme",
        "5422405266",
        "1234567906",
        "İstanbul",
        "Kartal"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adres Defteri Degistir Butonu Kontrolu",
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
  "name": "Filtrelerden Kısaltma filtresine VirgosolArsivDeneme textini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreTexboxinaYaz(String,String)"
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
  "name": "Tablodan VirgosolArsivDeneme isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Değiştir isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defterindeki Adres Değiştir başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adresDegistirPopupGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 5422405266 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Unvan alanına VirgosolOtomasyon402115 yazılı mı",
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