/*
-throw
-try
-catch
-finally
*/

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