import React, { ReactElement, useState, useEffect } from "react"
import styled from "styled-components"
import { Message } from "./message"
import socketIOClient from "socket.io-client"
import { WSUrl } from "../core/get-api-url"

const Root = styled("div")`
  background-color: #242442;
`

export const ChatPage = (): ReactElement => {
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    const socket = socketIOClient(WSUrl)

    socket.on("init", (data: any) => {
      setMessages(data)
    })
  }, [])

  return (
    <Root>
      {messages.map(
        (message: any): ReactElement => (
          <Message author={message.author} text={message.text} />
        ),
      )}
    </Root>
  )
}
