import React, { useState, useEffect, useRef } from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import heroImage from 'images/where-to-find/where-to-find-header.svg'
import USMap from 'images/where-to-find/where-to-find-map.inline.svg'

const clearSelection = state => {
  const previousSelected = document.getElementById(state)
  if (previousSelected) {
    previousSelected.classList.remove('selected-state')
  }
  document.querySelector('html').classList.remove('overflow-hidden')
}

const addSelection = state => {
  document.getElementById(state).classList.add('selected-state')
  document.querySelector('html').classList.add('overflow-hidden')
}

const WhereToFind = () => {
  const innerModal = useRef()
  const [showModal, setShowModal] = useState(false)
  const [state, setState] = useState(null)

  const handleStateSelection = event => {
    const state = event.target.id || event.target.parentNode.id
    if (!state) return

    setState(state)
    addSelection(state)
    setShowModal(true)
  }

  const closeModal = () => {
    clearSelection(state)
    setShowModal(false)
  }

  const handleCloseModalClick = e => {
    if (innerModal.current && !innerModal.current.contains(e.target)) {
      closeModal()
    }
  }

  const handleCloseModalKey = e => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModalKey, false)
    document.addEventListener('mousedown', handleCloseModalClick, false)

    return () => {
      document.removeEventListener('keydown', handleCloseModalKey, false)
      document.removeEventListener('mousedown', handleCloseModalClick, false)
    }
  }, [showModal])

  return (
    <Layout>
      <SEO title="Where to find" />
      <section className="where-to-find">
        <div className="container padding-top-20px">
          <div className="row">
            <div className="col-12">
              <div className="text-center padding-bottom-lg-55px hero">
                <img alt="Where to find us" src={heroImage} />
              </div>
            </div>
            <div className="col-10 offset-1 col-md-8 offset-md-2">
              <p className="text-24px">
                Looking for Aura Bora in the wild?{' '}
                <span className="d-md-block">Click on your state below.</span>
              </p>
            </div>
          </div>
          <div className="row padding-bottom-50px">
            <div className="col-12">
              <USMap
                className="width-100 height-auto"
                onClick={handleStateSelection}
              />
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="modal">
          <div className="modal-content height-100 relative">
            <div className="container padding-top-20px height-100">
              <div className="row padding-bottom-30px">
                <div
                  ref={innerModal}
                  className="col-12 col-md-10 offset-md-1 padding-bottom-60px"
                >
                  <section className="padding-none d-flex justify-content-center align-items-center text-center modal-title z-index-1">
                    <h2 className="margin-bottom-none text-30px absolute">
                      {state}
                    </h2>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={closeModal}
                      onKeyDown={closeModal}
                      className="close-icon d-block"
                    />
                  </section>
                  <section className="bg-white padding-top-40px padding-bottom-40px">
                    <ul className="text-center relative">
                      {whereToFind.map((state, index) => (
                        <div
                          key={state.name}
                          className={`${
                            whereToFind.length - 1 === index
                              ? 'padding-bottom-none'
                              : 'padding-bottom-45px'
                          }`}
                        >
                          <h2 className="text-36px font-barlow">
                            {state.name}
                          </h2>
                          {state.stores.map(store => (
                            <address
                              key={store.name}
                              className="font-style-normal"
                            >
                              <p className="text-20px">
                                <strong className="d-block">
                                  {store.name}
                                </strong>
                                {store.address}
                              </p>
                            </address>
                          ))}
                        </div>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default WhereToFind

const whereToFind = [
  {
    name: 'San Francisco, CA',
    stores: [
      {
        name: 'Buffalo Whole Foods',
        address: '598 Castro Street',
      },
      {
        name: 'Green Earth Natural',
        address: '860 Divisadero Street',
      },
      {
        name: 'Bayside Market',
        address: '120 Brannan Street',
      },
      {
        name: 'Other Avenues',
        address: '3930 Judah Street',
      },
      {
        name: "Bryan's Grocery",
        address: '3445 California Street',
      },
      {
        name: 'Cal-Mart Calif Street',
        address: '3585 California Street',
      },
      {
        name: 'Valencia Whole Foods',
        address: '999 Valencia Street',
      },
      {
        name: "RJ's Market",
        address: '1425 Sansome Street',
      },
      {
        name: 'Casa Guadalupe',
        address: '2999 Mission Street',
      },
      {
        name: 'Harvest Hills Market',
        address: '3216 Folsom Street',
      },
      {
        name: 'Rincon Market',
        address: '98 Howard Street',
      },
    ],
  },
  {
    name: 'Oakland, CA',
    stores: [
      {
        name: 'Piedmont Grocery',
        address: '4038 Piedmont Avenue',
      },
    ],
  },
  {
    name: 'Alameda, CA',
    stores: [
      {
        name: 'A-1 Market',
        address: '1420 Encinal Avenue',
      },
    ],
  },
  {
    name: 'Arcata,	CA',
    stores: [
      {
        name: "Murphy's Market",
        address: 'Sunnybrae 785 Bayside Road',
      },
      {
        name: 'Wildberries Marketplace',
        address: '747 13th Street',
      },
    ],
  },
  {
    name: 'Crescent City, CA',
    stores: [
      {
        name: 'Wild Rivers Market',
        address: '450 M Street',
      },
    ],
  },
  {
    name: 'Davis, CA',
    stores: [
      {
        name: 'Davis Food Co-op',
        address: '620 G Street',
      },
    ],
  },
  {
    name: 'Eureka, CA',
    stores: [
      {
        name: 'Eureka Natural Foods',
        address: '1450 Broadway Street',
      },
    ],
  },
  {
    name: 'Lafayette, CA',
    stores: [
      {
        name: 'Diablo Foods Lafayette',
        address: '3615 Mt Diablo Boulevard',
      },
    ],
  },
  {
    name: 'McKinleyville, CA',
    stores: [
      {
        name: 'Eureka Natural #2',
        address: '2165 Central Avenue',
      },
    ],
  },
  {
    name: 'Palo Alto, CA',
    stores: [
      {
        name: "Sigona's Farmers Market",
        address: '2345 Middlefield Road',
      },
      {
        name: "Piazza's Fine Foods Palo Alto",
        address: '3922 Middlefield Road',
      },
    ],
  },
  {
    name: 'Placerville, CA',
    stores: [
      {
        name: 'Placerville Food Co-op',
        address: '535 Placerville Drive',
      },
    ],
  },
  {
    name: 'Redwood City, CA',
    stores: [
      {
        name: "Sigona's Farmers Market",
        address: '2345 Middlefield Road',
      },
    ],
  },
  {
    name: 'Sebastopol, CA',
    stores: [
      {
        name: "Andy's Produce Market",
        address: '1691 Gravenstein Hwy N',
      },
    ],
  },
  {
    name: 'Tahoe, CA',
    stores: [
      {
        name: 'New Moon Natural Foods',
        address: '505 West Lake Boulevard',
      },
    ],
  },
  {
    name: 'Trinidad, CA',
    stores: [
      {
        name: "Murphy's Market Trinidad",
        address: '1 Main Street',
      },
    ],
  },
  {
    name: 'Ukiah, CA',
    stores: [
      {
        name: 'Ukiah Natural Foods Co-op',
        address: '721 S State Street',
      },
    ],
  },
  {
    name: 'Denver, CO',
    stores: [
      {
        name: 'Leevers Locavore',
        address: '2630 W 38th Avenue',
      },
      {
        name: 'Truffle Cheese Shop',
        address: '2906 E 6th Avenue',
      },
      {
        name: 'Nooch Vegan Market',
        address: '10 E Ellsworth Avenue',
      },
      {
        name: "Spinelli's Market",
        address: '4621 E 23rd Avenue',
      },
    ],
  },
  {
    name: 'Casper, WY',
    stores: [
      {
        name: 'Grant Street Market',
        address: '815 S Grant Avenue',
      },
    ],
  },
]
