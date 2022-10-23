var ctx = document.getElementById('myChart');

var stars = [135850, 52122, 148825, 16939, 121763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Github Stars',
                data: stars,
                borderColor: "rgba(100,150,117,.7)",
                backgroundColor: "rgba(100,150,177,.7)"
            }]
        }
});