import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../../utils/AppCommonCss';
import colors from '../../utils/Colors';
import img from '../SplashScreen/img/AppLogo.jpg';

function CustomCard(props) {
  let {handleOnPress, foodImg, buttonText, cardStyle, buttonTextStyle} = props;

  TouchableOpacity.defaultProps = {activeOpacity: 1};
  return (
    <TouchableOpacity style={{margin: 10}} onPress={handleOnPress}>
      <View
        style={[
          styles.row,
          styles.justifyCenter,
          styles.alignCenter,
          {
            height: 110,
            elevation: 12,
          },
        ]}>
        <View
          style={{
            flex: 1,
          }}>
          <Image
            source={foodImg}
            style={{
              height: '100%',
              width: '100%',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              overflow: 'hidden',
            }}
          />
        </View>
        <View
          style={[
            // styles.alignCenter,
            styles.justifyCenter,
            {
              flex: 2,
              height: '100%',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              paddingHorizontal: 2,
              backgroundColor: '#000000',
              paddingLeft: 10,
              //   opacity: 0.5,
            },
          ]}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: 'bold',
              padding: 5,
            }}>
            Protein Powder 5 lbs
          </Text>
          <View style={[styles.row, styles.justifyStart, styles.alignCenter]}>
            <Image
              source={img}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
              }}>
              Britt
            </Text>
            <Image
              source={img}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                marginLeft: 5,
              }}
            />
          </View>
          <View style={[styles.row, styles.justifyStart, styles.alignCenter]}>
            <Image
              source={img}
              style={{
                width: 12,
                height: 12,
                marginRight: 2,
              }}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
              }}>
              Britt
            </Text>
            <Image
              source={img}
              style={{
                width: 12,
                height: 12,
                marginLeft: 5,
                marginRight: 2,
              }}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
              }}>
              Britt
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CustomCard;
