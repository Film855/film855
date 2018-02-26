<?php
	error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
	header('Content-Type: application/json; charset=UTF-8');
	
	if (isset($_POST['longlink'])){
		$myDomain = $_SERVER['HTTP_HOST'].substr($_SERVER['REQUEST_URI'], 0, strrpos($_SERVER['REQUEST_URI'], '/') + 1);
		$longURL = urlencode($_POST['longlink']);
		$shortURL = file_get_contents('http://tinyurl.com/api-create.php?url='.$longURL);
		$shortURL = str_replace("tinyurl.com/",$myDomain,$shortURL);
		
		if($shortURL){
			$data = '<h4>Excellent! Copy Your Shortened URL</h4>';
			$data .= '<p><input type="text" readonly="true" style="width:100%;" value="'.$shortURL.'"></p>';
			$data .= '<p>';
			$data .= 'Share Shortened Link: ';
			$data .= '<a href="http://twitter.com/home?status='.$shortURL.'" target="_blank"><i class="fa fa-twitter-square"></i> Twitter</a>';
			$data .= '<a href="http://www.facebook.com/share.php?u='.$shortURL.'" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a>';
			$data .= '<a href="http://www.tumblr.com/share?v=3&amp;t=&amp;u='.$shortURL.'" target="_blank"><i class="fa fa-tumblr-square"></i> Tumblr</a>';
			$data .= '</p>';
			$result = array(
				'success' => true,
				'message' => 'Success',
				'data'=> $data
			);
		}else{	
			$result = array(
				'success' => true,
				'message' => 'Bad URL',
				'data'=> '<p class="text-center alert alert-danger">Bad URL</p>'
			);			
		}
	}else{
		$result = array(
			'success' => false,
			'message' => 'Bad Request',
			'data'=> '<p class="text-center alert alert-danger">Bad Request</p>'
		);
	}
	echo json_encode($result);
?>