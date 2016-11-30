import {observable} from 'mobx';

class AppStore {
	@observable names = [];

	loadNames = () => {
		return fetch('/api/names')
			.then(resp => resp.json())
			.then(names => {
				this.names.replace(names);
				return this.names;
			});
	}
}


export default AppStore;
