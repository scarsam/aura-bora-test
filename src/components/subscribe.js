import React, { useState } from 'react'
import Toast from 'components/Toast'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// https://thetrevorharmon.com/blog/email-signup-forms-with-gatsby-and-mailchimp
const Subscribe = () => {
  const [sent, sentEmail] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email)
      .then(({ result }) => {
        result === 'success' ? sentEmail(true) : sentEmail(false)
        setEmail('')
      })
      // Errors in here are client side
      // Mailchimp always returns a 200
      .catch(error => console.error(error))
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <>
      {sent && <Toast show={true} text={'Subscribed'} />}
      <form
        className="d-flex flex-column flex-md-row subscribe flex-fill padding-top-10px"
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
    </>
  )
}

export default Subscribe
