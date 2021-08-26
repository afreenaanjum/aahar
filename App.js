import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './src/navigation/sideNavigator';
import RootStack from './src/navigation/index';

const App = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <MyDrawer /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
