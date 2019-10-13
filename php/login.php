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
    
    echo $phone;
    echo $pass;

    $select = "select * from userinfo;";
    $test = $con->query($select);
    if($test->num_rows>0) {
        while($arr=$test->fetch_assoc()) {
            // echo $arr["name"].$arr["password"];
            if($phone==$arr["phone"] && $pass==$arr["password"]) {
                echo "登录成功";
                
                header('location: xq.html');
                // if(isset($_REQUEST["rem"])) {
                //     $rem = $_REQUEST["rem"];
                //     if($rem==1) {
                        // setcookie("username",$_REQUEST["admin"], time()+60*60*24*7);
                        // setcookie("password",$_REQUEST["pass"], time()+60*60*24*7);

                    //     $txt = $_REQUEST["admin"]." ".$_REQUEST["pass"];
                    //     setcookie("aaa", $txt, time()+60*60*24*7);
                    // }
                
            } else {
                echo "登陆失败";
            }
        }
    };
?>