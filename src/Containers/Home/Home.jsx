import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.css";
import highData from "../../config/data.json";
import AreaChart from "../../Components/Molecules/Chart/AreaChart";
import BarChart from "../../Components/Molecules/Chart/BarChart";
import LineChart from "../../Components/Molecules/Chart/LineChart";
import TabularView from "../../Components/Molecules/Chart/TabularView";
import ButtonField from "../../Components/Atoms/ButtonField/ButtonField.jsx";
import * as action from "../../Redux/Actions/loginAction";
import sessionStorage from "../../utils/sessionStorage";

import { Tabs } from "antd";
const { TabPane } = Tabs;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dom: [],
			dow: [],
			hour: []
		};
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	componentDidMount() {
		const isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");
		if (
			isUserLoggedIn &&
			isUserLoggedIn !== null &&
			isUserLoggedIn !== undefined
		) {
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
		} else {
			this.props.history.push("/");
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isUserLoggedIn && !this.props.isUserLoggedIn) {
			this.props.history.push("/");
		}
	}

	handleLogOut() {
		this.props.logout();
	}

	render() {
		return (
			<div className="homeContainer">
				<div className="navBar">
					<div>
						<p className="userHeading">Welcome User</p>
					</div>
					<ButtonField
						type="primary"
						btnClass="logoutbutton"
						buttonText="Log out"
						handleChange={this.handleLogOut}
					/>
				</div>
				<div className="contentView">
					<Tabs defaultActiveKey="1" size="large">
						<TabPane tab="Tabular View" key="1">
							<TabularView
								dom={this.state.dom}
								dow={this.state.dow}
								hour={this.state.hour}
							/>
						</TabPane>
						<TabPane tab="Chart View" key="2">
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
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isUserLoggedIn: state.loginReducer.isUserLoggedIn
	};
};

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(action.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
