import React from "react";
import Navbar from '@/components/Navbar'
import { Container, Box, Input, Text, Grid, Badge, Stack, Image } from "@chakra-ui/react";
import ItemDiamonds from '@/components/ItemDiamonds'
import ItemPayment from '@/components/ItemPayment'

const Product: React.FC = () => {
  return (
    <Stack bg='gray.100'>
      <Navbar />
      <Box>
        <Container as='aside' bg='white' p='15px'>
          <Image src='./images/banner.png' rounded='xl' />
          <Box display='flex' mt='20px'>
            <Image src={'./images/free-fire.jpg'} display='block' borderRadius='xl' h='5rem' alt='haha' />
            <Box ml='10px'>
              <Badge colorScheme="green" borderRadius="full" px="4" w="60%">TOP UP</Badge>
              <Text fontWeight='bold'>Mobile Legends</Text>
              <Text color='blue' fontWeight='bold' fontSize='sm'>Lihat cara transaksi</Text>
            </Box>
          </Box>
        </Container>
        <Box className={'InputID'}
          maxW="lg"
          mx="auto"
          p={6}
          bgColor='white'
        >
          <Text mb={4}>
            <Badge>1 </Badge> Masukkan Detail Akun</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {/* Input ID */}
            <Box>
              <Input
                placeholder="Masukkan User ID"
                borderRadius="md"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "teal.300" }}
                _focus={{ borderColor: "teal.500" }}
                _placeholder={{ color: "gray.500" }}
              />
            </Box>

            {/* Input Zone */}
            <Box>
              <Input
                placeholder="Zone ID"
                borderRadius="md"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "green.300" }}
                _focus={{ borderColor: "green.500" }}
                _placeholder={{ color: "gray.500" }}
              />
            </Box>
          </Grid>

          {/* Note */}
          <Text mt={4} fontSize="2xs" color="gray.500">
            Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).
          </Text>
        </Box>
        <Box className={'nominal'}
          maxW="lg"
          mx="auto"
          mt={4}
          p={6}
          bgColor='white'
        >
          <Text mb={4}>
            <Badge>2 </Badge> Pilih Nominal</Text>
          <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={4}>
            <ItemDiamonds />
            <ItemDiamonds />
            <ItemDiamonds />
          </Grid>
        </Box>
        <Box className={'payment'}
          maxW="lg"
          mx="auto"
          mt={4}
          p={6}
          bgColor='white'
        >
          <Text mb={4}>
            <Badge>3 </Badge> Pilih Pembayaran</Text>
          <Grid templateColumns="repeat(1, minmax(0, 1fr))" gap={4}>
            <ItemPayment name='QRIS' image='qris' />
            <ItemPayment name='Gopay' image='gopay' />
            <ItemPayment name='Ovo' image='ovo' />
            <ItemPayment name='Shopeepay' image='shopeepay' />
          </Grid>
        </Box>
        <Box
          maxW="lg"
          mx="auto"
          mt={4}
          p={6}
          bgColor='white'
        >
          <Text fontSize="sm">Dengan klik tombol Beli sekarang, kamu sudah menyetujui Syarat & Ketentuan yang berlaku.</Text>
        </Box>
      </Box>
    </Stack>
  )
};

export default Product;
