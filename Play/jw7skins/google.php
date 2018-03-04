<?php
$url = $u;

function viewsource($url){
    $ch      = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
	$head[] = "Connection: keep-alive";
	$head[] = "Keep-Alive: 300";
	$head[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
	$head[] = "Accept-Language: en-us,en;q=0.5";
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36');
	curl_setopt($ch, CURLOPT_ENCODING, '');
	curl_setopt($ch, CURLOPT_HTTPHEADER, $head);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 60);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}

function GetLinkAPI($curl){ // Dành cho JWPlayer
    $get = viewsource('https://api.anivn.com/?url=' . $curl);
    $remove = str_replace('\/','/',$get);
    preg_match_all('#"(.+?)":"(.+?)"#',$remove,$data);
    foreach ($data[2] as $i => $quality) {
        if (strpos($data[1][$i], '1080') !== false) {
            $AniVN .= '{file: "'.$data[2][$i].'",label: "1080p", type: "video/mp4"},';
        } elseif (strpos($data[1][$i], '720') !== false) {
            $AniVN .= '{file: "'.$data[2][$i].'",label: "720p", type: "video/mp4", "default": "true"},';
        } elseif (strpos($data[1][$i], '480') !== false) {
            $AniVN .= '{file: "'.$data[2][$i].'",label: "480p", type: "video/mp4"},';
        } elseif (strpos($data[1][$i], '360') !== false) {
            $AniVN .= '{file: "'.$data[2][$i].'",label: "360p", type: "video/mp4"}';
        }
    }
    return $AniVN;
}


?>
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">


<meta name="robots" content="noindex" />
<META NAME="GOOGLEBOT" CONTENT="NOINDEX" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

<script src="//film855hd.com/JwFilm855Player/jwplayer.js"></script>
<script>jwplayer.key="I9HOJrL1NmqruQ60OuRhbrJ/JVBIN2I6LDqLOQ==";</script>
<link href='https://fonts.googleapis.com/css?family=Hanuman' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Scada" rel="stylesheet"> 


<style type="text/css">
*{margin:0;padding:0}#picasa{position:absolute;width:100%!important;height:100%!important}
</style>
</head>
<body>
<div>
<center>
<script type="text/javascript" src="//film855hd.com/js/invideo.min.js"></script>
<div id="mediaplayer_wrapper" style="width: 100%;height:100%" >
	<div id="mediaplayer" ></div>
</div>
<script type="text/javascript">
 	var playerInstance = jwplayer("mediaplayer");
		playerInstance.setup({
		id:'picasa',
		controls: true,
		displaytitle: true,
		flashplayer: "http://p.jwpcdn.com/player/v/7.3.6/jwplayer.flash.swf",
		primary: 'html5',
		width: "100%",
		height: "100%",
		aspectratio: "16:9",
		fullscreen: "true",
		provider: 'http',
		autostart: false,
		abouttext: "Film855 Embeded Player",
        aboutlink: "//fb.com/film855",
logo: {
		//file: 'https://film855.github.io/film855/Film855_HD/logo.png',
			link: '//fb.com/film855',
			hide: true,
			position: 'top-left'

		},
		image:"<?php if(!empty($thumb)){echo $thumb;}else{echo "https://2.bp.blogspot.com/-qqtTdlmNBNs/V72XJPQnt6I/AAAAAAAAe0w/zE0tpZ0k1V8c1-b1PleG65cGbj1osc92gCLcB/s1600/14114598_1044514662322214_1723783159_o.jpg";}?>",
skin : {
        name:""
    },
		sources: [<?php
	
echo GetLinkAPI($url);
?>],
<?php

if(!empty($suben) && !empty($subkh)){
$sub = <<< subtitle
tracks: [{ 
		    file: '//film855hd.com/embed/getsub.php?linksub=$suben', 
		    label: 'English', 
		    kind: 'captions',
		    "default":true
		  },
{
 file: '//film855hd.com/embed/getsub.php?linksub=$subkh', 
		    label: 'Khmer', 
		    kind: 'captions'
}
],

subtitle;

echo $sub;
}else if(!empty($suben)){
$sub = <<< subtitle
tracks: [{ 
		    file: '//film855hd.com/embed/getsub.php?linksub=$suben', 
		    label: 'English', 
		    kind: 'captions',
		    "default":true
}],
subtitle;

echo $sub;

}else if(!empty($subkh)){

$sub = <<< subtitle
tracks: [{ 
		    file: '//film855hd.com/embed/getsub.php?linksub=$subkh', 
		    label: 'Khmer', 
		    kind: 'captions',
		    "default":true
}],
subtitle;

echo $sub;

}

?>     captions: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Scada, Hanuman, sans-serif, Verdana, cursive',
        fontOpacity: 100,
        backgroundOpacity: 0,
backgroundColor: '#000000',
        edgeStyle: 'raised',
        windowColor: '#000000',
        windowOpacity: 0
    }

});

//setup block ads
	//new BlockAd({
	//  url: '300x250.html',
	//  player: jwplayer('mediaplayer')
	//});
	invideo.setup({
		adsUrl: "../ads/300x250.html",
		adsUrl2: "",
		autostart: false
	});	
								
		


						playerInstance.addButton(
									//This portion is what designates the graphic used for the button
									"http://i.imgur.com/cAHz5k9.png",
									"Download",
									function() {
										var kI = playerInstance.getPlaylistItem(),
										kcQ = playerInstance.getCurrentQuality();
										if(kcQ < 0) { kcQ =0;}
										var kF = kI.sources[kcQ].file+"?itag="+kcQ+"&type=video/mp4&title=<?php echo $arrMvTT;?>";
										console.log(kF);
										if(kI.sources[kcQ].file.lastIndexOf('redirector.googlevideo.com') > 0) {
											var kF = kI.sources[kcQ].file+"&title=<?php echo $arrMvTT;?>";
										} 
										window.open(kF,'_blank');
									},
									"download"
								);

			
		
</script>
</center>
</div>
</body>
</html>

