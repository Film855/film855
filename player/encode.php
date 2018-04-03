<form action="" method="POST">
 + Google drive, Photos, Picasaweb: https://drive.google.com/file/d/0B0DAwt_Tig7ASDg5TWl3VFM5TVk/edit?pref=2&pli=1<br>
 + Youtube , Google Player supports MP4 (.mp4, .m4v, and .f4v file extensions), WebM, Ogg/Theora, and FLV video formats. <br>
youtube/link_video <br>
 + lh3.googleusercontent.com : mp4post/https://lh3.googleusercontent.com/6tC... <br><br>
 + Amazon cloud drive : amazon/id_video <br><br>
 + mp4upload.com : mp4upload/link_video <br><br>
Link video :<input type="text" size="100" name="url"/><br><br>
Subtitle: http://wpplayer.org/e/subtitles/sintel-2048-surround.srt<br><br>
Link subittles :<input type="text" size="50" name="suben"/><br><br>

Lock iframe  : yourdomain.com<br><br>
Domain :<input type="text" size="50" name="domain" value="w3schools.com"/><br><br>
<br/>
<br/>
<input type="submit" value="SUBMIT"/>
<br/><br/>
<br/>
<?php
$u =  ($_POST['url']);
$subt = ($_POST['suben']);
$domain = ($_POST['domain']);
$inboxf = $u.'@'.$subt.'@'.$domain;

    $plain_txt = base64_encode($inboxf);
    $string = $plain_txt;
    $encrypt_method = "AES-256-CBC";
    $secret_key = 'This is my secret key';
    $secret_iv = 'This is my secret iv';
    // hash
    $key = hash('sha256', $secret_key); 
    // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
    $iv = substr(hash('sha256', $secret_iv), 0, 16);
    $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
    $output = base64_encode($output);
    $encrypted_txt = $output;
    $urlen = $encrypted_txt;

echo '<textarea rows="5" cols="80" >
<iframe style="border:0px #FFFFFF none;" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" src="hollymoviehd.com/embed/wp-embed.php?url='.$urlen.'" allowfullscreen></iframe>
</textarea>';


?>
