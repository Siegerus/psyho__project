<?php
 
  const TOKEN = '7186163080:AAGV0O8m3lcC45tH1XJN4wcYXRoTrXLFygk';
 
  const CHATID = '-1002168294668';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['instruction']) && !empty($_POST['user']) && !empty($_POST['social']) && !empty($_POST['email'])) {
     
    $txt = "";
     
    if (isset($_POST['instruction']) && !empty($_POST['instruction'])) {
        $txt .= "Пользователь оставил данные для инструкции по самопомощи! %0A" . "Тема инструкции: " . strip_tags(trim(urlencode($_POST['instruction']))) . "%0A";
    }
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    if (isset($_POST['social']) && !empty($_POST['social'])) {
        $txt .= "Соц.сеть: " . strip_tags(urlencode($_POST['social'])) . "%0A";
    }

    if (isset($_POST['email']) && !empty($_POST['email'])) {
      $txt .= "E-mail: " . strip_tags(urlencode($_POST['email'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}