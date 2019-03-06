# Call back fonksiyonlar


##### Call back fonksiyonuyla alakalı 
##### Normalde javascript'te fonksiyonlar asenkron yani paralel olarak çalıştırılır. Biraz daha açarsak, Bütün fonksiyonlar aynı anda çalıştırılır. 
##### Call back fonksiyonların önemi burada ortaya çıkıyor. Biz fonksiyonları sırasıyla çalıştırmak istiyorsak yani bir fonksiyon bitmeden diğer bir fonksiyon başlamasın istiyorsak callback fonksiyonlar kullanmalıyız. 


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


