import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import img from './img/AppLogo.jpg';
import {StackActions} from '@react-navigation/native';
import styles from '../AppCommonCss';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Landing', {}));
    }, 1000);
  }, []);
  return (
    <View
      style={[
        styles.container,
        styles.bgBlack,
        styles.justifyCenter,
        styles.alignCenter,
      ]}>
      {<Image source={img} />}
    </View>
  );
}

export default SplashScreen;
