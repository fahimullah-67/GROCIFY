import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>This is Fahim ullah, don't mind</Text>
      <Link href="/contact">Go to Contact</Link>
      <Link href="/about">Go to About</Link>
      <Link href="/contact">Go to Contact</Link>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
