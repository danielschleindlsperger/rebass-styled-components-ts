import React, { useState, useEffect } from 'react'
import { Box, Flex } from 'rebass'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-style'
import { theme } from './theme'
import { TextBase, HeadlineBase } from './typography'
import { Button } from './button'

// use base components to create more specific ones
const AppHeadline = ({ children }: { children: React.ReactNode }) => (
  <HeadlineBase as="h1" fontSize={8}>
    {children}
  </HeadlineBase>
)

const Papaya = () => {
  const [bangCount, setBangs] = useState(1)
  const [isMad, setMadness] = useState(true)

  useEffect(() => {
    if (isMad) {
      const MAX_BANGS = 5
      const intervalId = setInterval(() => setBangs(bangs => (bangs % MAX_BANGS) + 1), 300)
      return () => clearInterval(intervalId)
    }

    return undefined
  }, [isMad])

  return (
    <Box as="article" p={4} mt={[0, 4]} mx="auto" bg="papayawhip" width={[1, 600]}>
      <AppHeadline>Hello{'!'.repeat(bangCount)}</AppHeadline>
      <TextBase as="section" mt={3}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti eaque alias tenetur
        aliquid excepturi reiciendis? Voluptatibus nostrum dicta id.
      </TextBase>
      <Flex justifyContent="center" mt={[4, 5]}>
        <Button onClick={() => setMadness(madness => !madness)}>
          {isMad ? 'Stop this madness!' : 'Actually...'}
        </Button>
      </Flex>
    </Box>
  )
}

export const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Papaya />
    </>
  </ThemeProvider>
)
