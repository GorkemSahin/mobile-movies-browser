import React from 'react';
import Screens from "./screens";
import {store} from './appState';
import {Provider} from 'react-redux';

export default () => {
	return <Provider store={store}>
      <Screens />
	</Provider>
};
