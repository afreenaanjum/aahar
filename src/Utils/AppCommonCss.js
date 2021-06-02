import {StyleSheet} from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },

  textContainerStyle: {
    borderColor: colors.secondaryColor,
    borderWidth: 1,
    borderRadius: 5,
    color: colors.secondaryColor,
    fontSize: 16,
    padding: 3,
  },
  container: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  bgBlack: {
    backgroundColor: colors.black,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryColor,
    width: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
  setMargin: val => {
    return {margin: val};
  },
  setMarginTop: val => {
    return {marginTop: val};
  },
  setMarginBottom: val => {
    return {marginBottom: val};
  },
  setMarginLeft: val => {
    return {marginLeft: val};
  },
  setMarginRight: val => {
    return {marginRight: val};
  },
  setPadding: val => {
    return {padding: val};
  },
  setPaddingTop: val => {
    return {paddingTop: val};
  },
  setPaddingBottom: val => {
    return {paddingBottom: val};
  },
  setPaddingLeft: val => {
    return {paddingLeft: val};
  },
  setPaddingRight: val => {
    return {paddingRight: val};
  },
});

export default styles;
