<?php
	error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
	$url = explode('/',"$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
	$show_my_site = false;
	$alert='';
	if(sizeof($url)>1 && $url[1]!='' && $url[1] != 'index.php'){		
		$id = $url[1];		
		$header = get_headers("http://tinyurl.com/".$id,1);
		if(!$header){
			$show_my_site = true;
			$alert="Bad URL!";
		}else{
			$response_code = explode(' ',$header[0]);
			$response_code = $response_code[1];
			if($response_code == 302 || $response_code == 301){
				if(is_array($header['Location'])){
					header('Location: '.$header['Location'][0]);
				}else{
					header('Location: '.$header['Location']);
				}			
			}else{
				$show_my_site = true;
				if($response_code==404){
					$alert="The requested URL was not found!";
				}else if($response_code==200){
					$alert="The requested URL is a link of TinyURL's site";
				}			
			}
		}			
	}else{
		$show_my_site = true;
	}	
	if($show_my_site){
?>
	<html lang="en">
	  <head>
		<title>URL Shortener - Get short link on Hura.Ga</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<style>		  
		  .navbar {
			margin-bottom: 0;
			border-radius: 0;
		  }		  
		  .row.content {height: 450px}
		  .middle {
			padding-top: 20px;
			background-color: #f1f1f1;
			height: 100%;
		  }		  
		  .well-ads img{
			  width:100%;		  
		  }
		  #result-box{
			 background:#fdfdbd;
			 padding:10px;
			 margin-top:20px;
		  }		  
		  footer {
			background-color: #555;
			color: white;
			padding: 15px;
		  }
		  @media screen and (max-width: 767px) {
			.sidenav {
			  height: auto;
			  padding: 15px;
			}
			.row.content {height:auto;} 
		  }
		  i.fa{
			  margin-left:3px;
		  }
		</style>
		<script>
			function validatebeforesubmit(thisform) {
				$("#result-box").html('<p class="text-center"><img src="http://www.shopifytips.com/demo/shorturl-expander/img/loading.gif" border="0"></p>');
				var longlink = thisform.longlink.value;
				var dataString = 'longlink='+ longlink;
				$.ajax({
					type: "POST",
					url: "/process.php",
					data: dataString,
					cache: false,
					success: function(result){
						$("#result-box").html(result.data);
					}
				});
				$("#result-box").show();
				return false;
			} 
		</script>
	  </head>
	  <body>
		<nav class="navbar navbar-inverse">
		  <div class="container-fluid">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="#">HURA.GA</a>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
			  <ul class="nav navbar-nav">
				<li class="active"><a href="/">Home</a></li>
			  </ul>
			</div>
		  </div>
		</nav>
		<br /><br />
		<div class="container-fluid text-center">
		  <div class="row content">
			<div class="col-sm-3 sidenav">
			  <div class="well">
				<p>ADS</p>
			  </div>
			  <div class="well-ads">
				<a href="http://hura.ga/yddochck" target="_blank"><img src="http://www.shopifytips.com/wp-content/uploads/2017/07/codester_300x250.png"></a>
			  </div>
			</div>
			<div class="col-sm-6 well text-left middle">
			  <h2>Simplify your links</h2>
			  <br />
			  <form action="" method="POST" onsubmit="return validatebeforesubmit(this)">
				<div class="form-group">
				  <label for="url">URL Shortener - Get short link on Hura.Ga</label>
				  <input type="url" class="form-control" name="longlink" id="url" placeholder="Your original URL here">
				</div>
				<p class="text-center"><button type="submit" value="submit" class="btn btn-success">Shorten URL</button></p>
			  </form>
			  
			  <div id="result-box" <?php if($alert == ''){ ?>style="display:none;"<?php } ?> ><?php echo $alert; ?></div>		  
			</div>
			
			<div class="col-sm-3 sidenav">
			  <div class="well">
				<p>ADS</p>
			  </div>
			  <div class="well-ads">
				<p><a href="http://hura.ga/yddochck" target="_blank"><img src="http://www.shopifytips.com/wp-content/uploads/2017/07/codester_300x250.png"></a></p>
			  </div>
			  </div>
			</div>
		  </div>
		</div>
		<br /><br />
		<footer class="container-fluid text-center">
		<p class="copyright text-center">
			Copyright &copy <?php echo date('Y'); ?> by <a href="http://www.hura.ga" target="_blank">Hura.Ga</a>. All Rights Reserved.<br>
			Developed and Designed by <a href="http://facebook.com/huynhmaianhkiet" target="_blank">Huynh Mai Anh Kiet</a>.
		</p>
		</footer>
	  </body>
	</html>
<?php } ?>