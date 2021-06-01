import React, {Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';

function CustomButton(props) {
  let {handleOnPress, buttonText, buttonStyle, buttonTextStyle} = props;

  TouchableOpacity.defaultProps = {activeOpacity: 1};
  return (
    <TouchableOpacity style={buttonStyle} onPress={handleOnPress}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
