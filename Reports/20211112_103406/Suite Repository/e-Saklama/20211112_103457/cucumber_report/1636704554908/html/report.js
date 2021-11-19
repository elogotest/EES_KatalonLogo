$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Saklama/e-Defter/e-Defter Saklama/Sil.feature");
formatter.feature({
  "name": "e-Defter Saklama Goster",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Defter Saklama Goster",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı \u003ckullaniciAdi\u003e ve Şifre \u003csifre\u003e olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Saklama seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Mart 2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Yevmiye Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "Berat Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.step({
  "name": "\u003cdosyaIsmi\u003e adlı klasör seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Sil isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları silinecektir içeriyor mu",
  "keyword": "* "
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
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
        "sifre",
        "dosyaIsmi"
      ]
    },
    {
      "cells": [
        "ELOGO6",
        "123456",
        "1234567806-202103-YB-000001.zip"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Defter Saklama Goster",
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
  "name": "Ana menüden e-Saklama seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
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
  "name": "2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepErrorException: Call Test Case \u0027Test Cases/Tablo/KlasorAcilir\u0027 failed because of error(s)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:66)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat tablo.tablo.adliKlasorAcilir(tablo.groovy:166)\r\n\tat ✽.2021 adlı klasör açılır(C:/Users/DELL/Documents/GitHub/EES_KatalonLogo/Include/features/e-Saklama/e-Defter/e-Defter Saklama/Sil.feature:8)\r\nCaused by: org.codehaus.groovy.runtime.InvokerInvocationException: Assertion failed: \n\nassert a\n       |\n       false\n\r\n\tat Method.invokeMethod(Method.groovy)\r\n\tat com.kms.katalon.core.main.CustomKeywordDelegatingMetaClass.invokeStaticMethod(CustomKeywordDelegatingMetaClass.java:50)\r\n\tat KlasorAcilir.run(KlasorAcilir:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:369)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:331)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:248)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:138)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat tablo.tablo.adliKlasorAcilir(tablo.groovy:166)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.Runtime$1.run(Runtime.java:84)\r\n\tat cucumber.runtime.Runtime$SameThreadExecutorService.execute(Runtime.java:220)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:81)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:106)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:73)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:246)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Sil.run(Sil:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:369)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:331)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:248)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:191)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:140)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:89)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:181)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1636702497904.run(TempTestSuite1636702497904.groovy:39)\r\nCaused by: Assertion failed: \n\nassert a\n       |\n       false\n\r\n\tat Method.TextDegerineEsitElementinAltindakineTikla(Method.groovy:262)\r\n\t... 56 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Mart 2021 adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yevmiye Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Berat Dosyaları adlı klasör açılır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorAcilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "1234567806-202103-YB-000001.zip adlı klasör seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.adliKlasorSecilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Butonlardan Sil isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Popup mesajı Seçili e-Defter dosyaları silinecektir içeriyor mu",
  "keyword": "* "
});
formatter.match({
  "location": "popup.popupIceriyorMu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yönetim popupında Evet seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yönetim popupında Tamam seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "popup.yonetimPopupindanSecilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "kullaniciIslemleri.kullaniciIslemi(String)"
});
formatter.result({
  "status": "skipped"
});
});