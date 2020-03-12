import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highData from "../../config/data.json";
import AreaChart from "../../Components/Molecules/Chart/AreaChart";
import BarChart from "../../Components/Molecules/Chart/BarChart";
import LineChart from "../../Components/Molecules/Chart/LineChart";
import TabularView from "../../Components/Molecules/Chart/TabularView";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dom: [],
			dow: [],
			hour: []
		};
	}
	simpleAction(event) {
		this.props.simpleAction();
	}

	componentDidMount() {
		const dom = [];
		const dow = [];
		const hour = [];
		highData.map(item => {
			dom.push(item.dom);
			dow.push(item.dow);
			hour.push(item.hour);
		});
		this.setState({
			dom,
			dow,
			hour
		});
	}

	render() {
		return (
			<div className="homeContainer">
				<TabularView
					dom={this.state.dom}
					dow={this.state.dow}
					hour={this.state.hour}
				/>
				<BarChart
					dom={this.state.dom}
					dow={this.state.dow}
					hour={this.state.hour}
				/>
				<LineChart
					dom={this.state.dom}
					dow={this.state.dow}
					hour={this.state.hour}
				/>
				<AreaChart
					dom={this.state.dom}
					dow={this.state.dow}
					hour={this.state.hour}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		homeReducer: state.homeReducer
	};
};

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(testAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
