<?php

  $mysql=new mysqli("localhost","root","","disdisar");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  };

  $mysql->query("set names utf8");
  $sqlstr="select * from ourpoint where point_type=\"creat\" limit 0,7";
  $result=$mysql->query($sqlstr);

  $myArray=array();
  while ($record = $result -> fetch_assoc()) {
    array_push($myArray,$record);
  };

  echo json_encode($myArray);

?>