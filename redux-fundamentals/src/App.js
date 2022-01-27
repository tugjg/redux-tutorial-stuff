
import { useEffect } from "react";
import store from "./redux/store"

function App() {


  useEffect(() => {
    store.dispatch({ type: 'todos/add', payload: 'Learn A' })
    store.dispatch({ type: "filter/color", payload: "red" })
  }, [])


  return null;
}

export default App;
