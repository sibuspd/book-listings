import "./components/style.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Outlet} from "react-router-dom"
import userContext from "./utils/userContext"
import { useState } from "react"
import {Provider}  from "react-redux"
import appStore from "./utils/appStore"

function App() {

  const [userName, setUserName] = useState("Guest");
  return (
    <> 
        <Provider store={appStore}>
          <h1 id="Heading">Welcome to Book Management Application</h1>
          <userContext.Provider value = {{ username: userName, loginStatus: false, setUserName}}>
            <Header/>
          </userContext.Provider>
          <Outlet/>
          <Footer/>
        </Provider>
    </>
  )
}
export default App
