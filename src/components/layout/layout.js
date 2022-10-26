import { Flex, Link, Text } from "@theme-ui/components"
import Image from "next/image"
import React from "react"
import RegionSelector from "../region-selector/region-selector"

const Layout = ({ children, country, regions, handleRegionChange }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "#F3F4F6",
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          py: "2em",
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
