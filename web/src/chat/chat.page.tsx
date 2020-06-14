import React, { ReactElement, useState, useEffect } from "react"
import { Message } from "./message"
import { WS } from "../core/socket"
import { CreateMessage } from "./create-message"
import styled from "styled-components"
import { Logout } from "./logout"
import { getToken } from "../core/get-token"
import { getApiUrl } from "../core/get-api-url"
import Cookies from "js-cookie"

export interface Message {
  id: string
  text: string
  author: {
    id: string
    username: string
  }
}

const Root = styled("div")`
  padding-left: 20px;
  padding-right: 20px;
`

export const ChatPage = (): ReactElement => {
  const [messages, setMessages] = useState<Message[]>([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(getApiUrl("auth/me"), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 401) {
          Cookies.remove("token")
        }
        setUser(response)
      })

    WS.on("init", (messages: any) => {
      setMessages(messages)
    })
  }, [])

  return (
    <Root>
      <Logout />

      <div>
        {messages.map(
          (message: Message, index: number): ReactElement => (
            <Message
              key={index}
              author={message.author.username}
              text={message.text}
            />
          ),
        )}
      </div>

      <CreateMessage user={user} />
    </Root>
  )
}
