import React from 'react';
import { StatusBar } from 'react-native';
import Screens from "./screens";
import {store} from './appState';
import {Provider} from 'react-redux';
import colors from './constants/colors';

export default () => {
	return (
		<Provider store={store}>
			<StatusBar backgroundColor={ colors.white } barStyle="dark-content"/> 
      <Screens />
		</Provider>
	)
};
