import React, {Fragment} from 'react';
import {TextInput, Text, View} from 'react-native';
import colors from '../../utils/Colors';
import styles from '../../utils/AppCommonCss';

function CustomTextInput(props) {
  let {
    textInputVal,
    textInputStyle,
    handleOnChange,
    labelText,
    label,
    secureTextEntry,
  } = props;
  return (
    <View style={[styles.setMargin(10)]}>
      <Text style={{color: colors.primaryColor}}>{label}</Text>
      <TextInput
        label={labelText}
        value={textInputVal}
        style={textInputStyle}
        onChange={handleOnChange}
        secureTextEntry={secureTextEntry ?? false}
      />
    </View>
  );
}

export default CustomTextInput;
