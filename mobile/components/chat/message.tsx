import React, { ReactElement } from "react"
import { View, Text, StyleSheet } from "react-native"

interface Props {
  item: {
    text: string
    author: {
      id: string
      username: string
    }
  }
}

export const Message = ({ item }: Props): ReactElement => (
  <View style={styles.container}>
    <Text style={styles.author}>{item.author.username}</Text>
    <Text style={styles.text}>{item.text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "grey",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  author: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    marginTop: 5,
  },
})
