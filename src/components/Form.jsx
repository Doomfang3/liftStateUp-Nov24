import { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    console.log({ email, password, isChecked })
  }

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            required
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            required
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <label>
          Sell your soul
          <input
            type='checkbox'
            required
            checked={isChecked}
            onChange={event => setIsChecked(event.target.checked)}
          />
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form
