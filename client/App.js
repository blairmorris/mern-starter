import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import './App.less';
import Header from './views/nav/Header';

@observer class App extends Component {
	static propTypes = {
		children: PropTypes.node
	};

	render() {
		const { children } = this.props;
		return (
			<main id="app-container">
				<Header />
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

export default App;
