import { Box, Text, Image } from '@chakra-ui/react'

interface GamesProps {
  name?: string
}

export default function ItemGames({ name }: GamesProps) {
  return (
    <Box>
      <Box
        placeItems="center"
        bg='white'
        shadow={'0px 1px 5px rgba(31, 31, 31, 0.15)'}
        p={2}
        borderRadius={'md'}>
        <Image src="./images/free-fire.jpg" display={'block'} borderRadius={'md'} alt="free-fire" />
        <Text>{name ? name : "Free Fire"}</Text>
      </Box>
    </Box>
  )
}
