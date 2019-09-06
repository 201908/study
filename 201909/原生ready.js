!function(e,t){var n=t.documentElement,d=e.devicePixelRatio||1;function i(){var e=n.clientWidth;750<e&&(e=750);var t=e/18.75;n.style.fontSize=t+"px"}if(function e(){t.body||t.addEventListener("DOMContentLoaded",e)}(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",function(e){e.persisted&&i()}),2<=d){var a=t.createElement("body"),o=t.createElement("div");o.style.border=".5px solid transparent",a.appendChild(o),n.appendChild(a),1===o.offsetHeight&&n.classList.add("hairlines"),n.removeChild(a)}}(window,document);
function winReady(fn){
  if(document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
          //注销事件, 避免反复触发
          document.removeEventListener('DOMContentLoaded',arguments.callee, false);
          fn();            //执行函数
      }, false);
  }else if(document.attachEvent) {        //IE
      document.attachEvent('onreadystatechange', function() {
          if(document.readyState == 'complete') {
              document.detachEvent('onreadystatechange', arguments.callee);
              fn();        //函数执行
          }
      });
  }
};
winReady(function(){
  var href=document.querySelector(".greeting .text-a a").getAttribute('href')
  window.location.href=href
})