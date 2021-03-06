import React from 'react'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Toast from 'components/Toast'
import { useQueryParam } from 'gatsby-query-params'
import heroImage from 'images/header-say-hey.svg'

const Contact = () => {
  const success = useQueryParam('success', false)

  return (
    <Layout>
      <SEO title="Say hey" />
      {success === 'true' && <Toast text={'Message sent'} />}
      <section className="where-to-find">
        <div className="container padding-top-20px">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="text-center padding-bottom-lg-10px hero">
                <img alt="How to contact us" src={heroImage} />
              </div>
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
                    Your name
                    <input
                      className="d-block margin-top-10px"
                      type="text"
                      name="name"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label className="text-20px">
                    Your email
                    <input
                      className="d-block margin-top-10px"
                      type="email"
                      name="email"
                      required
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
                      required
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
