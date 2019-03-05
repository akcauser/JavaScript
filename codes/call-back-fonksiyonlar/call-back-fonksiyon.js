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


