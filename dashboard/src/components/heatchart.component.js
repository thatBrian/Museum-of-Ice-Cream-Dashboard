import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class HeatChart extends Component {
    constructor(props) {
        super(props)
        function generateData(count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = (i + 1).toString();
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push({
                    x: x,
                    y: y
                });
                i++;
            }
            return series;
        }
        this.state = {
            heatOptions: {
                chart: {
                    height: 350,
                    type: 'heatmap' ,
                    toolbar:{
                        show:false
                    }
                },
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,

                        colorScale: {
                            ranges: [{
                                from: -30,
                                to: 5,
                                name: 'low',
                                color: '#00A100'
                            },
                            {
                                from: 6,
                                to: 20,
                                name: 'medium',
                                color: '#128FD9'
                            },
                            {
                                from: 21,
                                to: 45,
                                name: 'high',
                                color: '#FFB200'
                            },
                            {
                                from: 46,
                                to: 55,
                                name: 'extreme',
                                color: '#FF0000'
                            }
                            ]
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },


            },
            heatSeries: [{
                name: 'Jan',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Feb',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Mar',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Apr',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'May',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jun',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jul',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Aug',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Sep',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            }
            ],


        }
    }

    render() {

        return (
            <Chart options={this.state.heatOptions} height="100%" series={this.state.heatSeries} width="100%" type="heatmap" />
            )
    }
}