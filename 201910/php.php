<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

</head>

<body>
  <?php
  $arr = array(
    "aaa" => array(
      "a" => "111",
      "b" => "222"
    ),
    "bbb" => array(
      "a" => "333",
      "b" => "444"
    )
  );

  $a = array(0 => "apple", 1 => "banana");
  $b = array(1 => "banana", 0 => "apple");

  echo $arr['aaa']['a'];

  echo "<br />";

  print_r($arr);

  echo "<br />";
  var_dump($arr); // prints bool(false) as well

  echo "<br />";

  $b = array("0" => "apple", "1" => "banana");

  var_dump($a === $b); // prints bool(true)
  echo "<br />";
  foreach ($arr as $a) {
    print_r($a['a']);
    echo "<br />";
    foreach ($a as $v) {
      // print_r($v);
      echo "$v\n";
      echo "<br />";
    }
  }

  //$a = ['one' => 1, 'two' => 2, 'three' => 3, 'four' => 4];
  $a = array('one' => 1, 'two' => 2, 'three' => 3, 'four' => 44);
  print_r($a);

  $time = date('Y-m-d');
  $template = "<div>{$time}</div>";
  echo $template;

  ?>
</body>

</html>