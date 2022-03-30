import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  let thongtin = {
    age: 500,
    name: "dat",
  }
console.log(thongtin.age, thongtin['age']);

  
return (
    <View style={styles.container}>
      <Text children={thongtin.age}/>
      <Text>{thongtin.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
