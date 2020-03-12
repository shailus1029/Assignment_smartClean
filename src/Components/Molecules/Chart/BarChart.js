import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class BarChart extends Component {
	render() {
		const option = {
			chart: {
				type: "bar"
			},
			title: {
				text: "Bar Chart"
			},
			xAxis: {
				title: {
					text: "Instances",
					align: "high"
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: "Units",
					align: "high"
				},
				labels: {
					overflow: "justify"
				}
			},
			tooltip: {
				valueSuffix: "unit"
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: false
					}
				}
			},
			legend: {
				layout: "vertical",
				align: "right",
				verticalAlign: "top",
				x: -40,
				y: 80,
				floating: true,
				borderWidth: 5,
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
				shadow: false
			},
			credits: {
				enabled: true
			},
			series: [
				{
					name: "dom",
					data: this.props.dom
				},
				{
					name: "dow",
					data: this.props.dow
				},
				{
					name: "hour",
					data: this.props.hour
				}
			]
		};
		return (
			<div>
				<HighchartsReact highcharts={Highcharts} options={option} />
			</div>
		);
	}
}

export default BarChart;
