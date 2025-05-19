/*
	ZeroFour by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"]
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    offsetY: -22,
    mode: "fade",
    noOpenerFade: true,
    speed: 300,
    detach: false
  });

  // Nav.

  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible"
    });
})(jQuery);

var rater = require("rater-js");

var myRater = rater({
  element: document.querySelector("#rater"),
  rateCallback: function rateCallback(rating, done) {
    //make async call to server however you want
    //in this example we have a 'service' that rate and returns the average rating
    myDataService.rate(rate).then(
      function (avgRating) {
        //update the avarage rating with the one we get from the server
        myRater.setRating(avgRating);
        //we could disable the rater to prevent another rating
        //if we dont want the user to be able to change their mind
        myRater.disable();
        //dont forget to call done
        done();
      },
      function (error) {
        //handle the error
        //dont forget to call done
        done();
      }
    );
  }
});
