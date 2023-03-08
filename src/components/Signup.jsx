import { Button, Container, Input, VStack, Heading, Text, Avatar, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'full'} p={'16'}>

            <form>

                <VStack
                    alignItems={'stretch'}
                    spacing={'8'}
                    w={['full', '96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading textTransform='uppercase' textAlign={'center'}> video hub </Heading>
                    <Avatar alignSelf={"center"} boxSize={'24'}></Avatar>

                    <HStack w={'full'} >
                        <Input
                            required
                            type={'text'}
                            placeholder={'First Name'}
                            focusBorderColor={'purple.500'}
                        />

                        <Input
                            required
                            type={'text'}
                            placeholder={'Last Name'}
                            focusBorderColor={'purple.500'}
                        />
                    </HStack>

                    <Input
                        required
                        type={'number'}
                        placeholder={'Mobile'}
                        focusBorderColor={'purple.500'}
                    />

                    <Input
                        required
                        type={'email'}
                        placeholder={'Enter your Email'}
                        focusBorderColor={'purple.500'}
                    />

                    <Input
                        required
                        type={'password'}
                        placeholder={'password'}
                        focusBorderColor={'purple.500'}
                    />                  

                    <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

                    <Text textAlign={'right'}>
                        Already Signup? {'  '}
                        <Button variant={'link'} colorScheme={'purple'} >
                            <Link to='/login'>Log In</Link>
                        </Button>
                    </Text>

                </VStack>

            </form>

        </Container>
    )
}



export default Signup