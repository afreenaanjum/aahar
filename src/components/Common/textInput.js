import React, {Fragment} from 'react';
import {TextInput, Text, View, Image} from 'react-native';
import colors from '../../utils/Colors';
import styles from '../../utils/AppCommonCss';

function CustomTextInput(props) {
  let {
    textInputVal,
    textInputStyle,
    handleOnChange,
    label,
    secureTextEntry,
    validation,
    keyboardType,
    leftImgIcon,
    rightImgIcon,
    textInputContainerStyle,
    height,
    errorMessage,
  } = props;
  return (
    <View style={styles.setMargin(10)}>
      <Text style={{color: colors.primaryColor}}>{label}</Text>
      <View
        style={[
          styles.row,
          styles.justifyCenter,
          styles.alignCenter,
          textInputContainerStyle,
          {height: height},
        ]}>
        {leftImgIcon && (
          <View>
            <Image
              source={leftImgIcon}
              style={{
                margin: 5,
                height: 25,
                width: 25,
                resizeMode: 'stretch',
              }}
            />
          </View>
        )}
        <View style={styles.container}>
          <TextInput
            value={textInputVal}
            style={textInputStyle}
            onChange={handleOnChange}
            onSubmitEditing={validation}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry ?? false}
          />
        </View>
        {rightImgIcon && (
          <View>
            <Image
              source={rightImgIcon}
              style={{
                margin: 5,
                height: 25,
                width: 25,
                resizeMode: 'stretch',
              }}
            />
          </View>
        )}
      </View>
      <Text style={{color: '#09B32E'}}>{errorMessage}</Text>
    </View>
  );
}

export default CustomTextInput;
