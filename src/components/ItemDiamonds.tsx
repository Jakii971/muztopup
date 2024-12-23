import { Box, Text, Image } from '@chakra-ui/react'
import {Diamond} from '@/images'

interface DiamondProps {
  name?: string
}

export default function ItemDiamonds({ name }: DiamondProps) {
  return (
    <Box
      as="button"
      borderWidth="1px"
      borderColor='gray.200'
      rounded='xl'
      cursor="pointer"
      _hover={{
        bg: "purple.100",
        borderColor: "purple.300",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      _focus={{
        bg: "purple.200",
        outline: "none",
        borderColor: "purple.500",
        borderWidth: 3
      }}
    >
      <Box textAlign='start' p='10px'>
        <Image src={Diamond} w="6" alt="diamond" />
        <Text  fontSize='md'>{name ? name : "12"} Diamonds</Text>
        <Text  fontSize='xs'>{name ? name : "11 + 1"} Bonus</Text>
      </Box>
      <Box textAlign='start' p='10px' bg='purple.300' roundedBottom="xl">
        <Text fontSize='xs' fontWeight={'bold'} color='red'>Dari Rp{name ? name : "3.699"}</Text>
      </Box>
    </Box>


  )
}
