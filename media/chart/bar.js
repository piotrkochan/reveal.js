var barChartData = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'],
    datasets: [{
        label: 'Zarażeni koronawirusem',
        backgroundColor: window.chartColors.red,
        stack: 'Stack 0',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Wydrowieli',
        backgroundColor: window.chartColors.blue,
        stack: 'Stack 0',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Ukarani mandatami',
        backgroundColor: window.chartColors.green,
        stack: 'Stack 1',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};
window.onload = function() {
    var ctx = document.getElementById('canvasBar').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'Wykres na dowolny temat'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};

document.getElementById('randomizeDataBar').addEventListener('click', function() {
    barChartData.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myBar.update();
});