import React from 'react';
import ReactApexChart from "react-apexcharts";



class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                }
            },
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 240]
            }],
        }
    }
    

    render() {

        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
                </div>
                <div id="html-dist">
                </div>
            </div>
        );
    }
}

export default LineChart;