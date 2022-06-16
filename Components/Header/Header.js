import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 23, color: "white", textAlign: "center" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
});
