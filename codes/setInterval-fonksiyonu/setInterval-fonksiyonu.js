var sayi = 1;
var interval = setInterval(function(){
    console.log("1 saniyede bir selam yazıyorum -> "+sayi);
    if(sayi == 5){
        clearInterval(interval);
    }
    sayi++;
}, 1000);