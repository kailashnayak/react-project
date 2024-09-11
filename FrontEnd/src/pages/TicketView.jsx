import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Box, Heading, Stack, Card, CardHeader, CardBody, StackDivider, Text, CardFooter,Container, useToast } from "@chakra-ui/react";
import axios from 'axios';

function LoadingIndicator() {
    return <Text>Loading...</Text>;
}

function ErrIndicator() {
    return <Text>Error loading ticket data.</Text>;
}

export default function TicketView() {
  const toast=useToast()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState(null);
    const [err, setErr] = useState(false);
    const { id } = useParams();

    const fetchAndUpdateData = async (id) => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/tickets/${id}`);
            setTicket(res.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErr(true);
        }
    };

    useEffect(() => {
        fetchAndUpdateData(id);
    }, [id]);

    if (loading) return <LoadingIndicator />;
    if (err) return <ErrIndicator />;
    if (!ticket) return null; 

    const { Title, Description, Assignee, Status, Priority } = ticket;

    return (
      <Container marginY={4}>
      <Card maxH="auto" overflowY="auto">
          <CardHeader>
              <Heading size='md'>Ticket</Heading>
          </CardHeader>
          <CardBody>
              <Stack divider={<StackDivider />} spacing='2'>
                  <Box>
                      <Heading size='xs' textTransform='uppercase'>
                          Title
                      </Heading>
                      <Text pt='1' fontSize='sm'>
                          {Title}
                      </Text>
                  </Box>
                  <Box>
                      <Heading size='xs' textTransform='uppercase'>
                          Description
                      </Heading>
                      <Text pt='1' fontSize='sm'>
                          {Description}
                      </Text>
                  </Box>
                  <Box>
                      <Heading size='xs' textTransform='uppercase'>
                          Assignee
                      </Heading>
                      <Text pt='1' fontSize='sm'>
                          {Assignee}
                      </Text>
                  </Box>
                  <Box>
                      <Heading size='xs' textTransform='uppercase'>
                          Status
                      </Heading>
                      <Text pt='1' fontSize='sm'>
                          {Status}
                      </Text>
                  </Box>
                  <Box>
                      <Heading size='xs' textTransform='uppercase'>
                          Priority
                      </Heading>
                      <Text pt='1' fontSize='sm'>
                          {Priority}
                      </Text>
                  </Box>
              </Stack>
          </CardBody>
          <CardFooter>
              <Button
                  variant="outline"
                  colorScheme='red'
                  margin={`auto`}
                  onClick={() => navigate(`/ticket/edit/${id}`)}
              >
                  Edit
              </Button>
              <Button
                  variant="outline"
                  colorScheme='red'
                  margin={`auto`}
                  onClick={() => {
                      axios.delete(`http://localhost:3000/tickets/${id}`)
                          .then(() => {
                            toast({
                              title: 'Ticket Status',
                              description: "Ticket Deleted",
                              status: 'success',
                              duration: 3000,
                              isClosable: true,
                            });
                              navigate("/ticket");
                          })
                          .catch(err => {
                              console.error("Error deleting the ticket", err);
                          });
                  }}
              >
                  Delete
              </Button>
          </CardFooter>
      </Card>
  </Container>
    );
}
