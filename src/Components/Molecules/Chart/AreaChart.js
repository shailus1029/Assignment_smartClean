import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class AreaChart extends Component {
	render() {
		const option = {
			chart: {
				type: "area"
			},
			accessibility: {
				description: ""
			},
			title: {
				text: "Area Chart"
			},
			xAxis: {
				allowDecimals: true,
				labels: {
					formatter: function() {
						return this.value;
					}
				},
				accessibility: {
					rangeDescription: "Range: 1 to 300"
				}
			},
			yAxis: {
				title: {
					text: "Area"
				},
				labels: {
					formatter: function() {
						return this.value;
					}
				}
			},
			plotOptions: {
				area: {
					pointStart: 1,
					marker: {
						enabled: false,
						symbol: "circle",
						radius: 2,
						states: {
							hover: {
								enabled: true
							}
						}
					}
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
					name: "hour",
					data: this.props.hour
				},
				{
					name: "SumHourly",
					data: this.props.sumHourly
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

export default AreaChart;
