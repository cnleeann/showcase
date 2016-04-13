//Scales
    // Left to right
    var scaleLr = d3.scale.linear()
            .domain([0, 100])
            .range([1100, 100])
    // Right to left
    var scaleRl = d3.scale.linear() 
            .domain([0, 100])
            .range([100, 1100])

    // Football svg
    // var football = field.append("circle")
    //                         .attr("cx", scaleLr(50))
    //                         .attr("cy", 250)
    //                         .attr("r", 10)
    //                         .style("fill", "brown");
    var football = field.append("svg:image")
                       .attr('x', scaleLr(50) - 10)
                       .attr('y', 235)
                       .attr('width', 35)
                       .attr('height', 35)
                       .attr("xlink:href","images/football.png")
    var drawPunt = function(kickingScale, recievingScale, prevPlay, currentPlay, svg) {
      if (kickingScale === scaleLr) {
          svg.append("rect")
                      .attr("x", kickingScale(prevPlay["ydline"]))
                      .attr("y",200)
                      .attr("width", recievingScale(currentPlay["ydline"]) - kickingScale(parseInt(prevPlay["ydline"]) - arrowWidth))
                      .attr("height",100)
                      .style("fill", "cyan");
          textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 255)
                      .attr("x", kickingScale(parseInt(prevPlay["ydline"]) + 3))
                      .text("Punt")
                      .style("fill", "white")
                      .style("font-size", 14);
          svg.append("path")
                      .attr("d", "M"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 200 L"+recievingScale(currentPlay["ydline"])+" 250 L"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");
        } else {
          svg.append("rect")
                      .attr("x", recievingScale(currentPlay["ydline"] - parseInt(arrowWidth)))
                      .attr("y",200)
                      .attr("width", kickingScale(parseInt(prevPlay["ydline"]) - arrowWidth) - recievingScale(currentPlay["ydline"]))
                      .attr("height",100)
                      .style("fill", "cyan");
          textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 255)
                      .attr("x", kickingScale(parseInt(prevPlay["ydline"]) + 3))
                      .text("Punt")
                      .style("fill", "white")
                      .style("font-size", 14);
          svg.append("path")
                      .attr("d", "M"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 200 L"+recievingScale(currentPlay["ydline"])+" 250 L"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");
        }
    }
    var drawKick = function(kickingScale, recievingScale, currentPlay, svg) {
      if (kickingScale === scaleLr) {
          svg.append("rect")
                      .attr("x", kickingScale(65))
                      .attr("y",200)
                      .attr("width", recievingScale(currentPlay["ydline"]) - kickingScale(65 - arrowWidth))
                      .attr("height",100)
                      .style("fill", "cyan");
          textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 255)
                      .attr("x", kickingScale(70))
                      .text("Kickoff")
                      .style("fill", "white")
                      .style("font-size", 14);
          svg.append("path")
                      .attr("d", "M"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 200 L"+recievingScale(currentPlay["ydline"])+" 250 L"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");
        } else {
          svg.append("rect")
                      .attr("x", recievingScale(currentPlay["ydline"] - parseInt(arrowWidth)))
                      .attr("y",200)
                      .attr("width", kickingScale(65 - arrowWidth) - recievingScale(currentPlay["ydline"]))
                      .attr("height",100)
                      .style("fill", "cyan");
          textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 255)
                      .attr("x", kickingScale(70))
                      .text("Kickoff")
                      .style("fill", "white")
                      .style("font-size", 14);
          svg.append("path")
                      .attr("d", "M"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 200 L"+recievingScale(currentPlay["ydline"])+" 250 L"+(recievingScale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");
        }
        
    }

    var drawFirstDownLine = function(currentPlay) {
      var scale = scaleLr
      if (currentPlay["off"] !== "BAL") {
        scale = scaleRl
      }
      textLayer.append("line")
             .attr("x1", scale(parseInt(currentPlay["ydline"] - currentPlay["togo"])))
             .attr("y1", 0)
             .attr("x2", scale(parseInt(currentPlay["ydline"] - currentPlay["togo"])))
             .attr("y2", 500)
             .attr("stroke-width",2)
             .attr("stroke","yellow");
    }

    var arrowWidth = 3
    var drawPlayHelper = function(direction, currentPlay, prevPlay, scale, color, svg, i) {
      var playLength = parseInt(prevPlay["ydline"] - currentPlay["ydline"]) // Previous ydline - current
      if (prevPlay["description"].indexOf("extra point") !== -1) {
          console.log("extra point")
          textLayer.append("text")
                        .attr("text-anchor", "middle")
                        .attr("y", 255)
                        .attr("x", scale(parseInt(currentPlay["ydline"]) + 7))
                        .text("extra point attempt")
                        .style("fill", "white")
                        .style("font-size", 14);
          return
      }

      if (currentPlay["togo"] !== ""){
        drawFirstDownLine(currentPlay)
      }

      if (playLength === 0) {
        // console.log("no gain on play")
        textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 275)
                      .attr("x", scale(currentPlay["ydline"]))
                      .text("X")
                      .style("fill", "white")
                      .style("font-size", 75);
        textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 300)
                      .attr("x", scale(currentPlay["ydline"]))
                      .text("No gain")
                      .style("fill", "white")
                      .style("font-size", 14);
      } else if (playLength > 0) {
        // console.log("gain of "+playLength+" yards on play")
        if (direction === "lr") {
          svg.append("rect")
                      .attr("x", scale(prevPlay["ydline"]))
                      .attr("y",200)
                      .attr("width",scale(currentPlay["ydline"]) - scale(parseInt(prevPlay["ydline"]) - arrowWidth))
                      .attr("height",100)
                      .style("fill",color);
        } else {
          svg.append("rect")
                      .attr("x", scale(parseInt(currentPlay["ydline"]) + arrowWidth))
                      .attr("y",200)
                      .attr("width",scale(prevPlay["ydline"]) - scale(parseInt(currentPlay["ydline"]) + arrowWidth))
                      .attr("height",100)
                      .style("fill",color);
        }
        svg.append("path")
                      .attr("d", "M"+(scale(parseInt(currentPlay["ydline"]) + arrowWidth))+" 200 L"+scale(currentPlay["ydline"])+" 250 L"+(scale(parseInt(currentPlay["ydline"]) + arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");

        if (prevPlay["description"].indexOf("TOUCHDOWN") !== -1) {
          // console.log("TOUCHDOWN")
          textLayer.append("text")
                        .attr("text-anchor", "middle")
                        .attr("y", 325)
                        .attr("x", scale(parseInt(currentPlay["ydline"]) + 7))
                        .text("Touchdown!")
                        .style("fill", "white")
                        .style("font-size", 14);
        }
        if (prevPlay["description"].indexOf("GOOD") !== -1) {
          // console.log("FG GOOD")
          textLayer.append("text")
                        .attr("text-anchor", "middle")
                        .attr("y", 325)
                        .attr("x", scale(parseInt(currentPlay["ydline"]) + 7))
                        .text("Field Goal!")
                        .style("fill", "white")
                        .style("font-size", 14);
        }
      } else {
        // console.log("loss of "+playLength+" yards on play")
        if (direction === "rl") {
          svg.append("rect")
                      .attr("x", scale(prevPlay["ydline"]))
                      .attr("y",200)
                      .attr("width",scale(currentPlay["ydline"]) - scale(parseInt(prevPlay["ydline"]) + arrowWidth))
                      .attr("height",100)
                      .style("fill",color);
        } else {
          svg.append("rect")
                      .attr("x", scale(parseInt(currentPlay["ydline"]) - arrowWidth))
                      .attr("y",200)
                      .attr("width",scale(prevPlay["ydline"]) - scale(parseInt(currentPlay["ydline"]) - arrowWidth))
                      .attr("height",100)
                      .style("fill",color);
        }

        textLayer.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 325)
                      .attr("x", scale(currentPlay["ydline"]))
                      .text("Loss of "+parseInt(-1*playLength)+" yards")
                      .style("fill", "white")
                      .style("font-size", 14);
        
        svg.append("path")
                      .attr("d", "M"+(scale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 200 L"+scale(currentPlay["ydline"])+" 250 L"+(scale(parseInt(currentPlay["ydline"]) - arrowWidth))+" 300 Z")
                      .attr("fill", "yellow");
      }
    }

    var drawPlay = function(n,arr,svg) {
      svg.selectAll("rect").remove();
      svg.selectAll("path").remove();
      textLayer.selectAll("text").remove();
      textLayer.selectAll("line").remove();
      redrawEndZone();

      var currentPlay = arr[n];
      var prevPlay = arr[n-1];
      
      if (currentPlay["off"] !== prevPlay["off"]) { // change in posession
        if (currentPlay["off"] === "BAL") { 
          football.attr("x", scaleLr(currentPlay["ydline"]) - 15) // use BAL scale 
        } else { 
          football.attr("x", scaleRl(currentPlay["ydline"]) - 15) // use SF scale
        }

        // Check for kick
        if (prevPlay["description"].indexOf("kick") !== -1) {
          if (prevPlay["off"] === "BAL") {
            drawKick(scaleLr, scaleRl, currentPlay, svg)
            return
          } else {
            drawKick(scaleRl, scaleLr, currentPlay, svg)
            return
          }
        }

        // Check for punt
        if (prevPlay["description"].indexOf("punt") !== -1) {
            if (prevPlay["off"] === "BAL") {
            drawPunt(scaleLr, scaleRl, prevPlay, currentPlay, svg)
            return
          } else {
            drawPunt(scaleRl, scaleLr, prevPlay, currentPlay, svg)
            return
          }
        }
      } else {
        if(currentPlay["off"] === "BAL") {
          football.attr("x", scaleLr(currentPlay["ydline"]) - 15)
          drawPlayHelper("lr", currentPlay, prevPlay, scaleLr, "blue", svg, n);
        } else {
          football.attr("x", scaleRl(currentPlay["ydline"]) - 15)
          drawPlayHelper("rl", currentPlay, prevPlay, scaleRl, "red", svg, n);
        }
      }
    }

    var redrawEndZone = function() {
      field.append("rect")
             .attr("x", 0)
             .attr("y", 0)
             .attr("height", 500)
             .attr("width", 100)
             .attr("fill","blue");
     field.append("rect")
             .attr("x", 1100)
             .attr("y", 0)
             .attr("height", 500)
             .attr("width", 100)
             .attr("fill","red")
             .attr("stroke-width",3)
             .attr("stroke","black");
    // Left endzone label
    field.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 50)
            .attr("x", -250)
            .attr("transform", "rotate(-90)")
            .text("BAL")
            .style("font-size", 30)
            .style("fill", "white");
    // Right endzone label
    field.append("text")
            .attr("text-anchor", "middle")
            .attr("y", -1150)
            .attr("x", 250)
            .attr("transform", "rotate(90)")
            .text("SF")
            .style("font-size", 30)
            .style("fill", "white");
    }