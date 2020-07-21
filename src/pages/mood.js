import React, { useEffect, useState } from 'react'
import SEO from 'components/seo'
import Layout from 'components/layout'
import heroImage from 'images/mood/mood-header.svg'
import instagramLogo from 'images/mood/mood-instagram.svg'

const Mood = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)

  const fetchInstagram = async () => {
    try {
      const res = await fetch('https://www.instagram.com/drinkaurabora?__a=1')
      const {
        graphql: { user },
      } = await res.json()
      const posts =
        user.edge_owner_to_timeline_media.edges.map(edge => {
          return {
            id: edge.node.id,
            url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
            imageUrl: edge.node.display_url,
          }
        }) || []
      setImages(posts)
    } catch (error) {
      setImages([])
      setError(error)
    }
  }

  useEffect(() => {
    fetchInstagram()
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
              <div className="d-flex justify-content-center align-items-center margin-bottom-10px margin-bottom-md-30px">
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
                <div key={image.id} className="col-sm-6">
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
