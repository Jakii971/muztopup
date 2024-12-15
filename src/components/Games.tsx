import {Container, Text, Image} from '@chakra-ui/react'

interface GamesProps{
  name?: string
}

export default function Games({name}:GamesProps) {
  return (
    <Container className='max-w-32 hover:cursor-pointer'>
      <Image src={'./images/free-fire.jpg'} className='rounded-lg' alt='free-fire'/>
      <Text className={'text-center'}>{name ? name : 'Free Fire'}</Text>
    </Container>
  )
}
