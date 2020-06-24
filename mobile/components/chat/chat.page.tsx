import React, { ReactElement, useEffect, useState } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { getApiUrl } from "../core/get-api-url"
import { tokenJwt } from "../auth/token"
import { Socket } from "../core/socket"
import { CreateMessage } from "./create-message"
import { Message } from "./message"

export const ChatPage = (): ReactElement => {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(getApiUrl("auth/me"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenJwt.value}`,
      },
    })
      .then((response) => response.json())
      .then((response) => setUser(response))

    const WS = Socket.getInstance()

    WS.on("init", (messages: any) => {
      setMessages(messages)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>

      <FlatList
        data={messages}
        renderItem={({ item }) => <Message item={item} />}
        keyExtractor={(item: any) => item.id}
      />

      <CreateMessage user={user} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontWeight: "bold", fontSize: 32, paddingBottom: 15 },
})
