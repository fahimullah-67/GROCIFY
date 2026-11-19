import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-rose-50 text-4xl bg-pink-300 ml-10 mr-10 p-5 rounded-lg shadow-lg shadow-pink-500/50 text-center">
        This is Fahim ullah, don't mind
      </Text>
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
