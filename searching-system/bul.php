<style>
	td {border: 1px solid black;}
</style>

<?php 

$sql = "SELECT * FROM ders WHERE vkod LIKE '{$_GET['vkod']}%'";; 


$baglanti		= mysqli_connect('localhost', 'root', '', 'okul');
$kayitKumesi 	= mysqli_query($baglanti, $sql);

echo "<table>";

while ($kayit = mysqli_fetch_assoc($kayitKumesi)) 
	echo "<tr><td>{$kayit['vkod']}</td></tr>";

echo "</table>";
 ?>