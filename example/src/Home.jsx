import React from 'react'
import { StyleSheet, Button, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'react-native-redux-alert'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: Dimensions.get('window').height,
    paddingBottom: 150,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
  }
})

const Home = ({ dispatch }) => {
  const infoHandler = () => {
    dispatch(actions.showInfo('Some info message', 2500))
  }
  
  const warningHandler = () => {
    dispatch(actions.showWarning('Some very very very very very very very very very very looooooong warning message', 2500))
  }

  const errorHandler = () => {
    dispatch(actions.showError('Some error message', 2500))
  }

  const successHandler = () => {
    dispatch(actions.showSuccess('Some success message', 2500))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>An example of react-native-redux-alert</Text>
      <Button title={'Show info'} onPress={infoHandler} />
      <Button title={'Show warning'} onPress={warningHandler} />
      <Button title={'Show error'} onPress={errorHandler} />
      <Button title={'Show success'} onPress={successHandler} />
    </View>
  )
}

export default connect()(Home)
