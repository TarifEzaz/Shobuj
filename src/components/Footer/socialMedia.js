import Icon from '@chakra-ui/icon'
import { HStack, VStack} from '@chakra-ui/layout'
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaGoogle, FaTwitter } from 'react-icons/fa'

export default function SocialMediaLinks(){
    return(
    <div>
    <HStack mb={5}>
        <Icon as={FaGoogle} boxSize="30" color='#FFFF'/>
        <Icon as={FaFacebook} boxSize="30" color='#FFFF'/>
        <Icon as={FaTwitter} boxSize="30" color='#FFFF'/>
        <Icon as={FaInstagramSquare} boxSize="30" color='#FFFF'/>
    </HStack>
    </div>
    )
}