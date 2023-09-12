import React from 'react' 
import { Image } from '@chakra-ui/react'
import { Box, Text,Heading} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function WelcomeNote() {
    return (
        <div>
            <Box
            
            objectFit='contain'
            sx={{
                backgroundImage:"url(https://i.ibb.co/pd5ZmQH/Shobuj1.jpg)",
                backgroundRepeat: 'no-repeat',
			    backgroundSize: 'cover',
                minHeight:"80vh",
               
            }}
            
            >
                <Box>
                <Button 
                    colorScheme='whiteAlpha'
                     mt={40} 
                     pt={20}
                     pb={20}
                     pl={5}
                     pr={5}
                
                > 
                <Text
                    sx={{
                
                        bgGradient:'linear(to-r,#FFFF,#4CBB17,#4CBB17)',
                        bgClip:'text',
                        
                        fontSize: '4.5rem',
                        fontSize: "clamp(2.5rem, 4vw, 6rem)",
                        position: 'relative',
                        zIndex:"1",
                        
                        
                    }}
                >  Let's Go Green</Text>
                    
                    
                </Button> 
                {/*<Heading pt={20} mt={4}  bg={'red'}
                sx={{
                
                    bgGradient:'linear(to-r,#FFFF, #D0F0C0, #9DC183, #3BB143,#0B6623)',
                    bgClip:'text',
                    
                    fontSize: '4.5rem',
                    fontSize: "clamp(2.5rem, 4vw, 6rem)",
                    position: 'relative',
                    zIndex:"1",
                    
                    
                }}
                >Let's Go Green!
                
            </Heading>*/}
                </Box>
            </Box>   
        </div>
    )
}

