import React, {useState} from 'react';
import {Image, View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from '../../utils/AppCommonCss';
import colors from '../../utils/Colors';
import CustomTextInput from '../Common/textInput';
import searchIcon from '../HomePage/search.png';

function HomePage({navigation}) {
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
  // ];

  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={[styles.container, styles.bgBlack]}>
      <CustomTextInput
        textInputVal={searchText}
        textInputContainerStyle={styles.textContainerStyle}
        textInputStyle={{color: colors.secondaryColor}}
        handleOnChange={function (val) {
          setSearchText(val.nativeEvent.text);
        }}
        rightImgIcon={searchIcon}
      />
    </SafeAreaView>
  );
}

export default HomePage;
