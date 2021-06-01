import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import SplashScreen from '../components/SplashScreen/index';
import Landing from '../components/Landing/index';
import SignUp from '../components/SignUpSignIn';
import colors from '../utils/Colors';
import HomePage from '../components/HomePage';

const Stack = createStackNavigator();

const RootStack = () => {
  const appScreenOptions = {
    // stackAnimation: 'none',
    // cardStyle: {backgroundColor: 'rgba(0,0,0,0)', opacity: 1},
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.black,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => <View />,
  };
  return (
    <Stack.Navigator screenOptions={appScreenOptions}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title: 'HomePage'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
