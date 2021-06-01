import React from 'react';
import {Image, View, Text} from 'react-native';
import img from '../SplashScreen/img/AppLogo.jpg';
import styles from '../../utils/AppCommonCss';
import colors from '../../utils/Colors';
import CustomButton from '../Common/button';

function Landing({navigation}) {
  const pushtoSignUp = () => {
    navigation.push('SignUp');
  };
  const pushtoSignIn = () => {
    navigation.push('SignUp', {isSignIn: true});
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
        <CustomButton
          buttonText="Sign Up"
          handleOnPress={pushtoSignUp}
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}></CustomButton>
        <Text style={styles.setMarginTop(10)}>
          <Text style={{color: colors.white}}>
            Do you already have an account?
          </Text>
          <Text style={{color: colors.primaryColor}} onPress={pushtoSignIn}>
            {'  Signin'}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Landing;
