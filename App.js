import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TrainScreen from './screens/TrainScreen';
import ScreenManager from './src/components/ScreenManager';
import Screen from './src/components/Screen';

export default function App() {
  const [state, setState] = React.useState({
    activeScreenId: "train-screen"
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScreenManager activeId={state.activeScreenId}>
        <Screen id="train-screen">
          <TrainScreen/>
        </Screen>
      </ScreenManager>
    </View>
  );
}

const styles = StyleSheet.create({})
 