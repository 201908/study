<?php
$arr = array(
  "aaa" => array(
    "a" => "111",
    "b" => "222"
  )
);

$a = array(0 => "apple", 1 => "banana");
$b = array(1 => "banana", 0 => "apple");

echo $arr['aaa']['a'];
var_dump($arr['aaa']['a']); // prints bool(false) as well

$b = array("0" => "apple", "1" => "banana");

var_dump($a === $b); // prints bool(true)
