import React, {useState} from 'react';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import CustomTextInput from '../Common/textInput';
import CustomButton from '../Common/button';
import styles from '../../utils/AppCommonCss';
import {StackActions} from '@react-navigation/native';

function SignUp({route, navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignIn, setSignIn] = useState(route.params ? true : false);

  return (
    <SafeAreaView
      style={[styles.container, styles.bgBlack, styles.setPaddingTop(50)]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        sc>
        {!isSignIn && (
          <CustomTextInput
            textInputVal={name}
            textInputStyle={styles.textInput}
            label="Name"
            handleOnChange={function (val) {
              console.log('dskjdhfksdjfh', val.nativeEvent.text);
              setName(val.nativeEvent.text);
            }}
          />
        )}
        <CustomTextInput
          textInputVal={email}
          textInputStyle={styles.textInput}
          handleOnChange={val => setEmail(val.nativeEvent.text)}
          label="Email"
        />
        {/* <CustomTextInput
          textInputVal={mobileNo}
          textInputStyle={styles.textInput}
          handleOnChange={val => setMobileNo(val)}
          label="Phone"
        /> */}
        <CustomTextInput
          textInputVal={password}
          textInputStyle={styles.textInput}
          handleOnChange={val => setPassword(val.nativeEvent.text)}
          label="Password"
          secureTextEntry={true}
        />
        {!isSignIn && (
          <CustomTextInput
            textInputVal={confirmPassword}
            textInputStyle={styles.textInput}
            handleOnChange={val => setConfirmPassword(val.nativeEvent.text)}
            label="Confirm Password"
          />
        )}
        <CustomButton
          handleOnPress={() => {
            if (isSignIn) {
              navigation.popToTop();
              navigation.dispatch(StackActions.replace('HomePage', {}));
            } else {
              setSignIn(true);
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignUp;
