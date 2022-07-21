package yeniButonlar
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class Butonlar {
	@When("Yeni ekranlar Filtre butonlarından (.*) var mı")
	def filtreButonuVarMi(String buton) {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/FiltreButonuVarMi'), ["Buton":buton] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekran filtre butonlarından (.*) isimli butona tıklanır")
	def butonaTikla(String buton_Adi) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/FiltreButonunaTiklanir"), ["Buton_Adi":buton_Adi] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekran butonlarından (.*) isimli butona tıklanır")
	def butonaTiklanir(String buton_Adi) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/ButonaTiklanir"), ["Buton_Adi":buton_Adi] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekran üst butonlardan (.*) isimli butona tıklanır")
	def ustButonaTikla(String buton_Adi) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/FiltrelerButonu"), ["Buton_Adi":buton_Adi] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekran sayfa numarasi (.*) olarak secilir")
	def sayfaNumarasiSecilir(String sayfaNumarasi) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/SayfaNumarasi"), ["SayfaNumarasi":sayfaNumarasi] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekran sayfa boyutu (.*) olarak secilir")
	def sayfaBoyutuSecilir(String sayfaBoyutu) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/SayfaBoyutuSecilir"), ["SayfaBoyutu":sayfaBoyutu] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar önceki sayfa numarasına tıklanır")
	def öncekiSayfaNumarasiButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/OncekiSayfaNumarasiTiklanir'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar sonraki sayfa numarasına tıklanır")
	def sonrakiSayfaNumarasiButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/SonrakiSayfaNumarasi'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Filtreler butonuna tıklanır")
	def filtrelerButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/FiltrelerButonu'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Excel butonuna tıklanır")
	def excelButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/ExceleTiklanir'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Mutakabat butonuna tıklanır")
	def mutakabatButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Mutakabat'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Menu butonuna tıklanır")
	def menuButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/MenuBtn'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Iptal Islemleri butonuna tıklanır")
	def ıptalIslemleriButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Iptal Islemleri/Iptal Islemleri'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Iptal Geri Al butonuna tıklanır")
	def ıptalGeriAlButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Iptal Islemleri/IptalGeriAl'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Iptal Et butonuna tıklanır")
	def iptalEtButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/IptalEt'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("e-Arsiv Faturaları Iptal Et butonuna tıklanır")
	def iptalButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Iptal Islemleri/Iptal Et e Arsiv'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar ePosta Gönder butonuna tıklanır")
	def ePostaButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/e-PostaGonder'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Tablodaki Menu butonuna tıklanır")
	def tablodakiMenuTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/TablodakiMenuButonu'), [:] , FailureHandling.STOP_ON_FAILURE)
	}
	
	@When("Yeni ekranlarda Tablodaki Menu butonuna tıklanır")
	def tablodakiMenu2Tiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/treeMenuBtn'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar için Tablodaki Menu butonuna tıklanır")
	def tablodakiMenuTiklanir2() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/TablodakiMenuButonu2'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Degistir butonuna tıklanır")
	def degistirTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Degistir'), [:] , FailureHandling.STOP_ON_FAILURE)
	}


	@When("Yeni ekranlar Sil butonuna tıklanır")
	def silButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/Sil'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Alıcıya gönder butonuna tıklanır")
	def aliciyaGönderButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/AliciyaGönder'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Rapor Islemleri butonuna tıklanır")
	def raporIslemleriButonunaTiklanir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/RaporIslemleri'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar butonlarından Yeni Ekle seçilir")
	def yeniEkleSecilir() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/YeniEkleTiklanir'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar Üst butonlardan (.*) var mı")
	def üstButonVarMi(String üstButon) {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/ÜstButonVarMi'), ["ÜstButon":üstButon] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Excel alt butonlarından Excele Akatar'a tıklanır")
	def excelAltButontikla() {
		WebUI.callTestCase(findTestCase('Test Cases/Yeni Ekran/Butonlar/ExcelAltButonTiklanir'), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Menü altındaki seçeneklerden (.*) isimli butona tıklanır")
	def menudenItemSecilir(String item_Adi) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Butonlar/MenuItemSecilir"), ["Item_Adi":item_Adi] , FailureHandling.STOP_ON_FAILURE)
	}
}