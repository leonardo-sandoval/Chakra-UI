import { Box, Heading,Button,Flex,Stack } from '@chakra-ui/react'
import bgImage from './resourse/images/banner.jpg'
function App() {
  
  return (
    
      <Box  h="40vh"bg='gray'
      bgImage="url('https://wallpapercave.com/wp/wp2149622.jpg')"
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover' 
      >
<Flex
direction='column'
alignItems='center'
justify='center'
h='100%'
bg='rgb(0 0 0 / 60%)'
p={['0 10%', null , '0 20%']}
>

  <Heading color='white' 
  textTransform='uppercase'
  textAlign='center'
  fontWeight='light'
  letterSpacing='5px'
  
  >Domina el terreno
   </Heading>
   <Stack
   direction={{base:'column',md:'row'}}
   spacing='40px'
   mt={'30px'}
   w={['100%',null,'auto']}
   >
    <Button 
    variant={'outline'}
    size='lg'
    textTransform='uppercase'
    fontWeight='light'
    borderRadius='0'
    color={'white'}
    letterSpacing={'1px'}
    _hover={{color:'black',bg:'white'}}
    >Ver detalles</Button>
        <Button variant='outline'
    size='lg'
    textTransform='uppercase'
    fontWeight='light'
    borderRadius='0'
    color={'white'}
    letterSpacing={'1px'}
    _hover={{color:'black',bg:'white'}}
    >Ver Video</Button>
   </Stack>
</Flex>
      </Box>
      
    
  )
}

export default App
