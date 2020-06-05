import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import { Input } from "./input"
import { getApiUrl } from "../core/get-api-url"
import { getToken } from "../core/get-token"
import Cookies from "js-cookie"

interface Props {
  closeAuthModal: () => void
}

const Root = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #242442;
  top: 0;
  left: 0;
  padding-top: 25px;
`

const Content = styled("div")`
  margin-left: auto;
  margin-right: auto;
  max-width: 315px;
`

const Button = styled("button")`
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
`

const ToggleModal = styled("p")`
  cursor: pointer;
`

export const AuthModal = ({ closeAuthModal }: Props): ReactElement => {
  const [isSignup, setAuthType] = useState(true)

  const [values, setValues] = useState({
    login: "",
    password: "",
  })

  const handleSubmit = async (): Promise<void> => {
    const { login, password } = values

    if (isSignup) {
      await fetch(getApiUrl("auth/signup"), {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login,
          password,
        }),
      })

      setAuthType(false)
    }

    if (!isSignup) {
      const token = await fetch(getApiUrl("auth/signin"), {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
        body: JSON.stringify({
          username: login,
          password,
        }),
      }).then((res) => res.json())

      if (token.accessToken) {
        Cookies.set("token", token.accessToken)
        closeAuthModal()
      }
    }
  }

  return (
    <Root>
      <Content>
        <h3>{isSignup ? "Sign up" : "Sign in"}</h3>

        <Input
          value={values.login}
          onChange={(login: string): void => {
            setValues({
              ...values,
              login,
            })
          }}
          style={{ marginTop: "25px" }}
          label="Login"
        />

        <Input
          value={values.password}
          onChange={(password: string): void => {
            setValues({
              ...values,
              password,
            })
          }}
          style={{ marginTop: "25px" }}
          label="Password"
        />

        <ToggleModal onClick={(): void => setAuthType(!isSignup)}>
          {isSignup ? "I already have an account" : "Toggle to Sigh up"}
        </ToggleModal>

        <Button onClick={handleSubmit}>Submit</Button>
      </Content>
    </Root>
  )
}
