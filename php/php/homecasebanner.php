<?php

  $mysql=new mysqli("localhost","root","","disdisar");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  };

  $mysql->query("set names utf8");
  $sqlstr="select * from banner where banner_type=\"homecasebanner\"";
  $result=$mysql->query($sqlstr);

  $myArray=array();
  while ($record = $result -> fetch_assoc()) {
    array_push($myArray,$record);
  };

  echo json_encode($myArray);

?>