import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default class PercentChart extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            percentOptions: {},
            percentSeries: [],
        }
        
    }
    componentDidMount() {
        axios
          .get('http://localhost:8082/percentchart')
          .then(res => {
            this.setState({
              percentOptions:res.data.percentOptions,
              percentSeries: res.data.percentSeries,
            })
            console.log(res)
          })
          .catch(err =>{
            console.log('Error from Percent Chart');
          })
      };

    render() {

        return (
            <Chart options={this.state.percentOptions} height="100%" series={this.state.percentSeries} width="100%" type="radialBar" />
            )
    }
}