<?php
 
  const TOKEN = '7186163080:AAGV0O8m3lcC45tH1XJN4wcYXRoTrXLFygk';
 
  const CHATID = '-1002168294668';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['theme']) && !empty($_POST['user']) && !empty($_POST['social']) && !empty($_POST['nickname']) && !empty($_POST['email'])) {
     
    $txt = /* <b>Пользователь оставил данные для записи на групповую сессию!</b> <br> */"";
     
    if (isset($_POST['theme']) && !empty($_POST['theme'])) {
        $txt .= "Пользователь оставил данные для записи на групповую сессию! %0A" . "Тема встречи: " . strip_tags(trim(urlencode($_POST['theme']))) . "%0A";
    }
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    if (isset($_POST['social']) && !empty($_POST['social'])) {
        $txt .= "Соц.сеть: " . strip_tags(urlencode($_POST['social'])) . "%0A";
    }

    if (isset($_POST['nickname']) && !empty($_POST['nickname'])) {
      $txt .= "Никнейм: " . strip_tags(urlencode($_POST['nickname'])) . "%0A";
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