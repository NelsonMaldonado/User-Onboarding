import React from "react"

export default function OnForm(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a person</h2>
      </div>
    </form>
  )
}
