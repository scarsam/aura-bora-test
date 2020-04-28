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
    <form
      className="d-flex flex-column flex-md-row subscribe"
      onSubmit={handleSubmit}
    >
      <div className="input-wrapper">
        <input
          placeholder="Your email"
          className="d-block margin-bottom-30px padding-top-10px padding-bottom-10px padding-left-10px padding-right-10px"
          id="email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button className="primary-btn text-22px" type="submit">
          Sign up
        </button>
      </div>
    </form>
  )
}

export default Subscribe
