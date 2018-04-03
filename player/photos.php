<?php
require_once('Class-Photo.php');
$id = $u;
$megafile = new GooglePhoto($id);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="robots" content="noindex"/>
<META NAME="GOOGLEBOT" CONTENT="NOINDEX"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<script src="//film855.github.io/film855/Film855_HD/jwplayer.js"></script>
<script>jwplayer.key="I9HOJrL1NmqruQ60OuRhbrJ/JVBIN2I6LDqLOQ==";</script>
<style type="text/css">*{margin:0;padding:0}#picasa{position:absolute;width:100%!important;height:100%!important}</style>

</head>
<body>
<script type="text/javascript" src="//film855.github.io/film855/Film855_HD/invideo.min.js"></script>
<div id="mediaplayer_wrapper" style="width: 100%;height:100%" >
	<div id="mediaplayer" ></div>
</div>
<span id="subkhm" style="display:none;">{$subkh}</span>
<script type="text/javascript">
var playerInstance = jwplayer("mediaplayer");
		playerInstance.setup({
		id:'picasa',
		controls: true,
		displaytitle: true,
		width: "100%",
		height: "100%",
		aspectratio: "16:9",
		fullscreen: "true",
		flashplayer: "//ssl.p.jwpcdn.com/player/v/7.4.3/jwplayer.flash.swf",
		primary: 'html5',
		provider: 'http',
		autostart: false,
       		aboutlink: "/film855",
skin : {
        name:"roundster"
    },
logo: {
	//	file: 'https://film855.github.io/film855/Film855_HD/logo.png',
			link: '/film855',
			hide: true,
			position: 'top-left'
		},
image:"<?php if(!empty($thumb)){echo $thumb;}else{echo $megafile->thumb();}?>",
sources: [<?php echo $megafile->get(); ?>],
<?php

if(!empty($suben) && !empty($subkh)){
$sub = <<< subtitle
tracks: [{ 
		    file: '/embed/getsub.php?linksub=$suben', 
		    label: 'English', 
		    kind: 'captions',
		    "default":true
		  },
{
 file: '/embed/getsub.php?linksub=$subkh', 
		    label: 'Khmer', 
		    kind: 'captions'
}
],

subtitle;

echo $sub;
}else if(!empty($suben)){
$sub = <<< subtitle
tracks: [{ 
		    file: '/embed/getsub.php?linksub=$suben', 
		    label: 'English', 
		    kind: 'captions',
		    "default":true
}],
subtitle;

echo $sub;

}else if(!empty($subkh)){

$sub = <<< subtitle
tracks: [{ 
		    file: '/embed/getsub.php?linksub=$subkh', 
		    label: 'Khmer', 
		    kind: 'captions',
		    "default":true
}],
subtitle;

echo $sub;

}

?>
     captions: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Hanuman, sans-serif, Verdana, cursive',
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
		adsUrl: "//film855hd.com/embed/ads/index.html",
		adsUrl2: "",
		autostart: false
	});	
</script>
</body>

</html>