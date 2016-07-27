<?php
if(isset($_POST['submit'])) {
	$to = "tibiapk95@hotmail.com";
	$from = $_POST['email'];
	$name = $_POST['name'];
	$subject = "Consulta Taichi";
	$message = $name . " " . "escribi&oacute; lo siguiente: " . "\n\n" . $_POST['message'];

	$headers = "De: " . $from;
	mail($to, $subject, $message, $headers);
	echo "Mensaje enviado. Muchas gracias " . $name . ", te contactaremos pronto.";
}
?>