import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log("App Loaded");
  return (
    <View style={styles.container} >
      <Text onPress={() => console.log("text clicked")}>Pravin kanthis is a really really long text i wnat is eve loger htat he uanfun</Text>
      <Image
        onClick={() => console.log("photo clicked")}
        // blurRadius={10}
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300
        }} />
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
