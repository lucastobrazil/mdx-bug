import React from "react"
import { Box, Text } from "lucas-test-design-system"

export default ({ category, title, subTitle, ...restProps }) => (
  <Box bg="extended.neutrals.N020" py={8} {...restProps}>
    <Text variant="h5" fontWeight="bold" mb={2}>{category}</Text>
    <Text variant="h1" fontWeight="bold" color="primary" mb={1}>{title}</Text>
    <Text variant="h5">{subTitle}</Text>
  </Box>
)
