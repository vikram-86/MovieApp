import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "@/components/Header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header title="Movie App" />
      <View style={styles.containerContent}>
        <Text style={styles.text}>
          Hello World!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Container fills the entire screen
    backgroundColor: '#282c34',
  },

  containerContent: {
    flex: 1,  // Takes up remaining space
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },

  text: {
    color: '#61dafb',
    fontSize: 24,
  }
});
