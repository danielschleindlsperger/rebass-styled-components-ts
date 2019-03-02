import React from 'react'
import { Text, TextProps } from 'rebass'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type TypographyProps = Omit<TextProps & { children: React.ReactNode }, 'fontFamily'>

type HeadlineProps = Omit<TypographyProps, 'fontWeight'>

export const HeadlineBase = (props: HeadlineProps) => (
  <Text fontFamily="sans" fontSize={6} fontWeight="bold" color="black" {...props} />
)

export const TextBase = (props: TypographyProps) => (
  <Text fontFamily="text" fontSize={3} lineHeight="1.5" color="black" {...props} />
)
