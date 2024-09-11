import React, { useState, useEffect } from 'react';
import { Button, Container, Stack, useToast, Textarea, Input, Select } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';
import ErrIndicator from './ErrIndicator';

function Loading() {
    return <LoadingIndicator/>;
}

function Err() {
    return <ErrIndicator/>;
}

export default function TicketEdit() {
    const toast = useToast();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState(null);
    const [err, setErr] = useState(false);
    const { id } = useParams();

    const fetchAndUpdateData = async (id) => {
        setLoading(true);
        try {
            const res = await axios.get(`https://drive.google.com/file/d/17AghZbycKH0AFU2ZPYBafa_JKJg6eDvy/view?usp=sharing/tickets/${id}`);
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

    const handleEdit = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/tickets/${id}`, ticket);
            toast({
                title: 'Ticket Status',
                description: "Ticket Update Successful",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate("/ticket");
        } catch (error) {
            console.log(error);
            toast({
                title: 'Ticket Status',
                description: "Ticket Update Failed",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    if (loading) return <Loading />;
    if (err) return <Err/>;
    if (!ticket) return null;

    const { Title, Description, Assignee, Status, Priority } = ticket;

    return (
        <Container>
            <Stack spacing={4} marginY={4}>
                <Input
                    placeholder='Enter Title'
                    size='lg'
                    value={Title}
                    onChange={(e) => setTicket({ ...ticket, Title: e.target.value })}
                />
                <Textarea
                    placeholder='Enter Description'
                    value={Description}
                    onChange={(e) => setTicket({ ...ticket, Description: e.target.value })}
                />
                <Select
                    placeholder='Assignee'
                    value={Assignee}
                    onChange={(e) => setTicket({ ...ticket, Assignee: e.target.value })}
                >
                    <option value='Luffy'>Luffy</option>
                    <option value='Kailash'>Kailash</option>
                    <option value='Rajesh'>Rajesh</option>
                </Select>
                <Select
                    placeholder='Status'
                    value={Status}
                    onChange={(e) => setTicket({ ...ticket, Status: e.target.value })}
                >
                    <option value='Pending'>Pending</option>
                    <option value='Progress'>Progress</option>
                    <option value='Completed'>Completed</option>
                </Select>
                <Select
                    placeholder='Priority'
                    value={Priority}
                    onChange={(e) => setTicket({ ...ticket, Priority: e.target.value })}
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </Select>
                <Button
                    variant="outline"
                    colorScheme="red"
                    padding={4}
                    marginY={4}
                    onClick={handleEdit}
                >
                    Submit
                </Button>
            </Stack>
        </Container>
    );
}
