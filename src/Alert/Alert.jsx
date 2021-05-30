import React, { memo, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated, Text, Image } from 'react-native'

import { types } from '../redux/constants'
import success from '../assets/success.png'
import info from '../assets/info.png'
import warning from '../assets/warning.png'
import error from '../assets/error.png'
import styles from '../styles'

const Alert = ({
  message, duration, type, containerStyles, textStyles, iconStyles, useNativeDriver, hide: _hide, showIcon, animated,
}) => {
  const opacity = useRef(new Animated.Value(0)).current
  const [alertTimeout, setAlertTimeout] = useState(null)
  const [typeStyles, setTypeStyles] = useState({})
  const [typeTextStyles, setTypeTextStyles] = useState({})

  const isReady = () => message && duration && type

  const show = () => {
    if (animated) {
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver,
      }).start()
    }
  }

  const hide = () => {
    setAlertTimeout(null)

    if (animated) {
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver,
      }).start(_hide)
    } else {
      _hide()
    }
  }

  useEffect(() => {
    if (isReady()) {
      clearTimeout(alertTimeout)

      if (type === types.INFO) {
        setTypeStyles(styles.info)
        setTypeTextStyles(styles.infoText)
      } else if (type === types.SUCCESS) {
        setTypeStyles(styles.success)
        setTypeTextStyles(styles.successText)
      } else if (type === types.WARNING) {
        setTypeStyles(styles.warning)
        setTypeTextStyles(styles.warningText)
      } else if (type === types.ERROR) {
        setTypeStyles(styles.error)
        setTypeTextStyles(styles.errorText)
      } else {
        setTypeStyles({})
        setTypeTextStyles({})
      }

      const timeout = setTimeout(hide, duration)
      setAlertTimeout(timeout)
      show()
    } else {
      hide()
    }
  }, [message, duration, type])

  if (!isReady()) {
    return null
  }

  return (
    <Animated.View style={[styles.container, styles.shadow, typeStyles, containerStyles, animated && { opacity }]}>
      {showIcon && type === types.INFO && <Image source={info} style={[styles.icon, iconStyles]} />}
      {showIcon && type === types.ERROR && <Image source={error} style={[styles.icon, iconStyles]} />}
      {showIcon && type === types.WARNING && <Image source={warning} style={[styles.icon, iconStyles]} />}
      {showIcon && type === types.SUCCESS && <Image source={success} style={[styles.icon, iconStyles]} />}
      <Text style={[styles.text, typeTextStyles, textStyles]}>
        {message}
      </Text>
    </Animated.View>
  )
}

Alert.propTypes = {
  /** containerStyles prop is used as a style for Animated.View container */
  containerStyles: PropTypes.object, // eslint-disable-line

  /** Styles for the text shown in the Alert */
  textStyles: PropTypes.object, // eslint-disable-line

  /** Styles for the icon shown in the Alert */
  iconStyles: PropTypes.object, // eslint-disable-line

  /** Specifies if useNativeDriver should be used for animations of Alert, default: `true` */
  useNativeDriver: PropTypes.bool,

  /** Specifies if useNativeDriver should be used for animations of Alert, default: `false` */
  showIcon: PropTypes.bool,

  /** The transition animation. Currently 'fade' is the only one supported. */
  transition: PropTypes.oneOf(['fade']),

  /** Enable animations, default: `true` */
  animated: PropTypes.bool,

  /** A function which is called after the alert has been shown for `duration` milliseconds. *You should not change this prop unless you know what are you doing!* */
  hide: PropTypes.func.isRequired,
  message: PropTypes.string,
  duration: PropTypes.number,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
}

Alert.defaultProps = {
  containerStyles: {},
  textStyles: {},
  useNativeDriver: true,
  showIcon: true,
  message: '',
  duration: 0,
  type: types.INFO,
  animated: true,
}

Alert.displayName = 'Alert'

export default memo(Alert)
