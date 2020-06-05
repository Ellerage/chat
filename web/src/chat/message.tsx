import React, { ReactElement } from "react"

interface Props {
  author: string
  text: string
}

export const Message = ({ author, text }: Props): ReactElement => {
  return (
    <div>
      <p>{author}</p>
      <p>{text}</p>
    </div>
  )
}
