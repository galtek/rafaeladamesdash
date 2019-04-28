(function () {
    angular
        .module('app')
        .controller('UsageController', [
            UsageController
        ]);

    function UsageController() {
        var vm = this;

        // TODO: move data to the service
        vm.ramChartData = [{key: 'Enterprise', y: 14}, { key: 'Web Page', y: 8}];
        vm.storageChartData = [{key: 'iOS', y: 6}, {key: 'Android', y: 4 }];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: false,
                showLegend: false,
                title: 'Years',
                margin: { top: -5, left: -20, right: -20 }
            }
        };
    }
})();
