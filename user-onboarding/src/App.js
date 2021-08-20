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

const initialUser = []
const initialDisabled = true

function App() {
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialDisabled)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUser = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(`This is the res from API`, { response })
        setUser(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res)
        setUser([res.data.data, ...user])
      })
      .catch((err) => console.log(err))
    setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // terms: false,     << Finish this line
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <OnForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Form App by Nelson Maldonado</p>
      </header>
    </div>
  )
}

export default App
