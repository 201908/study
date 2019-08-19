var module1 = (function () {
  var _count = 0;
  function printHenry() {
    console.log("外部访问不到这个属性_count");
  }

  function printWeddy() {
    console.log("Weddy最喜欢的电影是大电影!");
  }

  return {
    m1: printHenry,
    m2: printWeddy
  }
})()