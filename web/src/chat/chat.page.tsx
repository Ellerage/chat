import React, { ReactElement, useState, useEffect } from "react"
import { Message } from "./message"
import { WS } from "../core/socket"
import { CreateMessage } from "./create-message"
import { getUser } from "../core/get-user"
import styled from "styled-components"

const Root = styled("div")`
  padding-left: 20px;
  padding-right: 20px;
`

export const ChatPage = (): ReactElement => {
  const [messages, setMessages] = useState<any>([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser().then((res) => setUser(res))

    WS.on("init", (data: any) => {
      setMessages(data)
    })
  }, [])

  return (
    <Root>
      {messages.map(
        (message: any, index: number): ReactElement => (
          <Message key={index} author={message.author} text={message.text} />
        ),
      )}

      <CreateMessage user={user} />
    </Root>
  )
}
