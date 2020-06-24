import React, { ReactElement, useState } from "react"
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native"
import { Socket } from "../core/socket"

interface Props {
  user: { id: string; username: string } | null
}

export const CreateMessage = ({ user }: Props): ReactElement => {
  const [value, setValue] = useState("")

  const handleCreateMessage = (): void => {
    if (!user) {
      return
    }

    const WS = Socket.getInstance()

    WS.emit("create", {
      authorId: user.id,
      text: value,
    })

    setValue("")
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setValue} value={value} />

      <TouchableOpacity style={styles.button} onPress={handleCreateMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
  },
  button: {
    width: "20%",
    backgroundColor: "rgb(33, 150, 243)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
})
