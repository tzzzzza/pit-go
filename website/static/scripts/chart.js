chartOption =  {
    'width' : 1000,
    'height' : 220,
    timeline: { 
        colorByRowLabel: true,
    },

    alternatingRowStyle: false,
    hAxis: {
        format: 'HH:mm',  // Format time as hours and minutes with AM/PM
        ticks: [
            new Date(0, 0, 0, 8, 0, 0),
            new Date(0, 0, 0, 8, 30, 0),
            new Date(0, 0, 0, 9, 0, 0),
            new Date(0, 0, 0, 9, 30, 0),
            new Date(0, 0, 0, 10, 0, 0),
            new Date(0, 0, 0, 10, 30, 0),
            new Date(0, 0, 0, 11, 0, 0),
            new Date(0, 0, 0, 11, 30, 0),
            new Date(0, 0, 0, 12, 0, 0),
            new Date(0, 0, 0, 12, 30, 0),
            new Date(0, 0, 0, 13, 0, 0),
            new Date(0, 0, 0, 13, 30, 0),
            new Date(0, 0, 0, 14, 0, 0),
            new Date(0, 0, 0, 14, 30, 0),
            new Date(0, 0, 0, 15, 0, 0),
            new Date(0, 0, 0, 15, 30, 0),
            new Date(0, 0, 0, 16, 0, 0),
            new Date(0, 0, 0, 16, 30, 0),
            new Date(0, 0, 0, 17, 0, 0)
        ],
        minValue: new Date(0, 0, 0, 8, 0, 0),  // Set the minimum time
        maxValue: new Date(0, 0, 0, 17, 30, 0),  // Set the maximum time
        textStyle: {
            fontSize: 50, // Font size for the horizontal axis labels
        },
    },
    vAxis: {
        title: 'Y-Axis Label',
        textStyle: {
          fontSize: 50, // Font size for the vertical axis labels
        },
    },
}

chartData = [
    [
        [ 'Magnolia Room', new Date(0,0,0,8,0,0),  new Date(0,0,0,13,30,0), ],
        [ 'Willow Room', new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0), ],
        [ 'KTV Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0), ],
        [ 'Massage Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0),],
        [ '1234 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0),],
        [ '5678 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0),],
        [ '9190 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0),],
    ],
    [
        [ 'Magnolia Room', new Date(0,0,0,8,0,0),  new Date(0,0,0,13,30,0), ],
        [ 'Willow Room', new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0), ],
        [ 'KTV Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0), ],
        [ 'Massage Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,8,0,0),],
        [ '1234 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,10,0,0),],
        [ '5678 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,10,0,0),],
        [ '9190 Room' , new Date(0,0,0,8,0,0), new Date(0,0,0,10,0,0),],
    ]
];

idleChartData = [
    [
        ['Morning IDLE Time', new Date(0,0,0,9,0,0),  new Date(0,0,0,10,15,0),],
        ['Morning IDLE Time', new Date(0,0,0,12,0,0),  new Date(0,0,0,13,15,0),],
        ['Afternoon IDLE Time', new Date(0,0,0,15,30,0),  new Date(0,0,0,16,30,0),],
    ],
    [
        ['Morning IDLE Time', new Date(0,0,0,8,0,0),  new Date(0,0,0,13,30,0),],
        ['Afternoon IDLE Time', new Date(0,0,0,13,30,0),  new Date(0,0,0,16,30,0),],
    ]
]

google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart); 
function drawChart() {

    const dailyReportTable = document.getElementById("dailyReportTable");
    const tableBodyChildrenCol = dailyReportTable.querySelector("tbody").children;

    var i;
    for(i = 0; i < tableBodyChildrenCol.length; i++){
        
        var container = tableBodyChildrenCol[i].lastElementChild.querySelector("div");
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Descri' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        if(window.location.href.endsWith("/idle_report")){
            console.log("showing idle report table");
            dataTable.addRows(idleChartData[i]);
        }else{
            dataTable.addRows(chartData[i]);
        }

        var options = chartOption;

        chart.draw(dataTable, options);
    }
}