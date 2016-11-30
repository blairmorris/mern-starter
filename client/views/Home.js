import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

import './Home.less';

class Home extends Component {
	static contextTypes = {
		appStore: PropTypes.object
	};

	state = {
		nameInput: ''
	};

	componentWillMount() {
		this.context.appStore.loadNames();
	}

	render() {
		const {appStore: {names = []}} = this.context;
		const {nameInput} = this.state;

		return (
			<article id="home-container">
				<section className="home-content">
					<input
						type="text"
						value={nameInput}
						onChange={e => this.setState({nameInput: e.target.value})}
						onKeyDown={e => e.which == 13 && this.addName()}
					/>
					<div className="names">
						{names.map((n, idx) => <div key={`${n}-${idx}`} className="name">{n}<span className="removeNameBtn" onClick={() => names.splice(idx, 1)}>X</span></div>)}
					</div>
				</section>
			</article>
		);
	}

	addName = () => {
		const {appStore: {names = []}} = this.context;
		const {nameInput} = this.state;

		names.unshift(nameInput);
		this.setState({nameInput: ''});
	}
}

export default observer(Home);
