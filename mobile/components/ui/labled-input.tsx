import React, { ReactElement } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

interface Props {
  label?: string
  value: string
  onChange: (newValue: string) => void
}

export const LabelInput = ({ label, value, onChange }: Props): ReactElement => (
  <View>
    <Text>{label}</Text>
    <TextInput value={value} onChangeText={onChange} style={styles.textInput} />
  </View>
)

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    height: 44,
  },
})
