import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Login.css";
import "antd/dist/antd.css";
import InputField from "../../Components/Atoms/InputField/InputField.jsx";
import ButtonField from "../../Components/Atoms/ButtonField/ButtonField.jsx";
import * as action from "../../Redux/Actions/loginAction";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			username: "",
			error: false,
			errorText: "",
			correctUserName: "smartclean",
			correctPassword: "smartclean"
		};
		this.handlePassword = this.handlePassword.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleUserName = this.handleUserName.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.isUserLoggedIn && this.props.isUserLoggedIn) {
			this.props.history.push("/home");
		}
	}

	handlePassword(event) {
		const value = event.target.value;
		this.setState({
			password: value,
			error: false
		});
	}

	handleUserName(event) {
		const value = event.target.value;
		this.setState({
			username: value,
			error: false
		});
	}

	handleLogin() {
		const { username, password, correctPassword, correctUserName } = this.state;
		if (username === "") {
			this.setState({
				error: true,
				errorText: "***Please Enter UserName"
			});
		} else if (password === "") {
			this.setState({
				error: true,
				errorText: "***Please Enter Password"
			});
		} else if (
			password.trim() === correctPassword.trim() &&
			username.trim() === correctUserName.trim()
		) {
			this.props.login({
				isUserLoggedIn: true
			});
		} else {
			this.setState({
				error: true,
				errorText: "***Please Enter Correct UserName and Password"
			});
		}
	}

	render() {
		return (
			<div className="loginContainer">
				<div className="loginText">
					<h1>Login</h1>
				</div>
				<div className="loginDiv">
					<div className="passwordInput">
						<InputField
							type="text"
							value={this.state.username}
							handleChange={this.handleUserName}
							placeholderText="Enter username"
						/>
					</div>
					<div className="passwordInput">
						<InputField
							type="password"
							value={this.state.password}
							handleChange={this.handlePassword}
							placeholderText="Enter password"
						/>
					</div>
					<div className="errorText">
						{this.state.error ? <p>{this.state.errorText}</p> : null}
					</div>
					<div className="loginButton">
						<ButtonField
							type="primary"
							btnClass="searchButton login-button"
							buttonText="Submit"
							handleChange={this.handleLogin}
						/>
					</div>
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
	login: payload => dispatch(action.login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
