import React, { ReactElement } from "react"
import styled from "styled-components"

interface Props {
  author: string
  text: string
}

const Root = styled("div")`
  border: 1px solid grey;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
`

const Author = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 20px;
`

const Text = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
  margin-top: 15px;
`

export const Message = ({ author, text }: Props): ReactElement => (
  <Root>
    <Author>{author}</Author>
    <Text>{text}</Text>
  </Root>
)
