import { Box, Text,Heading} from '@chakra-ui/react'

export default function WT() {
    return (
<Box type='button' bgColor={'gray'} opacity={2}>
<Heading pt={60} mt={10} backgroundColor={'white'}
sx={{

    bgGradient:'linear(to-r,#D0F0C0, #9DC183, #3BB143,#0B6623)',
    bgClip:'text',
    
    fontSize: '4.5rem',
    fontSize: "clamp(2.5rem, 4vw, 6rem)",
    zIndex:'4'
}}
>Let's Go Green!</Heading>
</Box>
    )
}