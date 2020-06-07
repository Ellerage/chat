import React, { ReactElement } from "react"
import styled from "styled-components"
import Cookies from "js-cookie"

const Button = styled("button")`
  display: flex;
  margin-left: auto;
`

export const Logout = (): ReactElement => {
  const handleLogOut = (): void => {
    Cookies.remove("token")
    window.location.reload()
  }

  return <Button onClick={handleLogOut}>Log out</Button>
}
