import Dashboard from "./Layout/Dashboard"
import { AdsProvider } from "./context/AppContext"

function App() {
  return (
   
    <AdsProvider>
      <Dashboard/>
    </AdsProvider>
   
  )
}

export default App
