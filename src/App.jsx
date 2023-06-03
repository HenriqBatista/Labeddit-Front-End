import GlobalContextProvider from "./context/GlobalContext";
import Router from "./routes/Router"

const App = () => {
  return (
    <GlobalContextProvider>
      <Router/>
    </GlobalContextProvider>
  )
}

export default App