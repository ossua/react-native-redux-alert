import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { Alert } from 'react-native-redux-alert'

import store from './src/redux/store'
import Home from './src/Home'

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Home />
      <Alert useNativeDriver />
    </SafeAreaView>
  </Provider>
)

export default App
