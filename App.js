import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrainScreen from './screens/TrainScreen';

export default function App() {
  return (
    <View style={styles.container}>
    
      <TrainScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({})
 