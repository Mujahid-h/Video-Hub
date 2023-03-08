import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
// import { transform } from 'framer-motion'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    size:'4xl',
    transform:'translate(-50%, -50%)',
    textTransform:'uppercase',
    p:'4'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container
            maxW={'container.xl'}
            minH='100vh'
            p={'16'}
            >
                <Heading
                textTransform={'uppercase'}
                py='2'
                w={'fit-content'}
                borderBottom='2px solid'
                m={'auto'}
                >
                    Services
                </Heading>

                <Stack
                h={'full'}
                p='4'
                alignItems={'center'}
                direction={['column', 'row']}
                >
                    <Image src={img5} h={[40, 400]} filter={'hue-rotate(-130deg)'} />
                    <Text
                    letterSpacing={'widest'}
                    lineHeight={'190%'}
                    p={[2, 16]}
                    textAlign='center'
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse dolorem quidem quae quisquam. Voluptas quasi temporibus laboriosam. Maxime, tempora laudantium? Tenetur asperiores repellat, corporis neque libero illo, odit magni quasi hic vel sequi aliquam inventore architecto iste velit! Perferendis iure adipisci nulla velit saepe id excepturi aliquid veritatis, sed suscipit sit consectetur eveniet optio delectus laudantium repellendus accusamus repellat. Nisi, modi. Laborum ullam voluptates error cum veniam est dignissimos perferendis, optio, voluptas eligendi, eaque repudiandae. Excepturi impedit ea natus ducimus repellendus nesciunt ab minus quos corporis voluptatem, voluptate, corrupti a quaerat odio maiores qui accusamus veritatis? Cupiditate, voluptate nostrum?</Text>

                </Stack>



            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        infiniteLoop
        autoPlay
        interval={1000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color='white' {...headingOptions}>
                Watch your Future...
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color='black' {...headingOptions}>
                Future is Gaming...
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color='black' {...headingOptions}>
                Gaming on Console...
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color='black' {...headingOptions}>
                Fire in the Hole...
            </Heading>
        </Box>


    </Carousel>
)







export default Home;