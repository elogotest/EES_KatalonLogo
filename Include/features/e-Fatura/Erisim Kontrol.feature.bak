Feature: e-Fatura Erisim Kontrol

  Scenario Outline: e-Fatura Erisim Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    #* Yeni açılan sekmeye geçilir
    * https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayUbl?InvoiceIDs=53937971 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayUbl?InvoiceIDs=53782980 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayPDF?InvoiceIDs=53937970 isimli linke gidilir
    * PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayPDF?InvoiceIDs=53782980 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/InvoiceDisplayWithGF?opType=0&InvoiceIDs=53938685 isimli linke gidilir
    * Yeni sekme başlığında e-FATURA var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/InvoiceDisplayWithGF?opType=0&InvoiceIDs=53910450 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    #* https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayInvoice?InvoiceID=53938685 isimli linke gidilir
    #* PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/Invoice/IncomingInvoiceDisplayInvoice?InvoiceID=53910450 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/OutgoingInvoiceDisplayUbl?InvoiceIDs=53937923 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/OutgoingInvoiceDisplayUbl?InvoiceIDs=53917516 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/OutgoingInvoiceDisplayPDF?InvoiceIDs=53937923 isimli linke gidilir
    * PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/Invoice/OutgoingInvoiceDisplayPDF?InvoiceIDs=53917516 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/InvoiceDisplayWithGF?opType=1&InvoiceIDs=53938665 isimli linke gidilir
    * Yeni sekme başlığında e-FATURA var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/InvoiceDisplayWithGF?opType=1&InvoiceIDs=53935639 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayUBL?id=15102201 isimli linke gidilir
    * <tag1> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayUBL?id=15100352 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayInvoice?id=15102201 isimli linke gidilir
    * Yeni sekme başlığında e-FATURA var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayInvoice?id=15100350 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayResponse?id=15102201 isimli linke gidilir
    * Yeni sekme başlığında UYGULAMA YANITI var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/OutgoingDisplayResponse?id=15100350 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir
    * Kullanıcı adı <kullaniciAdi1> ve Şifre <sifre> olarak giriş yapılır
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/IncomingDisplayResponse?id=15102391 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/IncomingDisplayUBL?id=15102391 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/IncomingDisplayInvoice?id=15102390 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | tag     | tag1                | kullaniciAdi1 |
      | ELOGO6       | 123456 | invoice | ApplicationResponse | ELOGOGIB      |
