import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChangeText = (textValue) => {
    setText(textValue);
  };

  //   const onPressHandler = () => {};
  return (
    <View style={styles}>
      <TextInput
        placeholder="Add Items..."
        value={text}
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <Text style={styles.btnText}>
          <Entypo name="circle-with-plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    // backgroundColor: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
