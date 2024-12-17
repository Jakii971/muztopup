// import { useState } from "react";
import { Box, Flex, Text, Image } from '@chakra-ui/react'

interface GamesProps {
  name?: string
  image?: string
}

export default function ItemPayment({ name, image }: GamesProps) {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <Box
      as="button"
      p='10px'
      borderWidth="2px"
      rounded='xl'
      h='50px'
      cursor="pointer"
      _hover={{
        bg: "green.100",
        borderColor: "green.300",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      _focus={{
        bg: "green.200",
        outline: "none",
        borderColor: "green.500",
        borderWidth: 3
      }}
    >
      <Flex gap='15px' alignItems="center" ml='10px'>
        <Image src={`./images/${image}.png`} object-fit='cover' maxW="5rem" maxH={'1.5rem'} alt={name} />
        <Text>{name ? name : "Undifine"}</Text>
      </Flex>
    </Box>


  )
}
