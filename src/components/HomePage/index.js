import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from '../../utils/AppCommonCss';
import colors from '../../utils/Colors';
import CustomTextInput from '../Common/textInput';
import searchIcon from './search.png';
import CustomCard from './ListCard';
import foodImg from './avacado.jpeg';

function HomePage({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
      title: '4 Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d726',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d729',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba10',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6311',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7212',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => <CustomCard foodImg={foodImg} />;

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
        placeHolder={'Enter the pincode'}
        placeHolderTextColor={colors.secondaryColor}
      />
      <View style={[styles.setMargin(10), styles.container]}>
        {/* <CustomCard foodImg={foodImg} /> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
