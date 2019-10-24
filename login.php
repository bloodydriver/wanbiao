<?php 
    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');  
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
    $serve = "localhost";
    $name = "root";
    $password = "123456";
    $mysql = "message";
    $con = new mysqli($serve, $name, $password, $mysql);

    if($con->connect_error) {   // 返回数据库连接的错误类型
        die("连接失败".$con->connect_error);   // 函数输出一条信息，同时推出当前脚本;
    }
    echo "连接成功";

	$phone = $_POST["phone"];
	$pass = $_POST["password"];
	
	$sql = "select * from userinfo where phone=$phone ;";
	$test = $con->query($sql);
	if ($test) {
		 while($arr=$test->fetch_assoc()) {
			 if($pass==$arr["password"]){
				session_start();
				$_SESSION["user"]=$phone;
				header('location:index.html');
			} else {
				header('location:login.html');
			}
		 }   
	}
?>