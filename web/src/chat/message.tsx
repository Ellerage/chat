import React, { ReactElement } from "react"
import styled from "styled-components"

interface Props {
  author: string
  text: string
}

const Root = styled("div")``
const Author = styled("p")``
const Text = styled("p")``

export const Message = ({ author, text }: Props): ReactElement => (
  <Root>
    <Author>{author}</Author>
    <Text>{text}</Text>
  </Root>
)
