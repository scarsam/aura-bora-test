import React from 'react'
import Layout from 'components/layout'
import Toast from 'components/Toast'
import { useQueryParam } from 'gatsby-query-params'

const Contact = () => {
  const success = useQueryParam('success', false)

  return (
    <Layout>
      {success === 'true' && <Toast show={true} text={'Message sent'} />}
      <section className="where-to-find">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <h1 className="text-36px font-barlow">Contact</h1>
              <form
                className="contact"
                action="/contact?success=true"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label className="text-20px">
                    Your Name
                    <input
                      className="d-block margin-top-10px"
                      type="text"
                      name="name"
                    />
                  </label>
                </p>
                <p>
                  <label className="text-20px">
                    Your Email
                    <input
                      className="d-block margin-top-10px"
                      type="email"
                      name="email"
                    />
                  </label>
                </p>
                <p>
                  <label className="text-20px">
                    Message
                    <textarea
                      className="d-block margin-top-10px"
                      name="message"
                      rows="10"
                    ></textarea>
                  </label>
                </p>
                <p>
                  <button className="primary-btn text-22px" type="submit">
                    Send
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
