import React, {Component, PropTypes} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import './Home.less';

@observer class Home extends Component {
	static contextTypes = {
		appStore: PropTypes.object
	};

	@observable nameInput = '';

	componentWillMount() {
		const {appStore} = this.context;
		appStore.loadNames();
	}

	render() {
		const {appStore: {names = []}} = this.context;

		return (
			<article id="home-container">
				<section className="home-content">
					<input
						type="text"
						placeholder="Add a name..."
						value={this.nameInput}
						onChange={e => this.nameInput = e.target.value}
						onKeyDown={e => e.which == 13 && this.addName()}
					/>
					<div className="names">
						{names.map((n, idx) => (
							<div key={`${n}-${idx}`} className="name">
								{n}
								<span className="removeNameBtn" onClick={() => names.splice(idx, 1)}>X</span>
							</div>
						))}
					</div>
				</section>
			</article>
		);
	}

	addName = () => {
		const {appStore: {names = []}} = this.context;
		names.unshift(this.nameInput);
		this.nameInput = '';
	}
}

export default Home;
