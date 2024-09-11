import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Heading, Container, VStack, Button, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useContext(AuthContext); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toast = useToast();

  async function handleclick() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        }
      });
      Login(resp?.data?.token);
      setIsLoggedIn(true);
      toast({
        title: 'Login Status',
        description: "User Login Successful",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Login Status',
        description: "Login Failed",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxW={"600px"}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="outline" colorScheme="red" onClick={handleclick}>
          LOGIN
        </Button>
      </VStack>
    </Container>
  );
}
