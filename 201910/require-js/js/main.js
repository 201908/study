define("glogin", ['jquery'], function ($) {

  var startApp = {};
  var googleUser = {};

  var clientID = "69833259561-3lea6hdregtgofoj6p8ue99fqspp5qc5.apps.googleusercontent.com";

  startApp.onSuccess = function (googleUser) {
    var profile = googleUser.getBasicProfile();
    var authProfile = googleUser.getAuthResponse();

    var userName = profile.getName();
    var userImage = profile.getImageUrl();
    var userEmail = profile.getEmail();
    var idToken = authProfile.id_token;

    var flag = true;

    if (userEmail && idToken) {
      console.log(userEmail)
      window.location.reload(true);
      // $.ajax({
      //   url: "/action.do",
      //   data: {
      //     userName: userName,
      //     firstName: userName,
      //     lastName: userName,
      //     email: userEmail,
      //     idToken: idToken,
      //     userType: '3'
      //   },
      //   dataType: "json",
      //   tyep: "post",
      //   success: function (data) {
      //     if (data.success == true) {
      //       window.location.reload(true);
      //     } else {
      //       flag = false;
      //     }
      //   }

      // });
    }

    if (!flag) {
      alert.alert("XXX.22");
    }
  };

  startApp.onFailure = function (error) {
    console.log(error);
    alert("222");
  };

  startApp.init = function () {
    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
        client_id: clientID,
        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
      });

      auth2.attachClickHandler('googleLogin', {}, startApp.onSuccess, startApp.onFailure);
    });
  };

  return startApp;
});

require(["glogin"], function (main) {
  main.init();
});