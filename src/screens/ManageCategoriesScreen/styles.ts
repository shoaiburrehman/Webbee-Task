import {StyleSheet} from 'react-native';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';
import {Colors} from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
  },
  emptyView: {
    height: vh * 82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...Fonts.Regular(14),
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleField: {
    marginVertical: vh * 2,
    width: vw * 85,
    height: vh * 6,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  btn: {
    marginHorizontal: vw * 5,
    marginVertical: vh * 2,
    width: vw * 90,
    height: vh * 6,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  btnText: {
    ...Fonts.Regular(14, Colors.WHITE),
    textAlign: 'center',
  },
  addNewField: {
    width: vw * 50,
    marginVertical: vh,
    height: vh * 6,
    borderRadius: vw * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
  },
  picker: {
    width: '100%',
    paddingLeft: 10,
    borderWidth: 5,
    borderRadius: 10,
    color: Colors.PRIMARY_COLOR,
  },
  addNewFieldTxt: {
    ...Fonts.Regular(14, Colors.PRIMARY_COLOR),
    textAlign: 'center',
  },
  touchable: {
    marginLeft: vw * 4,
  },
  icon: {
    height: vh * 4,
    width: vw * 4,
    tintColor: Colors.PRIMARY_COLOR,
  },
  removeText: {
    marginLeft: vw * 2,
    ...Fonts.Regular(14, Colors.PRIMARY_COLOR),
    textAlign: 'center',
  },
  fieldsView: {
    marginHorizontal: vw * 7,
    marginVertical: 3 * vh,
  },
  categoryHead: {
    ...Fonts.Medium(20),
    marginBottom: vh * 2,
  },
  submit: {
    marginVertical: vh * 2,
    width: vw * 85,
    height: vh * 8,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  submitTxt: {
    ...Fonts.Regular(14, Colors.WHITE),
    textAlign: 'center',
  },

  textInputStyle: {
    height: vh * 17,
  },
});

export default styles;
