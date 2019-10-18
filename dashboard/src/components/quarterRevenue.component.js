import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class QuarterRevenue extends Component {
    constructor(props) {
        super(props)
        var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
        var randomizeArray = function (arg) {
            var array = arg.slice();
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        this.state = {
            miniOptions: {
                chart: {
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    curve: "straight"
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#FCA3B7'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                }
            },
            miniSeries: [{
                data: randomizeArray(sparklineData)
            }]
        }
    }

    render() {

        return (
            <Chart options={this.state.miniOptions} height="100%" series={this.state.miniSeries} width="100%" type="area" />
        )
    }
}