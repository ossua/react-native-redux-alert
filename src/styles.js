import { StyleSheet } from 'react-native'

const colours = {
  success: '#adffad',
  successText: '#fff',
  warning: '#ffd557',
  warningText: '#000000',
  info: '#75c8ff',
  infoText: '#fff',
  error: '#ffa3a3',
  errorText: '#fff',
  none: 'rgba(0, 0, 0, 0)',
}

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colours.none,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    left: 0,
    right: 0,
    bottom: 60,
    zIndex: 5,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
    alignSelf: 'center',
    flexGrow: 1,
    resizeMode: 'contain',
  },
  text: {
    flexGrow: 12,
    fontSize: 18,
    fontFamily: 'sans-serif',
    overflow: 'hidden',
  },
  warningText: {
    color: colours.warningText,
  },
  errorText: {
    color: colours.errorText,
  },
  infoText: {
    color: colours.infoText,
  },
  successText: {
    color: colours.successText,
  },
  error: {
    backgroundColor: colours.error,
  },
  warning: {
    backgroundColor: colours.warning,
  },
  info: {
    backgroundColor: colours.info,
  },
  success: {
    backgroundColor: colours.success,
  },
})
