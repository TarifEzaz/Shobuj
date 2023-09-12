import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import Pic from '../pictures/index'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function Test() {
return (
    <SimpleGrid columns={1} minChildWidth='380px' spacingX='10px' spacingY='10px' justifyContent='center' m='90px'>
      {Pic.map((Pic, index) => (
       
       <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Card maxW='sm' marginInline='auto'>
            <CardBody>
                <Image
                aspectRatio='4/3'
                objectFit= 'inherit'
                src={Pic.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{Pic.title}</Heading>
                <LinkOverlay href='https://chakra-ui.com'>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                </LinkOverlay>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                    Read More
                </Button>
                <Button variant='ghost' colorScheme='green'>
                    Add to favourite
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </LinkBox>
           
        
      ))}
    </SimpleGrid>
  )
}



