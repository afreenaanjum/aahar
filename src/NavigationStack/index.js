import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import SplashScreen from '../SplashScreen/index';
import Landing from '../Landing/index';
import SignUp from '../SignUpSignIn';
import colors from '../Utils/Colors';

const Stack = createStackNavigator();

const RootStack = () => {
  const screenOptions = {
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
    <Stack.Navigator screenOptions={screenOptions}>
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
    </Stack.Navigator>
  );
};

export default RootStack;
