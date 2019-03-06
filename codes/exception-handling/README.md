# Exception Handling

* Temelde 4 anahtar kelime var.

### try
* İçerisine kontrol edilecek yani hata ile karşılanılması muhtemel kodları yazarız.

### catch
* Hata ile karşılanırsa yapılması gerekenler buraya yazılır.

### throw 
* Karşılaşılan hatayı catch bloğuna fırlatır.

### finally
* Hata olsa da olmasa da yapılması gereken şeyleri buraya yazabiliriz. 


~~~javascript
var sayi1 = 5;
var sayi2 = 0;

try{
    var sayi3 = sayi1 / sayi2;
    if(sayi2 == 0){
        throw("sayi2 0 olamaz!");
    }
}catch(error){
    console.log("ERROR: "+error);
}finally{
    console.log("hata olsa da olmasa da burası çalışır");
}

~~~