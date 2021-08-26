import * as React from 'react';
import {View, TouchableOpacity, LogBox} from 'react-native';
import IOSIcon from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/Colors';
import styles from '../../../utils/AppCommonCss';

function RightNavigationButtons({navigation}) {
  return (
    <View style={styles.row}>
      <IconButton
        iconName="search"
        color={colors.white}
        size={24}
        onPress={function () {
          navigation.openDrawer();
        }}
      />
      <IconButton
        iconName="menu"
        color={colors.white}
        size={24}
        onPress={function () {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}

function IconButton(props) {
  let {onPress, iconName, size, color} = props;
  return (
    <TouchableOpacity onPress={onPress} style={{marginRight: 12}}>
      <IOSIcon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}

export default RightNavigationButtons;
