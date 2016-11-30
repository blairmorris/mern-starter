import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import './App.less';

class App extends Component {
	static propTypes = {
		children: PropTypes.node
	};

	render() {
		const {children} = this.props;
		return (
			<main id="app-container">
				<header className="header">
					Header Placeholder
				</header>
				<section className="content">
				{children}
				</section>
				<footer>
					Footer Placeholder
				</footer>
			</main>
		);
	}
}

export default observer(App);
