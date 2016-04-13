    var setPlay = function(p) {
      $( "#slider" ).slider( "option", "value", p );
      if (p == 1 | p == 168) {
        stopTimer();
      }
    }

    var initializeTimer = function() {
      timer = setInterval(function () {startTimer()}, currentSpeed);
    }
    
    var stopTimer = function() {
      clearInterval(timer)
    };

    var startTimer = function() {
      i++;
      setPlay(i);
    };

    var speedUpTimer = function() {
      stopTimer()
      var newSpeed = currentSpeed / 2
      currentSpeed = newSpeed
      timer = setInterval(function () {startTimer()}, newSpeed);
    }

    var currentSpeed = 1000
    var newSpeed = 1000
    var timer = setInterval(function () {startTimer()}, currentSpeed);
    stopTimer()


    $( "#slider" ).slider({
      min: 1,
      max: 168,
      animate: "fast",
      slide: function( event, ui ) {},
      change: function( event, ui ) {}
    });

    $( "#slider" ).on( "slide", function( event, ui ) {
      console.log("new slider value: "+ui.value)
      executePlay(ui.value, g, field)
      stopTimer()
      var options = {
          label: "play",
          icons: {
            primary: "ui-icon-play"
          }
        };
        $( "#play" ).button( "option", options );
    });
    $( "#slider" ).on( "slidechange", function( event, ui ) {
      console.log("slider changed: "+ui.value)
      executePlay(ui.value, g, field)
    });


    $(function() {
    $( "#beginning" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-start"
      }
    })
    .click(function() {
      i--;
      setPlay(i);
    });
    $( "#play" ).button({
      text: false,
      icons: {
        primary: "ui-icon-play"
      }
    })
    .click(function() {
      var options;
      if ( $( this ).text() === "play" ) {
        options = {
          label: "pause",
          icons: {
            primary: "ui-icon-pause"
          }
        };
        currentSpeed = 1000;
        initializeTimer();
      } else {
        options = {
          label: "play",
          icons: {
            primary: "ui-icon-play"
          }
        };
        stopTimer();
      }
      $( this ).button( "option", options );
    });
    $( "#forward" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-next"
      }
    })
    .click(function() {
      if ( $( "#play" ).button().text() === "play" ) {
        var options = {
          label: "pause",
          icons: {
            primary: "ui-icon-pause"
          }
        };
        $( "#play" ).button( "option", options );
      }
      speedUpTimer()
    });
    $( "#end" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-end"
      }
    })
    .click(function() {
      i++
      setPlay(i);
    });
  });
