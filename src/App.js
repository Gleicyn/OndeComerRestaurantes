import React from 'react';
import {ThemeProvider} from 'styled-components'
import {Reset} from 'styled-reset'

import thema from './theme'
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={thema}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  )
}

export default App;
