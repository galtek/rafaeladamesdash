(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: 'Java/Android', y: 25}, { key: 'Swift/ObjC', y: 35},
        {key: 'HTML/CSS/JS', y: 15}, {key: 'SQL/NoSQL', y: 15}, {key: 'C/C++/C#', y: 10}, ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', '#c0ca33', '#ff844c', '#00acc1'],
                showLabels: false,
                showLegend: false,
                title: '< />',
                margin: { top: -5 }
            }
        };
    }
})();
