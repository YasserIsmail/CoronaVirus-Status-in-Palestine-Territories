// Governorates Req
const gov = 'https://corona.ps/API/governorates';
var gov_response = $.ajax({
    type: "GET",
    url: gov,
    async: false
}).responseText;
var data = JSON.parse(gov_response);
var Gov = [];
for (var i = 0; i < data.data.Governorates.length; i++) {
    Gov.push(data.data.Governorates[i].Name)
};
var cases = [];
for (var i = 0; i < data.data.Governorates.length; i++) {
    cases.push(data.data.Governorates[i].Cases)
};
// 

// ــــــــــــــــــــ 


// Governorates Chatr
var ctx = document.getElementById("gov_chatr").getContext('2d');

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientChartOptionsConfigurationWithTooltipPurple = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
            },
            ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#9a9a9a",

            }
        }],

        xAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(225,78,202,0.1)',
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }]
    }
};

gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
var config = {
    type: 'line',
    data: {
        labels: Gov,
        datasets: [{
            label: "Cases Number ",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#d346b1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#d346b1',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#d346b1',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: cases,
        }]
    },
    options: gradientChartOptionsConfigurationWithTooltipPurple
};
var myChartData = new Chart(ctx, config);
// ــــــــــــــــــــ 

// Summary Req

var summ = $.ajax({
    type: "GET",
    url: 'https://corona.ps/API/summary',
    async: false
}).responseText;
var summary = JSON.parse(summ);

var TotalCases = summary.data.TotalCases;
var TotalRecovery = summary.data.TotalRecovery;
var TotalActiveCases = summary.data.TotalActiveCases;
var TotalDeath = summary.data.TotalDeath;
var TotalCriticalCases = summary.data.TotalCriticalCases;
var TotalTestedSamples = summary.data.TotalTestedSamples;
var last = summary.data.LastUpdated;
document.getElementById('summ-total').innerHTML = TotalCases
document.getElementById('summ-recover').innerHTML = TotalRecovery
document.getElementById('summ-active').innerHTML = TotalActiveCases
document.getElementById('summ-death').innerHTML = TotalDeath
document.getElementById('summ-c-case').innerHTML = TotalCriticalCases
document.getElementById('summ-tested').innerHTML = TotalTestedSamples
document.getElementById('summ-last').innerHTML += last.slice(0,10)
// 

// 
var Jericho = [];
var Hebron = [];
var Jerusalem = [];
var Bethlehem = [];
var Jenin = [];
var Ramallah = [];
var Salfit = [];
var Tubas = [];
var Tulkarm = [];
var GazaStrip = [];
var Qalqilya = [];
var Nablus = [];
for (var i = 0; i < data.data.Governorates.length; i++) {
    var city = data.data.Governorates[i].Name;
    if (city == 'Jericho') {
        Jericho.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Hebron') {
        Hebron.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Jerusalem') {
        Jerusalem.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Bethlehem') {
        Bethlehem.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Jenin') {
        Jenin.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Ramallah') {
        Ramallah.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Salfit') {
        Salfit.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Tubas') {
        Tubas.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Tulkarm') {
        Tulkarm.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Gaza Strip') {
        GazaStrip.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Qalqilya') {
        Qalqilya.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    } else if (city == 'Nablus') {
        Nablus.push(data.data.Governorates[i].Name, data.data.Governorates[i].Cases, data.data.Governorates[i].CentralQuarantine, data.data.Governorates[i].HomeQuarantine, data.data.Governorates[i].Recovered, data.data.Governorates[i].Deaths)
    }

};


for (var i = 0; i < 6; i++) {
    document.getElementById('Jericho').innerHTML += '<td class="text-center">' + Jericho[i] + '</td>';
    document.getElementById('Hebron').innerHTML += '<td class="text-center">' + Hebron[i] + '</td>';
    document.getElementById('Jerusalem').innerHTML += '<td class="text-center">' + Jerusalem[i] + '</td>';
    document.getElementById('Bethlehem').innerHTML += '<td class="text-center">' + Bethlehem[i] + '</td>';
    document.getElementById('Jenin').innerHTML += '<td class="text-center">' + Jenin[i] + '</td>';
    document.getElementById('Ramallah').innerHTML += '<td class="text-center">' + Ramallah[i] + '</td>';
    document.getElementById('Salfit').innerHTML += '<td class="text-center">' + Salfit[i] + '</td>';
    document.getElementById('Tubas').innerHTML += '<td class="text-center">' + Tubas[i] + '</td>';
    document.getElementById('Tulkarm').innerHTML += '<td class="text-center">' + Tulkarm[i] + '</td>';
    document.getElementById('GazaStrip').innerHTML += '<td class="text-center">' + GazaStrip[i] + '</td>';
    document.getElementById('Qalqilya').innerHTML += '<td class="text-center">' + Qalqilya[i] + '</td>';
    document.getElementById('Nablus').innerHTML += '<td class="text-center">' + Nablus[i] + '</td>';
};

