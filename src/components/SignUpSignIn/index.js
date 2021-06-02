import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import CustomTextInput from '../Common/textInput';
import CustomButton from '../Common/button';
import styles from '../../utils/AppCommonCss';
import {StackActions} from '@react-navigation/native';
import colors from '../../utils/Colors';

function SignUp({route, navigation}) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSignIn, setSignIn] = useState(route.params ? true : false);

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Field is empty');
    } else {
      setNameError('');
    }
  };

  const validateEmail = function () {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      setEmailError('');
    } else {
      setEmailError('Invalid email');
    }
  };

  const validatePassword = function () {
    if (password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError("Both the password doesn't match");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, styles.bgBlack, styles.setPadding(10)]}>
      {!isSignIn && (
        <CustomTextInput
          textInputVal={name}
          textInputContainerStyle={styles.textContainerStyle}
          textInputStyle={{color: colors.secondaryColor}}
          label="Name"
          keyboardType="default"
          validation={validateName}
          handleOnChange={function (val) {
            console.log('dskjdhfksdjfh', val.nativeEvent.text);
            setName(val.nativeEvent.text);
            validateName();
          }}
          errorMessage={nameError}
        />
      )}
      <CustomTextInput
        textInputVal={email}
        textInputContainerStyle={styles.textContainerStyle}
        textInputStyle={{color: colors.secondaryColor}}
        handleOnChange={function (val) {
          setEmail(val.nativeEvent.text);
          validateEmail();
        }}
        label="Email"
        // keyboardType="email-address"
        errorMessage={emailError}
        validation={validateEmail}
      />
      {/* <CustomTextInput
          textInputVal={mobileNo}
         textInputStyle={{color: colors.secondaryColor}}
          handleOnChange={val => setMobileNo(val)}
          label="Phone"
        /> */}
      <CustomTextInput
        textInputVal={password}
        textInputContainerStyle={styles.textContainerStyle}
        textInputStyle={{color: colors.secondaryColor}}
        handleOnChange={val => setPassword(val.nativeEvent.text)}
        label="Password"
        secureTextEntry={true}
      />
      {!isSignIn && (
        <CustomTextInput
          textInputVal={confirmPassword}
          textInputContainerStyle={styles.textContainerStyle}
          textInputStyle={{color: colors.secondaryColor}}
          handleOnChange={function (val) {
            setConfirmPassword(val.nativeEvent.text);
            validatePassword();
          }}
          label="Confirm Password"
          errorMessage={confirmPasswordError}
          validation={validatePassword}
        />
      )}
      <CustomButton
        handleOnPress={() => {
          if (isSignIn) {
            if (
              email.length !== 0 &&
              emailError === '' &&
              password.length !== 0
            ) {
              navigation.popToTop();
              navigation.dispatch(StackActions.replace('HomePage', {}));
            }
          } else {
            if (
              name &&
              email &&
              password === confirmPassword &&
              nameError === '' &&
              emailError === '' &&
              confirmPasswordError === ''
            ) {
              setEmail('');
              setPassword('');
              setSignIn(true);
            }
          }
        }}
        buttonText={isSignIn ? 'Sign In' : 'Sign Up'}
        buttonStyle={[
          styles.button,
          styles.setMarginTop(20),
          styles.setMarginLeft('auto'),
          styles.setMarginRight('auto'),
          styles.justifyCenter,
          styles.alignCenter,
        ]}
        buttonTextStyle={styles.buttonText}
      />
    </SafeAreaView>
  );
}

export default SignUp;
