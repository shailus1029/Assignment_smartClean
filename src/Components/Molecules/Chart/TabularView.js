import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TabularView extends Component {
	render() {
		const option = {
			chart: {
				type: "column"
			},
			title: {
				text: null
			},
			xAxis: {
				crosshair: true,
				title: {
					text: "Instances"
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: "Units"
				}
			},
			tooltip: {
				headerFormat:
					'<span style="font-size:10px">{point.key} instance</span><table>',
				pointFormat:
					'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
				footerFormat: "</table>",
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
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

export default TabularView;
