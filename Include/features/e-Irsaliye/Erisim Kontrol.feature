Feature: e-Irsaliye Erisim Kontrol

  Scenario Outline: e-Irsaliye Erisim Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    #* Yeni açılan sekmeye geçilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayUbl?InvoiceIDs=43117 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayUbl?InvoiceIDs=12357 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayPDF?InvoiceIDs=43121 isimli linke gidilir
    * PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayPDF?InvoiceIDs=12357 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayUbl?InvoiceIDs=43138 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayUbl?InvoiceIDs=40854 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayPDF?InvoiceIDs=43137 isimli linke gidilir
    * PDF açıldı mı
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceDisplayPDF?InvoiceIDs=40854 isimli linke gidilir
    * Gerekli hata mesaji Lütfen sadece giriş yaptığınız hesaba ait belgeler için işlem yapınız. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=2560 isimli linke gidilir
    * <tag1> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=2561 isimli linke gidilir
    * <tag1> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=1933 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplay?ReceiptAdviceID=2560&OpType=2 isimli linke gidilir
    * Yeni sekme başlığında İRSALİYE YANITI var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplay?ReceiptAdviceID=1639&OpType=2 isimli linke gidilir
    * Gerekli hata mesaji İrsaliye yanıtınız görüntülenememiştir. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplay?ReceiptAdviceID=2591&OpType=1 isimli linke gidilir
    * Yeni sekme başlığında İRSALİYE YANITI var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplay?ReceiptAdviceID=1639&OpType=1 isimli linke gidilir
    * Gerekli hata mesaji İrsaliye yanıtınız görüntülenememiştir. geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=2591 isimli linke gidilir
    * <tag1> tagli ubl geldi mi
    #* https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=1639 isimli linke gidilir
    #* Gerekli hata mesaji  geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdvice?Param=0-2 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir
    * Kullanıcı adı <kullaniciAdi1> ve Şifre <sifre> olarak giriş yapılır
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplay?ReceiptAdviceID=2625&OpType=2 isimli linke gidilir
    * Gerekli hata mesaji İrsaliye yanıtınız görüntülenememiştir. geldi mi
    #* https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceDisplayUBL?ReceiptAdviceID=2547 isimli linke gidilir/*gelenkutusu irsaliye yanıtları ubl
    #* Gerekli hata mesaji İrsaliye yanıtınız görüntülenememiştir. geldi mi/*boş hata mesajı geliyor
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdvice?Param=0-2 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | tag            | tag1          | kullaniciAdi1 |
      | ELOGO6       | 123456 | DespatchAdvice | ReceiptAdvice | ELOGOGIB      |
