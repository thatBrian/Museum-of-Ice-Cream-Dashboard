import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/icecream.css'
import Chart from 'react-apexcharts';
import { generate } from "../offline-data/generator"
import axios from 'axios';
import SuggestionInputSearch from "suggestion-react-input-search"

export default class IceCream extends Component {
    constructor(props) {
        super(props);
        let data = generate("Vanilla", "Ice")
        this.state = {
            key: 123,
            title: "Vanilla",
            search: ["Straberry"],
            description: data.description,
            barseries: data.bar.series,
            baroptions: data.bar.options,
            percentoptions: data.percent.options,
            percentseries: data.percent.series,
            icstatoptions: data.icstat.options,
            icstatseries: data.icstat.series,
            heatoptions: data.heat.options,
            heatseries: data.heat.series,
            lineoptions: data.line.options,
            lineseires: data.line.series,
        }
    }
    handleOnSubmit(term){
        console.log(term)
        console.log(this.state.data[0].title == "Vanilla")
        for (let i = 0; i < this.state.data.length;i++){
            if(this.state.data[i].title == term){
                console.log("Found")
                this.setState({
                    title: this.state.data[i].title,
                    description: this.state.data[i].description,
                    barseries: this.state.data[i].bar.series,
                    baroptions: this.state.data[i].bar.options,
                    percentoptions: this.state.data[i].percent.options,
                    percentseries: this.state.data[i].percent.series,
                    icstatoptions: this.state.data[i].icstat.options,
                    icstatseries: this.state.data[i].icstat.series,
                    heatoptions: this.state.data[i].heat.options,
                    heatseries: this.state.data[i].heat.series,
                    lineoptions: this.state.data[i].line.options,
                    lineseires: this.state.data[i].line.series,
                })
                return;
            }
            
        }
        console.log("NOT FOUND")
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        axios
            .get('http://localhost:8082/geticecream')
            .then(res => {
                
                this.setState({
                    data:res.data,
                    title: res.data[0].title,
                    description: res.data[0].description,
                    barseries: res.data[0].bar.series,
                    baroptions: res.data[0].bar.options,
                    percentoptions: res.data[0].percent.options,
                    percentseries: res.data[0].percent.series,
                    icstatoptions: res.data[0].icstat.options,
                    icstatseries: res.data[0].icstat.series,
                    heatoptions: res.data[0].heat.options,
                    heatseries: res.data[0].heat.series,
                    lineoptions: res.data[0].line.options,
                    lineseires: res.data[0].line.series,

                })
                let arr = []
                for (let k = 0; k < res.data.length; k++) {
                    arr.push(res.data[k].title)
                    console.log(arr[k])
                }
                this.setState({
                    search: arr,
                    key:1234
                })
                console.log(arr)
                // console.log(res.data)
            })
            .catch(err => {
                console.log('Error, fetch failed. Using default')
            })
    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({ key: Math.random() });
    };
    render() {
        const recentSearches = this.state.search
        const placeholder = 'Search Flavors...';
        const inputPosition = 'start';
        return (
            <div id="icecream-container" key={this.state.key}>
                <div id="search-container">
                    <SuggestionInputSearch
                        
                        onSubmitFunction={this.handleOnSubmit.bind(this)}
                        recentSearches={this.state.search}
                        placeholder={placeholder}
                        inputClass="search-input"
                    />

                </div>
                <div id="search-body" >
                    <div id="row-1">
                        <div id="left-1" className="shadow box">
                            <div id="description-container">
                                <div id="title-text">{this.state.title} Ice Cream</div>
                                <div id="description-body">{this.state.description}</div>
                            </div>
                            <div id="left-child">
                                <Chart id="stat-show" key={this.state.key} options={this.state.icstatoptions} height="100%" series={this.state.icstatseries} type="radar" />
                                <Chart id="stat-hidden" key={this.state.key} options={this.state.icstatoptions}  series={this.state.icstatseries} type="radar" />

                            </div>
                        </div>
                        <div id="right-1" className="shadow box">
                            <div>
                                <div>Nutrition Stats</div>
                                <Chart key={this.state.key} options={this.state.baroptions} height="100%" series={this.state.barseries} type="bar" />

                            </div>

                        </div>
                    </div>
                    <div id="row-2">
                        <div id="left-2" className="shadow box">
                            <div>Popularity HeatMap</div>
                            <Chart key={this.state.key} options={this.state.heatoptions} width="100%" height="80%" series={this.state.heatseries} type="heatmap" />
                        </div>
                        <div id="mid-2" className="shadow box">
                            <div>
                                <div>Monthly Sales</div>
                                <Chart key={this.state.key} options={this.state.lineoptions} width="100%" height="100%" series={this.state.lineseires} type="area" />
                            </div>
                        </div>
                        <div id="right-2" className="shadow box ">
                            <div> Overall Rating</div>
                            <Chart key={this.state.key} options={this.state.percentoptions} height="100%" series={this.state.percentseries} type="radialBar" />


                        </div>
                    </div>
                    <div id="row-3"></div>
                </div>
            </div>
        )
    }
}