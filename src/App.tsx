import React from 'react'
import "./css/reset.scss"
import "./css/global.scss"
import Main from "./features/main/Main";
import {SnackbarProvider} from "notistack";

const App: React.FC = () => {
  return (
      <SnackbarProvider>
          <div className="App">
              <Main/>
          </div>
     </SnackbarProvider>
  )
}

export default App
