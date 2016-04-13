
    var padding = {top: 70, right: 30, bottom: 20, left: 70},
        w = 300,
        h = 300;
    //Create SVG element
    var chart1 = d3.select(".charts")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

    // Declare Y Scale and Axis
    var yScale = d3.scale.linear()
            .domain([0, 500])
            .range([h - padding.top, padding.bottom]);
    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);

    // Declare X Scale and Axis
    var xScale = d3.scale.ordinal()
            .domain(["BAL", "SF"])
            .rangePoints([padding.left, w - padding.right], 1.5);
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");

    var updateChart1 = function(play) {
      balYards.attr("height", h - padding.top - yScale(parseInt(play["balYards"])))
                .attr("y", yScale(play["balYards"]));
      sfYards.attr("height", h - padding.top - yScale(parseInt(play["sfYards"])))
                  .attr("y", yScale(play["sfYards"]));
    }

    var balYards = chart1.append("rect")
                    .attr("x", xScale("BAL") - 25)
                    .attr("y", h - yScale(0) - padding.top)
                    .attr("height", yScale(0))
                    .attr("width", 50)
                    .attr("fill", "blue");

    var sfYards = chart1.append("rect")
                    .attr("x", xScale("SF") - 25)
                    .attr("y", h - yScale(0) - padding.top)
                    .attr("height", yScale(0))
                    .attr("width", 50)
                    .attr("fill", "red");

    // Y Axis
    chart1.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + ",0)")
            .call(yAxis);

    // Y Axis label
    chart1.append("text")
            .attr("class", "axisLabel")
            .attr("text-anchor", "middle")
            .attr("y", 20)
            .attr("x", h / -2)
            .attr("transform", "rotate(-90)")
            .text("Yards Gained");

    // X Axis
    chart1.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding.top) + ")")
            .call(xAxis);

    // Create SVG element
    var chart2 = d3.select(".charts")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            // .style("margin-top",300);
    // Declare Y Scale and Axis
    var pyScale = d3.scale.linear()
            .domain([0, 100])
            .range([h - padding.top, padding.bottom]);
    var pyAxis = d3.svg.axis()
            .scale(pyScale)
            .orient("left")
            .ticks(5);

    // Declare X Scale and Axis
    var pxScale = d3.scale.ordinal()
            .domain(["BAL", "SF"])
            .rangePoints([padding.left, w - padding.right], 1.5);
    var pxAxis = d3.svg.axis()
            .scale(pxScale)
            .orient("bottom");

    var updateChart2 = function(play) {
      balPlays.attr("height", h - padding.top - pyScale(parseInt(play["balPlays"])))
                .attr("y", pyScale(play["balPlays"]));
      sfPlays.attr("height", h - padding.top - pyScale(parseInt(play["sfPlays"])))
                  .attr("y", pyScale(play["sfPlays"]));
    }

    var balPlays = chart2.append("rect")
                    .attr("x", pxScale("BAL") - 25)
                    .attr("y", h - pyScale(0) - padding.top)
                    .attr("height", pyScale(0))
                    .attr("width", 50)
                    .attr("fill", "blue");

    var sfPlays = chart2.append("rect")
                    .attr("x", pxScale("SF") - 25)
                    .attr("y", h - pyScale(0) - padding.top)
                    .attr("height", pyScale(0))
                    .attr("width", 50)
                    .attr("fill", "red");

    // Y Axis
    chart2.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + ",0)")
            .call(pyAxis);

    // Y Axis label
    chart2.append("text")
            .attr("class", "axisLabel")
            .attr("text-anchor", "middle")
            .attr("y", 20)
            .attr("x", h / -2)
            .attr("transform", "rotate(-90)")
            .text("Offensive Plays");

    // X Axis
    chart2.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding.top) + ")")
            .call(pxAxis);

