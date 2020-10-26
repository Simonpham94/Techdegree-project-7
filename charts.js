// Linegraph 
    var trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
    const dataSet = document.querySelector('.traffic-nav');
    
    // data for HOURLY traffic line graph
    let trafficDataHourly = {
        labels: ["1-3", "3-5", "5-7", "7-9", "9-11", "11-13", "13-15",
    "15-17", "17-19", "19-21", "21-34"],
        datasets: [{
        data: [75, 125, 100, 200, 150, 175, 125, 185, 225, 150,
    250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]

    }; 

    let trafficOptionsHourly = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
        },
        legend: {
            display: false
        }
    }
    // data for DAILY traffic line graph
    let trafficDataDaily = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]

    }; 

    let trafficOptionsDaily = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
        },
        legend: {
            display: false
        }
    }

    

    // data for WEEKLY traffic line graph
    let trafficDataWeekly = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
        data: [7500, 12500, 10000, 20000, 15000, 17500, 12500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]

    }; 

    let trafficOptionsWeekly = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
        },
        legend: {
            display: false
        }
    }

    // data for MONTHLY traffic line graph
    let trafficDataMonthly = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
        data: [75000, 125000, 100000, 200000, 150000, 175000, 125000, 185000, 225000, 1500, 250000, 12350],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]

    }; 

    let trafficOptionsMonthly = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
        },
        legend: {
            display: false
        }
    }

    
dataSet.addEventListener('click', (e) =>{
    const element = e.target; 
    if(element.textContent.contains('Daily')) {
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line', 
            data: trafficDataDaily, 
            options: trafficOptionsDail
        }) 
    } else if (element.textContent.contains('Hourly')) {
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line', 
            data: trafficDataHourly, 
            options: trafficOptionsHourly
        })
    } else if (element.textContent.contains('Weekly')) {
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line', 
            data: trafficDataWeekly, 
            options: trafficOptionsWeekly
        }) 
    } else if (element.textContent.contains('Monthly')){
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line', 
            data: trafficDataMonthly, 
            options: trafficOptionsMonthly
        })
    }
 
 }) ; 




// Barchart

    const dailyCanvas = document.getElementById("daily-chart");

    // data for daily traffic bar chart
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
        };
        const dailyOptions = {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
            display: false
        }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });


const mobileCanvas = document.getElementById("mobile-users-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
    }]
};
    
const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
    }
 }
    
 let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});