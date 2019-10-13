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

    // 检测连接是否成功
    if($con->connect_error) {   // 返回数据库连接的错误类型
        die("连接失败".$con->connect_error);   // 函数输出一条信息，同时推出当前脚本;
    }
    echo "连接成功";
    $user = $_POST["user"];
    $pass = $_POST["password"];
    $phone = $_POST["phone"];
    $people = $_POST["people"];

// 	$user = 1515;
//  $pass = 123456;
//  $phone = 15038174722;
//  $people = 15645623154;
    
    $userInfo = "create table userInfo (name char(100), password char(10), phone char(11), people char(11));";
    $insert = "insert into userInfo (name, password, phone, people) values ('$user',$pass,$phone,$people);";

    //    if($con->query($userInfo)===true) {
    //        echo "创建成功";
    //    }else {
    //        echo "创建失败";
    //    };

    if($con->query($insert)===true) {
        echo "注册成功";
        header('location:demo.html');   // 是控制php进行跳转   一般我们都是跳转php文件  也可以跳转html文件
    }else {
        echo "插入数据失败".$con->error;
    };


    $con->close();
?>