import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView} from 'react-native'

import { Provider } from 'react-redux';
 import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Navigator from './src/routes/Navigator'


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
         <SafeAreaView style={{flex:1}}>
          <Navigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>



  );
};

export default App;

