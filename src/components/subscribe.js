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
      <label
        className="padding-right-20px padding-top-20px text-large"
        htmlFor="email"
      >
        <strong>Email</strong>
      </label>
      <div className="input-wrapper">
        <input
          className="d-block margin-bottom-30px margin-top-15px padding-top-10px padding-bottom-10px padding-left-10px padding-right-10px"
          id="email"
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button className="primary-btn text-large" type="submit">
          Sign up
        </button>
      </div>
    </form>
  )
}

export default Subscribe
