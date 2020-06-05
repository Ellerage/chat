import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import { Message } from "./message"

const Root = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: #242442;
`

export const ChatPage = (): ReactElement => {
  const [messages, setMessages] = useState<any>([])

  return (
    <Root>
      {messages.map((message: any) => {
        return <Message author={message.author} text={message.text} />
      })}
    </Root>
  )
}
