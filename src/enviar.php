<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version:1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Est mensaje fue enviado por " . $name . ",\r\n";
$mensaje = "Su e-mail es: " . $email . "\r\n";
$mensaje = "Asunto: " . $subject . ",\r\n";
$mensaje = "Mensaje: " . $_POST['message'] . "\r\n";
$mensaje = "Enviado el " . date('d/m/Y', time());



$for = 'juan.collaguazo@uiseck.edu.ec';
$subjectMail = 'Asunto del mail recibido';

mail($for, $subjectMail, utf8_decode($mensaje), $header);

header("Location: index.html")


?>