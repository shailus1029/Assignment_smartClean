import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class LineChart extends Component {
	render() {
		const options = {
			chart: {
				type: "line"
			},
			title: {
				text: "Line Chart"
			},
			xAxis: {
				categories: this.props.dom.length
			},
			yAxis: {
				title: {
					text: "Value"
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: false
					},
					enableMouseTracking: false
				}
			},
			series: [
				{
					name: "Dom",
					data: this.props.dom
				},
				{
					name: "Dow",
					data: this.props.dow
				},
				{
					name: "Hour",
					data: this.props.hour
				}
			]
		};

		return (
			<div>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		);
	}
}

export default LineChart;
