<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Film855 Video Embedding</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Tool855 Video Embedding </a>
            </div>
            <!-- Top Menu Items -->

            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-windows"></i> Contact Us <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="https://www.facebook.com/Tool855-Video-Embedding-1040268649439467/"><i class="fa fa-facebook-square"></i> Facebook</a>
                        </li>
<li>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Version 1.1.7</a>
                        </li>
                        <li>
                            <a href="#"></i><center>Sboy Editon</center></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li class="active">
                        <a href="/embed/index.php"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="/embed/tool855guide.html"><i class="fa fa-fw fa-bar-chart-o"></i> How To Use</a>
                    </li>
                    <li>

                    <li>
                        <a href="/embed/tool855news.html"><i class="fa fa-fw fa-wrench"></i> News</a>
                    </li>

                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i>
                                    <li>Powerful Video Embedding Tool, 
                                         <a href="https://www.facebook.com/Tool855-Video-Embedding-1040268649439467">Contact us</a>
                                          &nbsp;to customize your ads and more
                                    </li><br />
                                 <i class="fa fa-life-ring"></i><li>Support: Google Drive, Google Photos, Picasa Video, Facebook, Youtube, mp4upload,Hosted Video(.mp4)</li>
                            </li>
                        </ol>
                       
                    </div>
                </div>

            <div class="row">
                    <div class="col-lg-6">
                        <div class="alert alert-info alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i class="fa fa-info-circle"></i>  <strong>Don't know how it work? Click on "How to use" </strong>                     </div>
                    </div>
                </div>

                <div class="row">
                <div class="col-md-6">
                <form action="" method="post">
  <div class="form-group">
    <input type="text" name="url" class="form-control" id="exampleInputEmail1" placeholder="Input Your Video Link Here">
  </div>
  <div class="form-group">
    <input type="text" name="suben" class="form-control" id="exampleInputPassword1" placeholder="paste English subtitle link here (Optional)">
  </div>
<div class="form-group">
    <input type="text" name="subkh" class="form-control" id="exampleInputPassword1" placeholder="paste Other subtitle link here (Optional)">
</div>
<div class="form-group">
<input type="text" name="thumb" class="form-control" id="exampleInputPassword1" placeholder="paste thumbnail url here (Optional)">

  </div>
  <input type="submit" name="submit" value="Generate" class="btn btn-success"/>
</form>
</div>
<div class="col-md-6">
<?php
if(isset($_POST['submit'])){
 $u =  ($_POST['url']);
 if (strpos($u, 'youtube') !== false) {
    $u= "youtube/".$u;
    $subt = ($_POST['suben']);
$domain = "film855hd.com";
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

echo '<textarea id="bar" onClick="this.select();" class="form-control" rows="4">
<iframe class="embed-responsive-item" style="border:0px #FFFFFF none;" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" src="//film855hd.com/embed/wp-embed.php?url='.$urlen.'" allowfullscreen></iframe>
</textarea><br/><button class="btn btn-success" data-clipboard-target="#bar">Copy</button>';

echo '<textarea id="bar" onClick="this.select();" class="form-control" rows="4">
//film855hd.com/embed/wp-embed.php?url='.$urlen.'
</textarea><br/><button class="btn btn-success" data-clipboard-target="#bar">Copy</button>';

}else{
    $subt = ($_POST['suben']);
    $subtkh = ($_POST['subkh']);
    $thumb = ($_POST['thumb']);
$domain = "film855hd.com";
$inboxf = $u.'@'.$subt.'@'.$subtkh.'@'.$thumb.'@'.$domain;

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

echo '<textarea id="bar" onClick="this.select();" class="form-control" rows="4">
<iframe class="ytplayer" width="640" height="360" style="border:0px #FFFFFF none;" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" src="//film855hd.com/embed/wp-embed.php?url='.$urlen.'" allowfullscreen></iframe>
</textarea><br/><button class="btn btn-success" data-clipboard-target="#bar">Copy</button>';

echo '<textarea id="bar" onClick="this.select();" class="form-control" rows="4">
//film855hd.com/embed/wp-embed.php?url='.$urlen.'
</textarea><br/><button class="btn btn-success" data-clipboard-target="#bar">Copy</button>';

}

}


?>
    
    <!-- 2. Include library -->
    <script src="dist/clipboard.min.js"></script>

    <!-- 3. Instantiate clipboard -->
    <script>
    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>
</div>
                </div>
                <!-- /.row -->
                <br/>
                <div class="row">
                <div class="col-md-8">
 <?php 
if(isset($_POST['submit'])){
echo '<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="/embed/wp-embed.php?url='.$urlen.'" allowfullscreen></iframe></div>';
}
   ?>  </div>
</div>
                </div>
                <!-- /.row -->

                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Morris Charts JavaScript -->
    <script src="js/plugins/morris/raphael.min.js"></script>
    <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>

</body>

</html>
