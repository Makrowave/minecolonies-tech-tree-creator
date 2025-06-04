import './App.css'
import AppDrawerLayout from "./components/layout/AppDrawerLayout.tsx";
import store from "./stores/Store.ts";
import {Provider} from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppDrawerLayout />
      </Provider>
    </>
  )
}

export default App
