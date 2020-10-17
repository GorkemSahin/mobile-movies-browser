import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './Discover';
import Details from './Details';
import Player from './Player';
import colors from '../constants/colors';
import SearchButton from '../components/SearchButton';

const Stack = createStackNavigator();

export default function App() {
  // const [initialState, setInitialState] = React.useState();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: colors.pink }} navigationOptions={{ headerTransparent: true }}>
        <Stack.Screen name="Discover" component={Discover} options={{
          headerRight: () => (
            <SearchButton></SearchButton>
          ),
        }} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}