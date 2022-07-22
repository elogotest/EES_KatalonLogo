package yeniPopup
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



class popup {

	@When("Yeni ekranlar popup mesajı (.*) içeriyor mu")
	def popupIceriyorMu(String mesaj) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/MesajİceriyorMu"), ['Mesaj':mesaj] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar acılan popup (.*) içeriyor mu")
	def popupMesaji(String name) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/PopupMesajı"), ['Name':name] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar yönetim popup butonlarından iptal seçilir")
	def popupIptal() {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/PopupIptal"), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Tamam secilir")
	def tamamSecilir() {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/TamamSecilir"), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Departman otomasyon olarak secilir")
	def departmanSecilir() {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/Departman Secilir"), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar yönetim popup butonlarından Tamam seçilir")
	def popupTamam() {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/PopupTamam"), [:] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Yeni ekranlar popup butonlarından (.*) secilir")
	def popupBtn(String popupBtn) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/PopupButonlarındanSecilir"), ['PopupBtn':popupBtn] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Dosya Tipi (.*) olarak secilir")
	def dosyaTipi(String option) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/DosyaTipiSecilir"), ['Option':option] , FailureHandling.STOP_ON_FAILURE)
	}
	
	@When("İptal Tipi (.*) olarak secilir")
	def iptalTipi(String option) {
		WebUI.callTestCase(findTestCase("Test Cases/Yeni Ekran/Popuplar/Iptal Tipi Secilir"), ['Option':option] , FailureHandling.STOP_ON_FAILURE)
	}
}