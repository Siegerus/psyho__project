<?php 

$name = $_POST['name'];               // переменная "$name"  будет равна тому, что вводили в инпуте
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');        // подключение пхп скрипта
$mail = new PHPMailer;                               // говорим, что встроенная пхп переменная будет - плагин мейлер
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers               // гуглим, если другая почта
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ivanoff1siegerus@gmail.com';                 // Наш логин  // Это как бы мыло самого сайта, и всю инфу, которая будет вводиться на нём, будет пересылаться уже на нашу почту, которую указали ниже
$mail->Password = vfjx cncr sqld oxxp;                           // Наш пароль от ящика // использовал пароль приложений
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to        // тоже гуглим, у каждой почты свой
 
$mail->setFrom('ivanoff1siegerus@gmail.com', 'Pulse');   // От кого письмо 
$mail->addAddress('rebofi1686@storesr.com');     // Add a recipient   //Это уже наше мыло, на которое будет приходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';                      // Дальше вёрстка самого письма, которое прийдёт
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>