import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// https://thetrevorharmon.com/blog/email-signup-forms-with-gatsby-and-mailchimp
const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email)
      .then(data => {
        alert(data.result)
      })
      .catch(error => {
        console.error(error)
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <form className="d-flex subscribe" onSubmit={handleSubmit}>
      <label className="pr-3 pt-2" htmlFor="email">
        <strong>Email</strong>
      </label>
      <div className="input-wrapper">
        <input
          className="d-block mb-4 p-2"
          id="email"
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button className="primary-btn" type="submit">
          Sign up
        </button>
      </div>
    </form>
  )
}

export default Subscribe
