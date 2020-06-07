import React, { ReactElement, useState } from "react"
import { Input } from "../auth/input"
import { WS } from "../core/socket"
import styled from "styled-components"

interface Props {
  user: { id: string; username: string } | null
}

const Root = styled("div")`
  display: flex;
`

export const CreateMessage = ({ user }: Props): ReactElement => {
  const [value, setValue] = useState("")

  const handleCreateMessage = (): void => {
    if (!user) {
      window.location.reload()
      return
    }

    WS.emit("create", {
      authorId: user.id,
      text: value,
    })

    setValue("")
  }

  return (
    <Root>
      <Input value={value} onChange={setValue} />
      <button onClick={handleCreateMessage}>Create</button>
    </Root>
  )
}
