import React, { ReactElement, useState } from "react"
import { Input } from "../auth/input"
import { WS } from "../core/socket"

interface Props {
  user: { id: string; username: string } | null
}

export const CreateMessage = ({ user }: Props): ReactElement => {
  const [value, setValue] = useState("")

  const handleCreateMessage = (): void => {
    if (!user) {
      window.location.reload()
      return
    }

    WS.emit("create", {
      author: user.username,
      text: value,
    })
  }

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <button onClick={handleCreateMessage}>Create</button>
    </div>
  )
}
