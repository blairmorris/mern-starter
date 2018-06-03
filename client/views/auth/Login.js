import React, { Component, PropTypes } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { Button, FormControl, ControlLabel, FormGroup } from "react-bootstrap";
import "./Login.less";

@inject("appStore")
@observer
class Login extends Component {
	static contextTypes = {
		appStore: PropTypes.object
	};

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	submit = event => {
		this.props.appStore.isLoggedin = true;
	};

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="email" bsSize="large">
						<ControlLabel>Email</ControlLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<ControlLabel>Password</ControlLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<Button
						block
						bsSize="large"
						disabled={!this.validateForm()}
						type="submit"
						onClick={this.submit}
					>
						Login
					</Button>
				</form>
			</div>
		);
	}
}

export default Login;
