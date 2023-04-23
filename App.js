import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Epic from './src/components/Epic';
import MainScreen from './screens/MainScreen';
import Panel from './src/components/Panel';
import Screen from './src/components/Screen';
import ScreenManager from './src/components/ScreenManager';
import TrainScreen from './screens/TrainScreen';

export default function App() {
  const [state, setState] = React.useState({
    activeScreenId: "main-screen"
  });

  const openScreen = (activeScreenId) => {
    setState({...state, activeScreenId});
  }

  return (
    <View style={styles.root}>
      <StatusBar style="auto" />

      <ScrollView style={styles.screenContainer}>
          <ScreenManager activeId={state.activeScreenId}>
            <Screen id="main-screen">
              <MainScreen openScreen={openScreen} />
            </Screen>
            <Screen id="train-screen">
              <TrainScreen/>
            </Screen>
          </ScreenManager>
      </ScrollView>

      <Epic
        onClick={(btn) => openScreen(btn.name)}
        buttons={[
          {name: "home-screen", image: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png"},
          {name: "main-screen", image: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png"},
          {name: "train-screen", image: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png"}
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%'
  },
  screenContainer: {
    height: '100%'
  }
})
 