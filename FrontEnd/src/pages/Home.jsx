import { Container, Box, Image, Heading, Flex,Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      
      <Container width="800px" height={400} maxWidth="100%" marginY={4}>
        <Box width="100%" height="100%">
          <Image 
            src='https://i.insider.com/6166da8c38c19600182f9641?width=1200&format=jpeg' 
            alt='Homepage/mainpic' 
            objectFit='cover' 
            width="100%" 
            height="100%" 
          />
        </Box>
        <Heading marginY={4}>How We Help</Heading>
        <Container width="1200px" height={200} maxWidth="100%">
        <Flex alignItems="center" justifyContent="space-between">
          <Box textAlign="center" width="30%">
            <Image 
              src='https://www.rollingstone.com/wp-content/uploads/2019/03/10148644aW.jpg?w=1581&h=1054&crop=1'
              objectFit='cover' 
              width="100%" 
              height="200px"
              marginY={4} 
            />
            <Text fontWeight={1000}>Find the perfect location</Text>
            <Text >Find the perfect location ind the perfect location ind the perfect location ind the perfect locationind the perfect location </Text>
          </Box>
          <Box textAlign="center" width="30%">
            <Image 
              src='https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/6/ab/6ab63b96-e11f-11ec-b17f-e7e7c4ccce10/629679701375a.image.jpg?resize=1200%2C675' 
              alt='Homepage/mainpic' 
              objectFit='cover' 
              width="100%" 
              height="200px"
              marginY={4}
            />
            <Text fontWeight={1000}>Get help with permits </Text>
            <Text >Get help with permits Get help with permits Get help with permits Get help with permits Get help with permits Get help with permits </Text>
          </Box>
          <Box textAlign="center" width="30%">
            <Image 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9tsbWTyVzozhV7IJpYr_q8bTrSytLlTixuUub_m-aBJNY_HpCsjvfDCHIpww2SMKwLM&usqp=CAU://i.insider.com/6166da8c38c19600182f9641?width=1200&format=jpeg' 
              alt='Homepage/mainpic' 
              objectFit='cover' 
              width="100%" 
              height="200px"
              marginY={4}
            />
             <Text fontWeight={1000}>Get a free consultation</Text>
             <Text >Get a free consultation Get a free consultation Get a free consultationGet a free consultationGet a free consultation  </Text>
          </Box>
        </Flex>
      </Container>
      </Container>
    </>
  );
}
