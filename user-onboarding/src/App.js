import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import OnForm from "./component/Form"
import axios from "axios"
import schema from "./validation/formSchema"
import * as yup from "yup"

//Initial State/////
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

function App() {
  return (
    <div className="App">
      <OnForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Form App by Nelson Maldonado</p>
      </header>
    </div>
  )
}

export default App
