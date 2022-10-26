import { Flex, Image, Text } from "@theme-ui/components"
import React from "react"
import Info from "./info"
import OptionSelector from "./option-selector"

const ProductDisplay = ({ region, product }) => {
  return product ? (
    <Flex
      sx={{ flexDirection: "row", justifyContent: "flex-start", width: "100%" }}
    >
      <Image
        sx={{
          width: "96px",
          height: "96px",
          borderRadius: "4px",
          objectFit: "contain",
          objectPosition: "center center",
        }}
        src={product.thumbnail}
        alt={product.title}
      />
      <Info product={product} region={region} />
      <Text
        sx={{
          mt: "16px",
          lineHeight: "24px",
          fontSize: "14px",
          fontWeight: 300,
          color: "#6B7280",
        }}
        variant="fz_s"
      >
        {product.description}
      </Text>
      <OptionSelector product={product} />
    </Flex>
  ) : null
}

export default ProductDisplay
