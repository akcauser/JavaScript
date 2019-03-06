var insan = {};

insan.ad = "Ertuğrul";
insan.yas = 25;
insan.otur = function(){
    console.log("Oturma fonksiyonu");
}

console.log(insan); // { ad: 'Ertuğrul', yas: 25, otur: [Function] }
console.log(insan.ad); // Ertuğrul
console.log(insan.yas); // 25

// Bu şekilde de tanımlanabilir
var ders = {
    dersAdi: String,
    dersNo: Int16Array
}
ders.dersAdi = "Matematik";
ders.dersNo = 1273;
console.log(ders.dersAdi); // Matematik
console.log(ders.dersNo); // 1273