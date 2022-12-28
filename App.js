// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

// Components
import Header from './components/Header';
import Boxes from './components/Boxes'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>TechTack Technologies _ Powered By TeamLitho.</Text>
      <Text style={styles.text1}>
        Technology is defined as “purposeful intervention by design”, and technological practice as the activity through which technological outcomes are created and have impact in the world. Technological outcomes are designed to enhance the capabilities of people and expand human possibilities
      </Text>
      <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    padding: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text1: {
    textAlign: 'center',
    backgroundColor: 'lightslategray',
    padding: 25,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
