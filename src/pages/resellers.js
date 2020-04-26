import React from 'react'
import Layout from 'components/layout'
import heroImage from 'images/resellers.svg'
import animal from 'images/resellers/animal.svg'
import coco from 'images/resellers/coco.svg'
import cucumber from 'images/resellers/cucumber.svg'
import grass from 'images/resellers/grass.svg'
import kale from 'images/resellers/kale.svg'
import strawberry from 'images/resellers/strawberry.svg'
import watermelonKale from 'images/resellers/watermelon-kale.svg'
import watermelon from 'images/resellers/watermelon.svg'

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

const resellers = [
  {
    state: 'San Francisco, CA',
    stores: [
      {
        name: 'Buffalo Whole Foods',
        address: '598 Castro St',
      },
      {
        name: 'Green Earth Natural',
        address: '860 Divisadero St',
      },
      {
        name: 'Bayside Market',
        address: '120 Brannan St',
      },
      {
        name: 'Other Avenues',
        address: '3930 Judah St.',
      },
      {
        name: "Bryan's Grocery",
        address: '3445 California St',
      },
      {
        name: 'Cal-Mart Calif Street',
        address: '3585 California St.',
      },
      {
        name: 'Valencia Whole Foods',
        address: '999 Valencia St.',
      },
      {
        name: "RJ's Market",
        address: '1425 Sansome St.',
      },
      {
        name: 'Casa Guadalupe',
        adress: '2909 Mission St.',
      },
      {
        name: 'Harvest Hills Market',
        address: '3216 Folsom St',
      },
      {
        name: 'Rincon Market',
        address: '98 Howard St.',
      },
    ],
  },
  {
    state: 'Oakland, CA',
    stores: [
      {
        name: 'Piedmont Grocery',
        address: '4038 Piedmont Ave',
      },
    ],
  },
  {
    state: 'Alameda, CA',
    stores: [
      {
        name: 'A-1 Market',
        address: '1420 Encinal',
      },
    ],
  },
  {
    state: 'Arcata,	CA',
    stores: [
      {
        name: "Murphy's Market",
        address: 'Sunnybrae 785 Bayside Rd.',
      },
      {
        name: 'Wildberries Marketplace',
        address: '747 13th Street',
      },
    ],
  },
  {
    state: 'Crescent City, CA',
    stores: [
      {
        name: 'Wild Rivers Market',
        address: '450 M St',
      },
    ],
  },
  {
    state: 'Davis, CA',
    stores: [
      {
        name: 'Davis Food Coop',
        address: '620 G St',
      },
    ],
  },
  {
    state: 'Eureka, CA',
    stores: [
      {
        name: 'Eureka Natural Foods',
        address: '1450 Broadway',
      },
    ],
  },
  {
    state: 'Lafayette, CA',
    stores: [
      {
        name: 'Diablo Foods Lafayette',
        address: '3615 Mt Diablo Blvd',
      },
    ],
  },
  {
    state: 'McKinleyville, CA',
    stores: [
      {
        name: 'Eureka Natural #2',
        address: '2165 Central Ave',
      },
    ],
  },
  {
    state: 'Palo Alto, CA',
    stores: [
      {
        name: "Sigona's Farmers Market",
        address: '2345 Middlefield Rd',
      },
      {
        name: "Piazza's Fine Foods Palo Alto",
        address: '3922 Middlefield Rd.',
      },
    ],
  },
  {
    state: 'Placerville, CA',
    stores: [
      {
        name: 'Placerville Food Coop',
        address: '535 Placerville Dr',
      },
    ],
  },
  {
    state: 'Redwood City, CA',
    stores: [
      {
        name: "Sigona's Farmers Market",
        address: '2345 Middlefield Rd',
      },
    ],
  },
  {
    state: 'Sebastopol, CA',
    stores: [
      {
        name: "Andy's Produce Market",
        address: '1691 Gravenstein Hwy N',
      },
    ],
  },
  {
    state: 'Tahoe, CA',
    stores: [
      {
        name: 'New Moon Natural Foods',
        address: '505 West Lake Blvd.',
      },
    ],
  },
  {
    state: 'Trinidad, CA',
    stores: [
      {
        name: "Murphy's Market Trinidad",
        address: '1 Main Street',
      },
    ],
  },
  {
    state: 'Ukiah, CA',
    stores: [
      {
        name: 'Ukiah Natural Foods Coop',
        address: '721 S State St',
      },
    ],
  },
  {
    state: 'Denver, CO',
    stores: [
      {
        name: 'Leevers Locavore',
        address: '2630 W 38th Ave',
      },
      {
        name: 'Truffle Cheese Shop',
        address: '2906 E 6th Ave',
      },
      {
        name: 'Nooch Vegan Market',
        address: '10 E Ellsworth Ave',
      },
      {
        name: "Spinelli's Market",
        address: '4621 E 23rd Ave',
      },
    ],
  },
  {
    state: 'Casper, WY',
    stores: [
      {
        name: 'Grant Street Market',
        address: '815 S Grant Ave',
      },
    ],
  },
]

const Resellers = () => {
  return (
    <Layout>
      <section className="resellers">
        <ul className="container">
          <ul className="row">
            <ul className="col-12">
              <div className="text-center padding-bottom-lg-50px hero">
                <img
                  alt="Rabbit jumping at the text Resellers"
                  src={heroImage}
                />
              </div>
              <ul className="text-center relative">
                {resellers.map((reseller, index) => (
                  <div
                    key={reseller.state}
                    className={`${
                      resellers.length - 1 === index
                        ? 'padding-bottom-none'
                        : 'padding-bottom-55px'
                    } relative z-index-2`}
                  >
                    <h2 className="text-40px">{reseller.state}</h2>
                    {reseller.stores.map(store => (
                      <address key={store.name} className="font-style-normal">
                        <p className="text-24px">
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
                    src={image.url}
                    className={`absolute z-index-1 image-${index}`}
                  />
                ))}
              </ul>
            </ul>
          </ul>
        </ul>
      </section>
    </Layout>
  )
}

export default Resellers
