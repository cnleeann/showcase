    var descSVG = d3.select(".description")
                      .append("svg")
                      .attr("width", 1200)
                      .attr("height", 50)
                      .style("background-color","white")
                      .style("font-size", 16);

    var desc = descSVG.append("text")
                      .attr("text-anchor", "middle")
                      .attr("y", 25)
                      .attr("x", 600)
                      .text("Game Start");

    var field = d3.select(".field")
                      .append("svg")
                      .attr("width", 1200)
                      .attr("height", 500)
                      .style("background-color","green");
    var textLayer = field.append("svg")
                      .attr("width", 1200)
                      .attr("height", 500);

    // Left endzone line
    field.append("line")
             .attr("x1", 100)
             .attr("y1", 0)
             .attr("x2", 100)
             .attr("y2", 500)
             .attr("stroke-width",3)
             .attr("stroke","black");
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
             .attr("fill","red");
    // Right endzone line
    field.append("line")
             .attr("x1", 1100)
             .attr("y1", 0)
             .attr("x2", 1100)
             .attr("y2", 500)
             .attr("stroke-width",3)
             .attr("stroke","black");
    for(i=0;i<9;i++) {
      field.append("line")
              .attr("x1",(200+100*i))
              .attr("y1", 0)
              .attr("x2",(200+100*i))
              .attr("y2", 500)
              .attr("stroke-width",1)
              .attr("stroke","white");
    }
    for(i=0;i<10;i++) {
      field.append("line")
              .attr("x1",(150+100*i))
              .attr("y1", 0)
              .attr("x2",(150+100*i))
              .attr("y2", 500)
              .attr("stroke-width",1)
              .attr("stroke","white");
    }
    // yard hashes
    for(i=1;i<100;i++) {
      field.append("line")
              .attr("x1",(100+10*i))
              .attr("y1", 0)
              .attr("x2",(100+10*i))
              .attr("y2", 15)
              .attr("stroke-width",1)
              .attr("stroke","white");
    }
    for(i=1;i<100;i++) {
      field.append("line")
              .attr("x1",(100+10*i))
              .attr("y1", 485)
              .attr("x2",(100+10*i))
              .attr("y2", 500)
              .attr("stroke-width",1)
              .attr("stroke","white");
    }
    // Yardline labels
    for(i=0;i<9;i++) {
      field.append("text")
              .attr("text-anchor", "middle")
              .attr("y", 475)
              .attr("x", (200+100*i))
              .text((i+1) * 10)
              .style("font-size", 30)
              .style("fill", "white");
    }
    for(i=9;i>0;i--) {
      field.append("text")
              .attr("text-anchor", "middle")
              .attr("y", 45)
              .attr("x", (100+100*(10-i)))
              .text(i * 10)
              .style("font-size", 30)
              .style("fill", "white");
    }
    // Left endzone label
    textLayer.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 50)
            .attr("x", -250)
            .attr("transform", "rotate(-90)")
            .text("BAL")
            .style("font-size", 30)
            .style("fill", "white");
    // Right endzone label
    textLayer.append("text")
            .attr("text-anchor", "middle")
            .attr("y", -1150)
            .attr("x", 250)
            .attr("transform", "rotate(90)")
            .text("SF")
            .style("font-size", 30)
            .style("fill", "white");