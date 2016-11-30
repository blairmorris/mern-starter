require('file?name=[name].[ext]!./index.html');

import React from 'react';
import {render} from 'react-dom';
import {AppStore} from './state/stores';
import AppRouter from './routes';

const store = {
	appStore: new AppStore()
};

render(
	<AppRouter store={store} />,
	document.getElementById('main')
);
