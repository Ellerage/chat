import React, { ReactElement, CSSProperties, ChangeEvent } from "react"
import styled from "styled-components"

interface Props {
  label?: string
  value: string
  onChange: (value: string) => void
  style?: CSSProperties
}

const Root = styled("div")`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled("input")`
  height: 38px;
`

export const Input = ({
  label,
  style,
  value,
  onChange,
}: Props): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    onChange(value)
  }

  return (
    <Root style={style}>
      <label>{label}</label>
      <StyledInput type="text" onChange={handleChange} value={value} />
    </Root>
  )
}
