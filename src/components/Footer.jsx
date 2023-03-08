import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            minH='40'
            p={[2, 16]}
            color='white'>

            <Stack
                direction={['column', 'row']}
            >
                <VStack alignItems={'stretch'} w='full' px={'4'}>
                    <Heading size={'md'} textTransform='uppercase'textAlign={['center', 'left']}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                        py='2'
                    >
                        <Input
                            placeholder='Enter you Email here....'
                            border={'none'} borderRadius='none' outline={'none'} focusBorderColor='none'
                        />

                        <Button
                            p={'0'}
                            colorScheme='purple'
                            variant={'ghost'}
                            borderRadius='0 20px 20px 0'
                        >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>

                <VStack
                    w={'full'}
                    borderRight={['none', '1px solid white']}
                    borderLeft={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign='center'>
                        video hub
                    </Heading>
                    <Text>All Rights reserved</Text>

                </VStack>
                
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform='uppercase'>
                        social media
                    </Heading>
                    <Button variant={'link'} colorScheme='purple'>
                        <a href="https://www.instagram.com/h_mujahid123">Instagram</a>
                    </Button>
                </VStack>

            </Stack>


        </Box>
    )
}

export default Footer