import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>
        Hello, World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor : '#282c34',
  },
  text: {
    color: '#61dafb',
    fontSize: 24,
  }
});
