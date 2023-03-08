import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Uplaod = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p='16'>

            <VStack h={'full'} color='purple.500' justifyContent={'center'}>
                <AiOutlineCloudUpload size={'10vmax'} />

                <form>
                    <HStack>
                        <Input
                            type={'file'}
                            required
                            css={{
                                "&::file-selector-button": {
                                    border: 'none',
                                    width: 'calc(100% + 36px)',
                                    height: '100%',
                                    marginLeft: '-18px',
                                    backgroundColor: 'white',
                                    color: 'purple',
                                    cursor: 'pointer'
                                },
                            }}
                        />
                        <Button type='submit' colorScheme={'purple'}>
                            Upload
                        </Button>
                    </HStack>
                </form>
            </VStack>

        </Container>
    )
}

export default Uplaod