import React, { useState } from "react"
import { AuthModal } from "./auth/auth-modal"
import { ChatPage } from "./chat/chat.page"
import Cookies from "js-cookie"

export const App = () => {
  const [isShowChat, setIsShowChat] = useState(false)

  const closeAuthModal = (): void => {
    setIsShowChat(true)
  }

  return (
    <div>
      {isShowChat || !!Cookies.get("token") ? (
        <ChatPage />
      ) : (
        <AuthModal closeAuthModal={closeAuthModal} />
      )}
    </div>
  )
}
