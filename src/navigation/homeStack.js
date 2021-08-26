import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../utils/Colors';
import HomePage from '../components/HomePage';
import RightNavigationButtons from '../components/HomePage/RightNavButtons/index';
import DrawerNavigation from '../navigation/sideNavigator';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  const appScreenOptions = {
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <Stack.Navigator screenOptions={appScreenOptions} initialRouteName="Home">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={({navigation}) => ({
          title: 'Home',
          headerRight: props => {
            <RightNavigationButtons navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
