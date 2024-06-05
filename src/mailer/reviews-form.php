<?php 

$name = $_POST['user'];               
$phone = $_POST['phone'];
$social = $_POST['social'];
$nickname = $_POST['nickname'];
$review = $_POST['review'];



require_once('phpmailer/PHPMailerAutoload.php');        
$mail = new PHPMailer;                               
$mail->CharSet = 'utf-8';



$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                              
$mail->Username = 'ivanoff1siegerus@gmail.com';                 
$mail->Password = 'yyfl tjuw exhg mzsi';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                  
 
$mail->setFrom('ivanoff1siegerus@gmail.com', 'psycho_project');   
$mail->addAddress('ivanoffsiegerus@gmail.com');     
 
$mail->isHTML(true);                                  

$mail->Subject = 'Данные';                      
$mail->Body    = '
		<b>Пользователь оставил отзыв!</b> <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Соц сеть: ' . $social . ' <br>
    Никнейм: ' . $nickname . ' <br>
	Текст отзыва: <br> <p> ' . $review . ' </p> '; 
	

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>