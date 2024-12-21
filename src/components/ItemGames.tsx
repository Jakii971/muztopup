import { Box, Text, Image } from '@chakra-ui/react'

interface GamesProps {
  name: string;
  image: string;
  handleClick: (filterValue: string) => void;
}

export default function ItemGames({ name, image, handleClick }: GamesProps) {

  return (
    <Box  onClick={() => handleClick?.(name)} cursor='pointer'>
      <Box
        placeItems="center"
        bg='white'
        shadow={'0px 1px 5px rgba(31, 31, 31, 0.15)'}
        p={2}
        borderRadius={'md'}
        overflow="hidden">
        <Image
          src={image}
          display={'block'}
          borderRadius={'md'}
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={image} />
        <Text fontSize={'sm'} textAlign={'center'}>{name ? name : "Free Fire"}</Text>
      </Box>
    </Box>
  )
}
