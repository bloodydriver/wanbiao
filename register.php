<?php
	header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
                            
	$serve = "localhost";
    $name = "root";
    $password = "123456";
    $mysql = "message";
    
    $con = new mysqli($serve, $name, $password, $mysql);
    if($con->connect_error) {  
        die("连接失败".$con->connect_error);   
    }
    echo "连接成功";
    $pass = $_POST["password"];
    $phone = $_POST["phone"];
    
    $userInfo = "create table userInfo ( password char(100), phone char(100));";
    $insert = "insert into userInfo ( password, phone) values ('$pass','$phone');";   
       if($con->query($userInfo)===true) {
           echo "创建成功";
       }else {
           echo "创建失败";
       };

    if($con->query($insert)===true) {
        echo "注册成功";
        header('location:login.html');   
    }else {
        echo "注册失败";
        header('location:register.html'); 
    };


    $con->close();
?>