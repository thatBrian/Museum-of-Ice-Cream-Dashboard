function getRandom(min, max, count) {
    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * (max - min)) + min)
    }
    return arr
}
function generateMonth() {
    let arr = []
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    for (let i = 0; i < 3; i++) {
        arr.unshift({
            name: months[i],
            data: getRandom(1, 40, 28)
        })
    }
    for (let i = 3; i < 4; i++) {
        arr.unshift({
            name: months[i],
            data: getRandom(30, 55, 28)
        })
    }
    for (let i = 4; i < 8; i++) {
        arr.unshift({
            name: months[i],
            data: getRandom(50, 100, 28)
        })
    }
    for (let i = 9; i < 12; i++) {
        arr.unshift({
            name: months[i],
            data: getRandom(1, 60, 28)
        })
    }
    return arr
}
function generateMoney() {
    let arr = []
    arr = arr.concat(getRandom(20000, 22500, 5))
    arr = arr.concat(getRandom(21000, 25000, 5))
    arr = arr.concat(getRandom(22000, 30000, 5))
    arr = arr.concat(getRandom(24000, 25000, 5))
    arr = arr.concat(getRandom(20000, 24000, 5))
    arr = arr.concat(getRandom(20000, 24000, 5))

    return arr
}
let money = generateMoney()


export function generate(name, desc) {
    let data = {
        title: name,
        description: desc,
        icstat: {
            options: {},
            series: {}
        },
        bar: {
            options: {},
            series: {}
        },
        percent: {
            options: {},
            series: {}
        },
        heat: {
            options: {},
            series: {}
        },
        line: {
            options: {},
            series: {}
        }
    }
    data.icstat.options = {
        chart: {
            type: "radar",
            toolbar: {
                show: false
            }
        },
        labels: [
            "Flavor",
            "Color",
            "Aroma",
            "Texture",
            "Temperature",
            "Presentation"
        ],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: "#e9e9e9",
                    fill: {
                        colors: [
                            "#f8f8f8"
                        ]
                    }
                }
            }
        },
    }
    data.icstat.series = [
        {
            name: 'Score',
            data: getRandom(20, 100, 6)
        }
    ]
    data.heat.options = {
        chart: {
            height: 350,
            type: "heatmap",
            toolbar: {
                show: false
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 25,
                            name: "low",
                            color: "#00A100"
                        },
                        {
                            from: 25,
                            to: 50,
                            name: "medium",
                            color: "#128FD9"
                        },
                        {
                            from: 50,
                            to: 75,
                            name: "high",
                            color: "#FFB200"
                        },
                        {
                            from: 75,
                            to: 100,
                            name: "extreme",
                            color: "#FF0000"
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        }
    }
    data.heat.series = generateMonth()
    data.percent.series = getRandom(40, 100, 1)
    function getColor() {
        let val = data.percent.series[0]
        if (val > 90) {
            return ["#007000"]
        }
        else if (val > 75) {
            return ["#238823"]
        } else if (val > 50) {
            return ["#FFBF00"]
        } else {
            return ["#D2222D"]
        }
    }
    data.percent.options = {
        chart: {
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "65%",
                    margin: 0
                },
                track: {
                    strokeWidth: '75%'
                },
                dataLabels: {
                    value: {
                        formatter: function (val) {
                            return (parseInt(val) / 10).toString() + "/10";
                        },
                        show: true,
                        color: '#111',
                        fontSize: '36px'

                    }
                }

            },
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ["Score"],
        colors: getColor()
    }
    data.bar.options = {
        chart: {
            "toolbar": {
                "show": false
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        plotOptions: {
            bar: {
                barHeight: "100%",
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: "bottom",
                }
            }
        },
        colors: [
            "#33b2df",
            "#546E7A",
            "#d4526e",
            "#13d8aa",
            "#A5978B",
            "#2b908f",
            "#f9a3a4",
            "#90ee7e",
            "#f48024",
            "#69d2e7"
        ],
        dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
                colors: [
                    "#fff"
                ]
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: [
                "#fff"
            ]
        },
        xaxis: {
            categories: [
                "Calories",
                "Fat",
                "Sodium",
                "Carbohydrates",
                "Fiber",
                "Sugar",
                "Proteins"
            ]
        },
        yaxis: {
            labels: {
                show: true
            }
        },
        subtitle: {
            text: "Calculated on a 100g portion",
            align: "center"
        },
    }
    data.bar.series = [
        {
            name: "Nutrition",
            data: getRandom(0, 100, 7)
        }
    ]
    data.line.series = [
        {
            name: "Revenue",
            data: generateMoney()
        }
    ]
    function getMoney() {
        let sum = money.reduce((a, b) => a + b, 0)
        return ("$" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }
    data.line.options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "straight"
        },
        fill: {
            opacity: 0.3,
        },
        colors: ['#FCA3B7'],
        title: {
            text: getMoney(),
            offsetX: 0,
            style: {
                fontSize: '24px',
                cssClass: 'apexcharts-yaxis-title'
            }
        },
        subtitle: {
            text: 'Total Revenue',
            offsetX: 0,
            style: {
                fontSize: '14px',
                cssClass: 'apexcharts-yaxis-title'
            }
        }
    }





    return data
}



let arr = ["Chocolate", "Vanilla", "Mango"]