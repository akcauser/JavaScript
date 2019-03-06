# setTimeOut fonksiyonu

* Bu fonkiyon 2 parametre alır. 
* 1. paramete callback fonksiyonu
* 2. parametre ise milisaniye cinsinden süre
* Girilen süre değeri kadar bekleyip ilk parametredeki fonksiyon çalıştırılır.

~~~javascript
setTimeout(function(){
    console.log("2 saniye geçti");
}, 2000);
	
~~~