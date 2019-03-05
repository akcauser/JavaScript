# Fonksiyonlar

JavaScript'te 2 farklı şekilde fonksiyon tanımlanabilir


~~~javascript
function yazdir(yazi){
    console.log(yazi);
}

var ikiEkle = function(sayi){
    return sayi + 2;
}

yazdir("hello");

var a = 5;
a = ikiEkle(a);
console.log(a);
~~~