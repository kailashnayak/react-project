import React, { useState } from 'react';
import { Button, Container, Select, Input, Textarea, Stack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function TicketCreate() {
    const navigate = useNavigate();
    const toast = useToast();
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [assignee, setAssignee] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    async function handleClick() {
        const ticket = {
            Title: title,
            Description: description,
            Assignee: assignee,
            Status: status,
            Priority: priority
        };

        try {
            let res = await axios({
                method: "post",
                url: `https://drive.google.com/file/d/17AghZbycKH0AFU2ZPYBafa_JKJg6eDvy/view?usp=sharing/ticket`,
                data: ticket
            });
            toast({
                title: 'Ticket Status',
                description: "Ticket Creation Successful",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate("/ticket");
        } catch (error) {
            console.log(error);
            toast({
                title: 'Ticket Status',
                description: "Ticket Creation Failed",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }

    return (
        <Container>
            <Stack spacing={4}>
                <Input 
                    placeholder='Enter Title' 
                    size='lg' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <Textarea 
                    placeholder='Enter Description' 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <Select 
                    placeholder='Assignee' 
                    value={assignee} 
                    onChange={(e) => setAssignee(e.target.value)}
                >
                    <option value='Luffy'>Luffy</option>
                    <option value='Kailash'>Kailash</option>
                    <option value='Rajesh'>Rajesh</option>
                </Select>
                <Select 
                    placeholder='Status' 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value='Pending'>Pending</option>
                    <option value='Progress'>Progress</option>
                    <option value='Completed'>Completed</option>
                </Select>
                <Select 
                    placeholder='Priority' 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </Select>
                <Button
                    variant="outline"
                    colorScheme="red"
                    padding={4}
                    onClick={handleClick}
                >
                    Submit Ticket
                </Button>
            </Stack>
        </Container>
    );
}
