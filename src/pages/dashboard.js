import Head from "next/head"
import React, { useState } from "react"
import Layout from "../components/layout"
import Steps from "../components/steps"
import { client } from "../utils/client"

const ProductPage = ({ products, regions }) => {
  const [region, setRegion] = useState(regions?.[0] || null)
  const [country, setCountry] = useState(region?.countries?.[0].iso_2 || "")

  const handleRegionChange = (regId, countryCode) => {
    const selected = regions.find(r => r.id === regId)
    setCountry(countryCode)
    setRegion(selected)
  }

  return (
    <>
      <Layout
        regions={regions}
        country={country}
        handleRegionChange={handleRegionChange}
      >
        <Head>
          <title>Medusa Test Project</title>
          <meta name="description" content={"Medusa test project"} />
        </Head>
        <Steps
          products={products}
          regions={regions}
          region={region}
          country={country}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { products } = await client.products.list()
  const { regions } = await client.regions.list()
  // Pass post data to the page via props
  return { props: { products, regions } }
}

export default ProductPage
