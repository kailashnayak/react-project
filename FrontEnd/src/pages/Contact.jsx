import { Box, Container, Heading, Text, Image,Link} from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Container width="1000px" maxW="100%">
        <Box textAlign="center" mb={4}>
          <Heading marginTop={10}>Contact Us</Heading>
        </Box>
        <Box>
          <Text>
            We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
          </Text>

        </Box>
        <Box display="flex" justifyContent="center" mb={4}>
          <Image 
            src="https://masaischool.com/images/contact/mail.svg"
            alt="Homepage/mainpic"
            objectFit="cover"
          />
        </Box>
        <Box textAlign="center">
        <Text fontWeight={1000}>Write to us at</Text>
        <Link>admissions@masaischool.com</Link>
        </Box>
      </Container>
    </>
  );
}
