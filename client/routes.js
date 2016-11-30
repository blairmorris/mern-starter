import React, {Component, PropTypes} from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {observer} from 'mobx-react';

import App from './App';
import Home from './views/Home';

class AppRouter extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};
	static childContextTypes = {
		appStore: PropTypes.object.isRequired
	};

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App} >
					<IndexRoute component={Home} />
				</Route>
			</Router>
		);
	}

	getChildContext() {
		return (this.props.store);
	}
}

export default observer(AppRouter);
