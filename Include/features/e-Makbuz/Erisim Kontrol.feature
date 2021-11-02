Feature: e-Makbuz Erisim Kontrol

  Scenario Outline: e-Makbuz Erisim Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    #* Yeni açılan sekmeye geçilir
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=xml&ids=7978&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=xml&ids=3332&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=pdf&ids=7978&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* PDF açıldı mı
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=pdf&ids=3332&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=html&ids=8016&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* Yeni sekme başlığında e-Müstahsil Makbuzu var mı kontrol edilir
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=html&ids=3331&showWithGF=false&documentType=ePReceipt&logPageId=EPReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/EPReceipt/EPReceiptDisplayWithGF?selectedID=8015 isimli linke gidilir
    #* Yeni sekme başlığında e-Müstahsil Makbuzu var mı kontrol edilir
    #* https://efatura-stage.elogo.com.tr/EPReceipt/EPReceiptDisplayWithGF?selectedID=3330 isimli linke gidilir/*hata500 düzelince acılıcak
    #* Gerekli hata mesaji  geldi mi/*hata500düzelince acılıcak
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=xml&ids=3787&showWithGF=false&documentType=ePReceiptReport&logPageId=EPReceiptReports isimli linke gidilir
    #* <tag1> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=xml&ids=3371&showWithGF=false&documentType=ePReceiptReport&logPageId=EPReceiptReports isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/*emmraporları veriler açılıyor
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=html&ids=3787&showWithGF=false&documentType=ePReceiptReport&logPageId=EPReceiptReports isimli linke gidilir
    #* e-Müstahsil Makbuzu Raporu popupı açıldı mı
    #* https://efatura-stage.elogo.com.tr/EPReceipt/DisplayFileReport?fileType=html&ids=3435&showWithGF=false&documentType=ePReceiptReport&logPageId=EPReceiptReports isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/*emmraporları veriler açılıyor
    #* https://efatura-stage.elogo.com.tr/ReceiptCreation/DisplayUBL?id=38577&receiptCreationType=0&userDocType=5 isimli linke gidilir
    #* <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/ReceiptCreation/DisplayUBL?id=35159&receiptCreationType=0&userDocType=5 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/*500 hatası düzelicek emmoluşturma
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=xml&ids=17032&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=xml&ids=17014&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=pdf&ids=17032&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* PDF açıldı mı
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=pdf&ids=17014&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=html&ids=17032&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* Yeni sekme başlığında e-Serbest Meslek Makbuzu var mı kontrol edilir
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=html&ids=17014&showWithGF=false&documentType=SEReceipt&logPageId=SEReceipt isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=xml&ids=2767&showWithGF=false&documentType=SEReceiptReport&logPageId=SEReceiptReports isimli linke gidilir
    #* <tag1> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=xml&ids=2649&showWithGF=false&documentType=SEReceiptReport&logPageId=SEReceiptReports isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/* veri açılıyor düzelirse acilacak
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=html&ids=2767&showWithGF=false&documentType=SEReceiptReport&logPageId=SEReceiptReports isimli linke gidilir
    #* e-Serbest Meslek Makbuzu Raporu popupı açıldı mı
    #* https://efatura-stage.elogo.com.tr/SEReceipt/DisplayFileReport?fileType=html&ids=2649&showWithGF=false&documentType=SEReceiptReport&logPageId=SEReceiptReports isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/* veri açılıyor düzelirse acilacak
    #* https://efatura-stage.elogo.com.tr/ReceiptCreation/DisplayUBL?id=38691&receiptCreationType=0&userDocType=7 isimli linke gidilir
    #* <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/ReceiptCreation/DisplayUBL?id=38363&receiptCreationType=0&userDocType=7 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | tag        | tag1                |
      | ELOGO6       | 123456 | CreditNote | earsiv:eArsivRaporu |
