import { Card, Flex } from "@theme-ui/components"
import { useCart } from "medusa-react"
import Image from "next/image"
import React, { useState } from "react"
import ProductSelection from "../product-selection"
import Spinner from "../spinner/spinner"

const Product = ({
  products,
  regions,
  country,
  region,
  activeStep,
  setActiveStep,
}) => {
  const [loading, setLoading] = useState(false)
  const { cart } = useCart()

  let triggerStyles = {}

  if (cart?.id) {
    triggerStyles.color = "darkgrey"
    triggerStyles.cursor = "pointer"
  }

  return (
    <Flex
      variant="layout.stepContainer"
      sx={{ position: "relative", width: "100vw" }}
    >
      {loading && (
        <Flex
          sx={{
            position: "absolute",
            bg: "#ffffff",
            opacity: 0.8,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </Flex>
      )}
      {activeStep === "product" ? (
        <Card variant="container">
          <ProductSelection
            region={region}
            regions={regions}
            country={country}
            products={products}
            nextStep={() => setActiveStep("payment")}
            setLoading={setLoading}
          />
        </Card>
      ) : (
        <Card
          variant="container"
          onClick={() => setActiveStep("payment")}
          sx={triggerStyles}
        >
          Product
          {cart?.id && (
            <Image src={"/check.png"} height={"11px"} width={"16px"} />
          )}
        </Card>
      )}
    </Flex>
  )
}

export default Product
