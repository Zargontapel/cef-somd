import {
  ChakraProvider,
  Box,
  extendTheme,
  VStack,
  Grid,
  ColorModeScript,
} from "@chakra-ui/react"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppHeader from "./AppHeader"
import Home from './pages/Home';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#9f9f9f",
      // ...
      900: "#1a202c",
    },
  },
})

export const App = () => (
  <React.StrictMode>
  <BrowserRouter>
    <ColorModeScript />
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
        <AppHeader />
        <Box width="80%">
    <Routes>
      <Route index element={<Home />} />
      <Route path="volunteer-info" element={<>Volunteer Info</>} />
      <Route path="volunteer-signup" element={<>Sign up here to volunteer</>} />
      <Route path="signup-fiveday" element={<>Sign up here for 5-day club</>} />
      <Route path="signup-weekly" element={<>Sign up here for GNC weekly meetings</>} />
      <Route path="about" element={<>About Page</>} />
    </Routes>
    </Box>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>
)
