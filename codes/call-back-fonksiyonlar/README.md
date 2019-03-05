# Call back fonksiyonlar

* 2 fonksiyon var. 1. fonksiyonu 2. fonksiyonun parametresi olarak kullanmak istiyorsak call-back fonksiyon tanımlamalıyız.
* Bu şekilde çalıştıracağımız fonksiyonları daha verimli halde kullanabiliiz.


~~~javascript
function soyle(text, callback){
    console.log(text);
    callback();
}

var cayDemle = function(){
    console.log("Çay demle");
}

soyle("merhaba", cayDemle);   

//2. kullanım şekli
soyle("merhaba2", function(){
    console.log("Çay demle");
});
~~~


