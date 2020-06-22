import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { ChatPage } from "./components/chat/chat.page"
import { AuthPage } from "./components/auth/auth.page"

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <View style={styles.container}>
      {isChatOpen ? (
        <ChatPage />
      ) : (
        <AuthPage openChat={(): void => setIsChatOpen(true)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    height: "100%",
  },
})
