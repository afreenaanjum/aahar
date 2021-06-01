import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import img from '../SplashScreen/img/AppLogo.jpg';
import styles from '../AppCommonCss';
import colors from '../Utils/Colors';

function Landing({navigation}) {
  const pushtoSignUp = () => {
    navigation.push('SignUp');
  };

  return (
    <View style={[styles.container, styles.bgBlack]}>
      <View style={[styles.container, styles.justifyEnd, styles.alignCenter]}>
        {<Image source={img} />}
      </View>
      <View
        style={[
          styles.container,
          styles.justifyEnd,
          styles.alignCenter,
          {marginBottom: 140},
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={pushtoSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.setMarginTop(10)}>
          <Text style={{color: colors.white}}>
            Do you already have an account?
          </Text>
          <Text style={{color: colors.primaryColor}}>{'  Signin'}</Text>
        </Text>
      </View>
    </View>
  );
}

export default Landing;
