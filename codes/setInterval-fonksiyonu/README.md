# setInterval fonksiyonu

* Bu fonksiyon setTimeOut gibi tek seferlik değildir.
* Belirtilen aralıklarda tekrar tekrar çalıştırılır

> Bu örnek 1 saniyede bir console.log içerisindeki değeri yazdırmaktadır.

~~~javascript
clearInterval();
~~~
>Ayrıca bu fonksiyonunu da sayı 5 e eşit olunca çağırıp sayacımızı durdurabiliyoruz.

~~~javascript
var sayi = 1;
var interval = setInterval(function(){
    console.log("1 saniyede bir selam yazıyorum -> "+sayi);
    if(sayi == 5){
        clearInterval(interval);
    }
    sayi++;
}, 1000);
~~~


