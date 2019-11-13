<?php 
//URL değişkenleri $_GET dizisinin içerisine apache tarafından konur

$c = mysqli_connect('localhost', 'root', '' , 'okul'); // veritabanına bağlaandık

$sql = "DELETE FROM `ders` WHERE `vkod` = ". $_GET['kod'] . ";";

$sonuc=mysqli_query($c,$sql); // mysql komutunu çalıştır.

if (!$sonuc) {
	echo "SQL Hatası : " .mysqli_error($c);
}

mysqli_close($c);


header("location:ders.php"); //browserdan en sondan dersleri tekrar listelemesini talep ettik. 





?>