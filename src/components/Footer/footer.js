
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup, Box, Link} from '@chakra-ui/react'
import { HStack,VStack,Flex } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { Divider } from '@chakra-ui/react'
import { FaFacebookF, FaFacebook, FaInstagramSquare,FaGoogle, FaSpotify, FaShopify,FaTwitter } from 'react-icons/fa'
import SocialMedia from './socialMedia'

export default function Footer() {
  return (
    <div maxHeight='40vh'>  
  <Box p={4} display={{ md: "flex" }} flexDirection="column" marginInline='auto' padding='120px' bgGradient='linear(to-r, #0B6623, 	#3BB143, #E5D9B6 )'>
    <Box flexShrink={0} marginInline='auto' mb={10}>
    <SocialMedia/>
      <Divider/>
    </Box>
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 9 }}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="wide"
        color="#FFFF"
      
      >
        What is Shobuj?
      </Text>
      <Text  textWrap= 'wrap' color="#FFFF" >
        Shobuj is a blog inspires people to grow plants. This blogs make us learn
        how to keep plants alive and gives necessary tips how to take care of the 
        plants. It also give you an understanding of usefulness of plants.  
      </Text>
    </Box>
  </Box>

    </div>
  );
}








 