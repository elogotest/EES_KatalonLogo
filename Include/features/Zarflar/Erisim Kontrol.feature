Feature: Zarflar Erisim Kontrol

  Scenario Outline: Zarflar Erisim Kontrol
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    #* Yeni açılan sekmeye geçilir
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116183191 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116176233 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116176233 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116182583 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116142419 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116142419 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116183131 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116175588 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116175588 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116182204 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116112585 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116112585 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116114821 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=115951196 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 115951196 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=116183207 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=115951195 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 115951195 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=116183159 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=115949239 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 115949239 geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=116183260 isimli linke gidilir
    * <tag> tagli ubl geldi mi
    * https://efatura-stage.elogo.com.tr/Envelope/IncomingEnvelopeDisplayUbl?id=116156311 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116156311 geldi mi
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0&CreationStartDate=18.10.2021&EnvelopeId=aec43a95-f33f-4c56-b669-b56abcdcc7f6 isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxIncomingInvoice?Option=0&CreationStartDate=17.06.2021&EnvelopeId=7ddc3134-418e-4eb3-a359-40a137535db4 isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceIncoming?EnvelopeId=c9749719-f7d1-4076-b93f-add82ef38ab8&CreationStartDate=17.10.2021 isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceIncoming?EnvelopeId=64dd8fe9-81ee-468d-be84-7efb5c0d99c5&CreationStartDate=03.03.2020 isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxOutgoingInvoice?Option=0&CreationStartDate=20.10.2021&EnvelopeId=454b51cc-b702-4ea4-99b8-49dc571ad498 isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Invoice/PostboxOutgoingInvoice?Option=0&CreationStartDate=09.08.2021&EnvelopeId=95db7a24-70f9-444b-9131-117885ec655f isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/PostboxOutgoingApplicationResponses?Option=0&CreationStartDate=%2014.10.2021&EnvelopeUuid=3d5c7ca8-de46-445f-a3c3-976c3c25dafd isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/ApplicationResponses/PostboxOutgoingApplicationResponses?Option=0&CreationStartDate=%2024.05.2021&EnvelopeUuid=1e640671-a0e9-4ec1-b19a-ae4b2feaab93 isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceOutgoing?EnvelopeId=58bb7fc3-6a16-4626-bd0f-ea848df231e1&CreationStartDate=19.10.2021 isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdviceOutgoing?EnvelopeId=b1710935-338d-40fb-a67f-59d2728f56b0&CreationStartDate=06.10.2021 isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceOutgoing?Option=0&CreationStartDate=14.10.2021&EnvelopeId=2aaadaee-6254-4520-97e3-92c0d540eb82 isimli linke gidilir
    * Tabloda veri var mı kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/ReceiptAdviceOutgoing?Option=0&CreationStartDate=03.12.2020&EnvelopeId=d1bd76b8-261f-4421-885c-1454271a4dd1 isimli linke gidilir
    * Tabloda veri yok mu kontrol edilir
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdvice?Param=0-2 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir
    * Kullanıcı adı <kullaniciAdi1> ve Şifre <sifre> olarak giriş yapılır
    * https://efatura-stage.elogo.com.tr/Envelope/OutgoingEnvelopeDisplayUbl?id=116184130 isimli linke gidilir
    * Gerekli hata mesaji Faturanız, fatura içerisindeki görünüm dosyası ile görüntülenememiştir. Faturanızı Varsayılan İle Göster butonu ile görüntülemeyi deneyebilirsiniz.: 116184130 geldi mi
    * https://efatura-stage.elogo.com.tr/Despatch/DespatchAdvice?Param=0-2 isimli linke gidilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | tag                      | tag1          | kullaniciAdi1 |
      | ELOGO6       | 123456 | StandardBusinessDocument | ReceiptAdvice | ELOGOGIB      |
