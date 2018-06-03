import React, { Component, PropTypes } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { Navbar, MenuItem, NavItem, NavDropdown, Nav } from "react-bootstrap";
import { browserHistory } from "react-router";

@inject("appStore")
@observer
class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	goHome() {
		browserHistory.push("/");
	}

	goLogin() {
		if (!this.props.appStore.isLoggedin) {
			browserHistory.push("/login");
		} else {
		}
	}

	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a onClick={this.goHome}>MERN Starter</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} onClick={this.goLogin.bind(this)}>
							{this.props.appStore.isLoggedin
								? "User Loggedin"
								: "Please Login"}
						</NavItem>
						<NavItem eventKey={2}>Students</NavItem>
						<NavItem eventKey={3}>Teachers</NavItem>
						<NavDropdown
							eventKey={3}
							title="Profile"
							id="basic-nav-dropdown"
						>
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>
								Something else here
							</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3} onClick={this.goLogin.bind(this)}>
								Login
							</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
