Feature: e-Arsiv Erisim Kontrol

  Scenario Outline: e-Arsiv Erisim Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    #* Yeni açılan sekmeye geçilir
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType=xml&ids=2720727 isimli linke gidilir
    * <tag1> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType=xml&ids=2693836 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/*earsiv raporları xml bos hata mesajı
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType=html&ids=2720727 isimli linke gidilir
    * E-Arşiv Raporu popupı açıldı mı
    #* https://efatura-stage.elogo.com.tr/EArchive/DisplayFileReport?fileType=html&ids=2693836 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi/*earsiv raporları rapor boş hata mesajı
    * https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id=41324&invoiceCreationType=0&userDocType=1 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id=40156&invoiceCreationType=0&userDocType=1 isimli linke gidilir/*hatamesajı düzelince aç/*earşivfaturaolusturma
    #* Gerekli hata mesaji  geldi mi/*hatamesajı düzelince aç /*earşiv fatura olusturma
    * https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id=41657&invoiceCreationType=1&userDocType=1 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/InvoiceCreation/DisplayUBL?id=42196&invoiceCreationType=1&userDocType=1 isimli linke gidilir/*hatamesajı düzelince aç/*earşiv araçları taslak
    #* Gerekli hata mesaji  geldi mi/*hatamesajı düzelince aç /*earşiv araçları e arşiv taslak
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=xml&ids=20353831&showWithGF=false&created=2021-10-31T21:00:00.000Z isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=pdf&ids=20353831&showWithGF=false&created=2021-10-31T21:00:00.000Z isimli linke gidilir
    * PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=html&ids=20353831&showWithGF=true&created=2021-10-31T21:00:00.000Z isimli linke gidilir
    * Yeni sekme başlığında e-Arşiv Fatura var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir
    * Kullanıcı adı <kullaniciAdi1> ve Şifre <sifre> olarak giriş yapılır
    #* https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=xml&ids=20353831&showWithGF=false&created=2021-10-31T21:00:00.000Z isimli linke gidilir/* e arşiv faturalar ubl
    #* Gerekli hata mesaji  geldi mi/* e arsiv faturalar ubl 500 hatası
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=pdf&ids=20353831&showWithGF=false&created=2021-10-31T21:00:00.000Z isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/EArchive/DisplayFile?fileType=html&ids=20353831&showWithGF=true&created=2021-10-31T21:00:00.000Z isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | tag     | tag1                | kullaniciAdi |
      | ELOGO6       | 123456 | invoice | earsiv:eArsivRaporu | ELOGOGIB     |
