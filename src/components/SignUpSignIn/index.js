import React, {useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSignIn, setSignIn] = useState(route.params ? true : false);

  const validateName = name => {
    if (!name.trim()) {
      setNameError('Field is empty');
    } else {
      setNameError('');
    }
  };

  const validateEmail = function (email) {
    if (!email) {
      setEmailError('Email field is empty');
    }
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

  const validatePassword = function (password, confirmPassword) {
    if (!password || !confirmPassword) {
      setConfirmPasswordError(
        'Either both or one of the password field is empty',
      );
    }
    if (password.length > 0 && password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError("Both the password doesn't match");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                setName(val.nativeEvent.text);
                validateName(val.nativeEvent.text);
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
              validateEmail(val.nativeEvent.text);
            }}
            label="Email"
            // keyboardType="email-address"
            errorMessage={emailError}
            validation={validateEmail}
          />

          <CustomTextInput
            textInputVal={password}
            textInputContainerStyle={styles.textContainerStyle}
            textInputStyle={{color: colors.secondaryColor}}
            handleOnChange={val => setPassword(val.nativeEvent.text)}
            label="Password"
            secureTextEntry={true}
            errorMessage={confirmPasswordError}
          />
          {!isSignIn && (
            <CustomTextInput
              textInputVal={confirmPassword}
              textInputContainerStyle={styles.textContainerStyle}
              textInputStyle={{color: colors.secondaryColor}}
              secureTextEntry={true}
              handleOnChange={function (val) {
                setConfirmPassword(val.nativeEvent.text);
                validatePassword(password, val.nativeEvent.text);
              }}
              label="Confirm Password"
              errorMessage={confirmPasswordError}
              validation={() => validatePassword(password, confirmPassword)}
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
                } else {
                  validateEmail();
                  if (password === '') {
                    setConfirmPasswordError('Field is empty');
                  }
                }
              } else {
                if (
                  name &&
                  email &&
                  password &&
                  confirmPassword &&
                  password === confirmPassword &&
                  nameError === '' &&
                  emailError === '' &&
                  confirmPasswordError === ''
                ) {
                  setEmail('');
                  setPassword('');
                  setSignIn(true);
                } else {
                  validateEmail(email);
                  validateName(name);
                  validatePassword(password, confirmPassword);
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
