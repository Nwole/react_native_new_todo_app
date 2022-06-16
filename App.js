import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, Alert, View } from "react-native";
import ListItem from "./Components/ListItem/Listitem";
import Header from "./Components/Header/Header";
import AddItem from "./Components/AddItem/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "milk" },
    { id: 2, text: "eggs" },
    { id: 3, text: "bread" },
    { id: 4, text: "juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };

  const addItem = (text = "") => {
    if (text.length === 0) {
      Alert.alert("Error", "Please enter an item", [
        {
          text: "ok",
          onPress: () => {},
        },
      ]);
    } else {
      setItems((prevItem) => {
        return [{ id: Math.random(), text }, ...prevItem];
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Shopping List"} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return <ListItem item={item} deleteItem={deleteItem} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
