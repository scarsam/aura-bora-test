import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import heroImage from 'images/header-where-to-find.svg'
import animal from 'images/where-to-find/animal.svg'
import coco from 'images/where-to-find/coco.svg'
import cucumber from 'images/where-to-find/cucumber.svg'
import grass from 'images/where-to-find/grass.svg'
import kale from 'images/where-to-find/kale.svg'
import strawberry from 'images/where-to-find/strawberry.svg'
import watermelonKale from 'images/where-to-find/watermelon-kale.svg'
import watermelon from 'images/where-to-find/watermelon.svg'

const WhereToFind = () => {
  return (
    <Layout>
      <SEO title="Where to find" />
      <section className="where-to-find">
        <div className="container padding-top-20px">
          <div className="row padding-bottom-30px">
            <div className="col-12 padding-bottom-60px">
              <div className="text-center padding-bottom-lg-10px hero">
                <img alt="Where to find us" src={heroImage} />
              </div>
              <ul className="text-center relative">
                {whereToFind.map((state, index) => (
                  <div
                    key={state.name}
                    className={`${
                      whereToFind.length - 1 === index
                        ? 'padding-bottom-none'
                        : 'padding-bottom-45px'
                    } relative z-index-2`}
                  >
                    <h2 className="text-36px font-barlow">{state.name}</h2>
                    {state.stores.map(store => (
                      <address key={store.name} className="font-style-normal">
                        <p className="text-20px">
                          <strong className="d-block">{store.name}</strong>
                          {store.address}
                        </p>
                      </address>
                    ))}
                  </div>
                ))}
                {images.map((image, index) => (
                  <img
                    key={index}
                    alt={image.alt}
                    src={image.url}
                    className={`absolute z-index-1 image-${index}`}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WhereToFind

const images = [
  {
    url: animal,
    alt: 'Animal',
  },
  {
    url: coco,
    alt: 'Floating cocos',
  },
  {
    url: cucumber,
    alt: 'Cucumber',
  },
  {
    url: grass,
    alt: 'Grass',
  },
  {
    url: kale,
    alt: 'Kale',
  },
  {
    url: strawberry,
    alt: 'Strawberry',
  },
  {
    url: watermelonKale,
    alt: 'Watermelon and Kale',
  },
  {
    url: watermelon,
    alt: 'Watermelon',
  },
]

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
