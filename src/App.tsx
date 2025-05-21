import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { isDarkAtom } from './atoms'
import { darkTheme, lightTheme } from './styles/theme'
import Header from './components/Header'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
    line-height: 1.5;
    color: ${props => props.theme.colors.text};
  }

  /* Remove list styles */
  ul, ol {
    list-style: none;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
  }

  /* Remove default link styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Remove default input styles */
  input, textarea, select {
    font: inherit;
    border: none;
    outline: none;
  }

  /* Remove default table styles */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Remove default image styles */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Remove default fieldset styles */
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Remove default legend styles */
  legend {
    padding: 0;
  }
`

const Container = styled.div`
  max-width: 640px;
  min-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Contents = styled.main`
  min-height: 480px;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.sm};
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Contents>
          <Outlet />
        </Contents>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
