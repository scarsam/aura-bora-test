import React, { useEffect, useState } from 'react'
import SEO from 'components/seo'
import Layout from 'components/layout'
import heroImage from 'images/mood/mood-header.svg'
import instagramLogo from 'images/mood/mood-instagram.svg'

const Mood = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/.netlify/functions/aura-bora-instagram')
      .then(res => res.json())
      .then(({ posts }) => {
        setImages(posts)
      })
      .catch(error => setError(error))
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <Layout>
      <SEO title="Say hey" />
      <section className="mood">
        <div className="container padding-top-20px">
          <div className="row padding-bottom-50px">
            <div className="col-12">
              <div className="text-center padding-bottom-lg-55px hero">
                <img
                  className="margin-bottom-none"
                  alt="Mood"
                  src={heroImage}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center margin-bottom-30px">
                <img className="padding-right-25px" src={instagramLogo} />
                <a
                  className="d-inline-block primary-link text-22px margin-bottom-15px"
                  href="https://www.instagram.com/drinkaurabora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @drinkaurabora
                </a>
              </div>
            </div>
            {images.length > 0 ? (
              images.map(image => (
                <div className="col-6">
                  <a
                    className="d-inline-block mood-url padding-bottom-20px"
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mood-image margin-bottom-none"
                      src={image.imageUrl}
                    />
                  </a>
                </div>
              ))
            ) : (
              <div className="col-12 text-center padding-top-50px padding-bottom-50px">
                <h2>Loading..</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Mood
