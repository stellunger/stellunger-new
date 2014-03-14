<?php

$to = "imstellunger@gmail.com";
$subject = "Письмо с Штеллунгера";
$message = "Привет!\n\n";

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $message .= "Имя: " . $_POST['name'] . "\n";
    $message .= "Компания: " . $_POST['company'] . "\n";
    $message .= "E-mail: " . $_POST['email'] . "\n";
    $message .= "Телефон: " . $_POST['phone'] . "\n";
    $message .= $_POST['extra'];

    mail($to, $subject, $message);
}

?>