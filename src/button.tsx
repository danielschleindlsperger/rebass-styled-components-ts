import React from 'react'
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'rebass'

type ButtonProps = BaseButtonProps & {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => (
  <BaseButton
    bg="black"
    color="gray-lightest"
    px={[4, 5]}
    py={[2, 3]}
    fontSize={[2, 3]}
    {...props}
  />
)
