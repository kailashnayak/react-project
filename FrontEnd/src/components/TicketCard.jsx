import React from 'react';
import { Button, Box, Heading, Stack, Card, CardHeader, CardBody, StackDivider, Text, CardFooter,HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TicketCard({ id, Title, Status, Priority }) {
    const navigate = useNavigate();

    return (
        <Card maxW="400px"> 
            <CardHeader>
                <Heading size='md'>Ticket Card</Heading>
            </CardHeader>
            <CardBody >
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Title
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {Title}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Status
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {Status}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Priority
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {Priority}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant="outline" colorScheme='red' onClick={() => navigate(`/ticket/view/${id}`)}>
                    View Ticket
                </Button>
            </CardFooter>
        </Card>
    );
}
