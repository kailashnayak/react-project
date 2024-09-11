import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/users",
    label: "USERS",
  },
  {
    to: "/ticket",
    label: "TICKET",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  
];

export default function Navbar() {
  const { authDetails, Logout } = useContext(AuthContext);

  return (
    <Flex className="navbar" align="center" justify="space-around" background="gray.200" padding={4} >
      {links
        .filter((link) => link.label !== "LOGIN" || !authDetails.isLoggedIn)
        .map((link) => (
          <ChakraLink as={ReactRouterLink} to={link.to} key={link.to} color="gray.900">
            {link.label}
          </ChakraLink>
        ))}
      {authDetails.isLoggedIn && (
        <Button onClick={Logout} colorScheme="teal" variant="solid">
          LOGOUT
        </Button>
      )}
    </Flex>
  );
}
