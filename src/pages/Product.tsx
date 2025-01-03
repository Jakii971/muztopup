import React, { useState } from "react";
import Navbar from '@/components/Navbar'
import { Container, Box, Input, Text, Grid, Badge, Stack, HStack, Image } from "@chakra-ui/react";
import ItemDiamonds from '@/components/ItemDiamonds'
import ItemPayment from '@/components/ItemPayment'
import { useFetchGameDiamonds } from '@/features/useFetchGameDiamonds'
import { useParams } from 'react-router'
import {
  Banner,
  MobileLegends,
  Gopay,
  SPay,
  Ovo,
  Qris
} from '@/images'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"
interface GameService {
  game?: string;
  name?: string;
  price?: {
    basic?: number;
    premium?: number;
    special?: number;
  };
}

const pageSize = 6;

const Product: React.FC = () => {
  const [page, setPage] = useState(1)
  const { filterValue } = useParams<{ filterValue: string }>();
  const { data, isLoading, isError, error } = useFetchGameDiamonds(page, pageSize, filterValue || '');

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize
  const visibleItems: GameService[] = data?.data.slice(startRange, endRange) ?? [];


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || "Terjadi kesalahan saat memuat data."}</p>;
  }

  if (data) {
    return (
      <Stack bg='gray.100' position="relative">
        <Navbar />
        <Box mb='120px'>
          <Container as='aside' bg='white' p='15px'>
            <Image src={Banner} rounded='xl' />
            <Box display='flex' mt='20px'>
              <Image src={MobileLegends} display='block' borderRadius='xl' h='5rem' alt='free-fire' />
              <Box ml='10px'>
                <Badge variant="solid" colorPalette="green" borderRadius="xl">TOP UP</Badge>
                <Text fontWeight='bold'>{filterValue}</Text>
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
              <Badge colorPalette="purple" variant="surface">1 </Badge> Masukkan Detail Akun</Text>
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
              <Badge colorPalette="purple" variant="surface">2 </Badge> Pilih Nominal
            </Text>

            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {visibleItems.map((item: GameService, index: number) => (
                <ItemDiamonds key={index} name={item.name} price={item.price} />
              ))}
            </Grid>
            <PaginationRoot
              page={page}
              pageSize={pageSize}
              count={data.data.length ?? 10}
              siblingCount={1}
              defaultPage={1}
              onPageChange={(e) => setPage(e.page)}
              variant="solid"
              size={'xs'}
            >
              <HStack justifyContent="center" px={4} mt={8}>
                <PaginationPrevTrigger
                  _hover={{
                    bg: "green.100",
                    color: "green.600",
                  }}
                  p={2}
                  borderRadius="full"
                />
                <PaginationItems />
                <PaginationNextTrigger
                  _hover={{
                    bg: "green.100",
                    color: "green.600",
                  }}
                  p={2}
                  borderRadius="full"
                />
              </HStack>
            </PaginationRoot>
          </Box>
          <Box className={'payment'}
            maxW="lg"
            mx="auto"
            mt={4}
            p={6}
            bgColor='white'
          >
            <Text mb={4}>
              <Badge colorPalette="purple" variant="surface">3 </Badge> Pilih Pembayaran</Text>
            <Grid templateColumns="repeat(1, minmax(0, 1fr))" gap={4}>
              <ItemPayment name='QRIS' image={Qris} />
              <ItemPayment name='Gopay' image={Gopay} />
              <ItemPayment name='Ovo' image={Ovo} />
              <ItemPayment name='Shopeepay' image={SPay} />
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
        <Box position="fixed" bottom="0" w='full' h={'120px'} bg={'white'} display='flex' justifyContent={'space-between'} alignItems={'center'}>
          <Box display='flex' flexDirection={'column'} ml={'20px'}>
            <Text fontWeight={'bold'} fontSize={'xl'} color='red'>Rp5.799</Text>
            <Text>19 Diamond</Text>
          </Box>
          <Box bg='blue.600' color='white' mr={'20px'} p='15px' rounded={'full'}>
            <Text fontWeight={'bold'}>Beli Sekarang</Text>
          </Box>
        </Box>
      </Stack>
    )
  }

  return null;
};

export default Product;
