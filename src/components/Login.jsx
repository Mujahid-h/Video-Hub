import { Button, Container, Input, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

            <form>

                <VStack
                    alignItems={'stretch'}
                    spacing={'8'}
                    w={['full', '96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading> Welcome Back </Heading>

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

                    <Button variant={'link'} colorScheme={'purple'} alignSelf={'flex-end'}>
                        <Link to='/forgotpassword'>Forgot password?</Link>
                    </Button>

                    <Button colorScheme={'purple'} type={'submit'}>Log In</Button>

                    <Text textAlign={'right'}>
                        New User? {'  '}
                        <Button variant={'link'} colorScheme={'purple'} >
                        <Link to='/signup'>Sign Up</Link>
                    </Button>                        
                    </Text>

                </VStack>

            </form>

        </Container>
    )
}

export default Login