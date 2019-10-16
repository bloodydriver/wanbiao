<?php 
    header('Access-Control-Allow-Origin: *');   //  设置Access-Control-Allow-Origin响应头，使任何一个地址发起的请求
    // 都能调用该接口
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');  // 设置需要支持的请求方式
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  // 允许请求字段

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
				header('location: index.html');
			} else {
				header('location: demo.html');
			}
		 }   
	}

 
?>