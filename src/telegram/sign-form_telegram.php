<?php
 
// Токен
  const TOKEN = '7186163080:AAGV0O8m3lcC45tH1XJN4wcYXRoTrXLFygk';
 
  // ID чата
  const CHATID = '-1002168294668';
 
  // Массив допустимых значений типа файла.
  $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf');
 
  // Максимальный размер файла в килобайтах
  // 1048576; // 1 МБ
  $size = 1073741824; // 1 ГБ
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $fileSendStatus = '';
  $textSendStatus = '';
  $msgs = [];
   
  // Проверяем не пусты ли поля с именем и телефоном
  if (!empty($_POST['user']) && !empty($_POST['phone']) && !empty($_POST['date']) && !empty($_POST['time'])) {
     
    // Если не пустые, то валидируем эти поля и сохраняем и добавляем в тело сообщения. Минимально для теста так:
    $txt = "";

    // Имя
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Пользователь оставил данные для записи на консультацию! %0A" . "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    // Номер телефона
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Телефон: " . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
     
    if (isset($_POST['social']) && !empty($_POST['social'])) {
        $txt .= "Соц.сеть: " . strip_tags(urlencode($_POST['social'])) . "%0A";
    }

    if (isset($_POST['nickname']) && !empty($_POST['nickname'])) {
      $txt .= "Никнейм: " . strip_tags(urlencode($_POST['nickname'])) . "%0A";
    }

    if (isset($_POST['date']) && !empty($_POST['date'])) {
      $txt .= "Указанная дата: " . strip_tags(urlencode($_POST['date'])) . "%0A";
    }

    if (isset($_POST['time']) && !empty($_POST['time'])) {
      $txt .= "Указанное время: " . strip_tags(urlencode($_POST['time'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
    /* if( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
      if (!empty($_FILES['files']['tmp_name'])) {
     
          $urlFile =  "https://api.telegram.org/bot" . TOKEN . "/sendMediaGroup";
           
          // Путь загрузки файлов
          $path = $_SERVER['DOCUMENT_ROOT'] . '/telegramform/tmp/';
           
          // Загрузка файла и вывод сообщения
          $mediaData = [];
          $postContent = [
            'chat_id' => CHATID,
          ];
       
          for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
            if ($_FILES['files']['name'][$ct] && @copy($_FILES['files']['tmp_name'][$ct], $path . $_FILES['files']['name'][$ct])) {
              if ($_FILES['files']['size'][$ct] < $size && in_array($_FILES['files']['type'][$ct], $types)) {
                $filePath = $path . $_FILES['files']['name'][$ct];
                $postContent[$_FILES['files']['name'][$ct]] = new CURLFile(realpath($filePath));
                $mediaData[] = ['type' => 'document', 'media' => 'attach://'. $_FILES['files']['name'][$ct]];
              }
            }
          }
       
          $postContent['media'] = json_encode($mediaData);
       
          $curl = curl_init();
          curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
          curl_setopt($curl, CURLOPT_URL, $urlFile);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($curl, CURLOPT_POSTFIELDS, $postContent);
          $fileSendStatus = curl_exec($curl);
          curl_close($curl);
          $files = glob($path.'*');
          foreach($files as $file){
            if(is_file($file))
              unlink($file);
          }
      }
      echo json_encode('SUCCESS');
    } else {
      echo json_encode('ERROR');
      // 
      // echo json_decode($textSendStatus);
    } */
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}