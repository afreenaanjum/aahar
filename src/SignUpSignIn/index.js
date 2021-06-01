import React, {useState} from 'react';
import {Image, View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../AppCommonCss';
import colors from '../Utils/Colors';

function SignUp({navigation, isSignIn}) {
  const [name, setName] = useState('');
  return (
    <View style={[styles.container, styles.bgBlack]}>
      {/* <SafeAreaView> */}
      <TextInput value={name} />
      {/* <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          /> */}
      {/* </SafeAreaView> */}
    </View>
  );
}

export default SignUp;
