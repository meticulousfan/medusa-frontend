import { Flex } from "@theme-ui/components"
import React, { useEffect, useState } from "react"
import Payment from "./payment"
import Product from "./product"

const Steps = ({ products, regions, country, region }) => {
  const [activeStep, setActiveStep] = useState("product")

  // When region change, we reset the checkout flow
  useEffect(() => {
    setActiveStep("product")
  }, [region])

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Product
        region={region}
        regions={regions}
        products={products}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
      />
      <Payment region={region} country={country} activeStep={activeStep} />
    </Flex>
  )
}

export default Steps
