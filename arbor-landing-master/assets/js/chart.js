window.onload = function() {
    CanvasJS.addColorSet("chart1",
                [//colorSet Array
                "#BBBBBB",
                "#00FF7F",
                "#FF3300",
                "#002200",
                // "#1E90FF"                
                ]);
    CanvasJS.addColorSet("chart2",
    [//colorSet Array

    "#BBBBBB",
    "#FF3300",
    "#002200",
    "#1E90FF"               
    ]);
    var chart1 = new CanvasJS.Chart("chart1", {
        animationEnabled: true,
        colorSet: "chart1",
        width:500,
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 15, label: "Business"},
                {y: 5, label: "Households"},
                {y: 50, label: "Volunteers"},
                {y: 25, label: "Students"}
            ]
        }]
    });

    var chart2 = new CanvasJS.Chart("chart2", {
        animationEnabled: true,
        colorSet:"chart2",
        width:400,
        data: [{
            type: "pie",
            startAngle: 240,
           
            yValueFormatString: "##0.00\"%\"",
           zIndex:"1",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 540, label: "Papers"},
                {y: 827, label: "Bottles"},
                {y: 1775, label: "Plastic"},
                {y: 580, label: "Nylon bags"},
            ]
        }]
    });

    chart1.render();
    chart2.render();
}
var obj = document.getElementById('chart1');
chart1.onmouseover = function(){
               obj.style.zIndex="-1";
            };
