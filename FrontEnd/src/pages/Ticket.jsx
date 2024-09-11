import React, { useState, useEffect } from 'react';
import { Button, Container, Flex, SimpleGrid, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';
import ErrIndicator from './ErrIndicator';
import TicketCard from "../components/TicketCard";

export default function Tickets() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [err, setErr] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleClick = () => {
    navigate("/ticket/create");
  };

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let queryParams = {};
      if (filterValue) queryParams.Status = filterValue;
  
      if (sortValue) {
        if (sortValue === 'asc') {
          queryParams._sort = "Priority";
          queryParams._order = "asc";
        } else if (sortValue === 'desc') {
          queryParams._sort = "-Priority";
          queryParams._order = "desc";
        }
      }
      
      const res = await axios.get(`http://localhost:3000/tickets`, { params: queryParams });
      setTickets(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };
  
  useEffect(() => {
    fetchAndUpdateData();
  }, [sortValue, filterValue]);

  if (loading) return <LoadingIndicator />;
  if (err) return <ErrIndicator />;

  return (
    <Container>
      <Flex direction={'row-reverse'}>
        <Button
          variant="outline"
          colorScheme="red"
          padding={4}
          marginY={4}
          onClick={handleClick}
        >
          Ticket Create
        </Button>
      </Flex>
      <Flex marginY={4}  justifyContent="space-between">
        <Select placeholder='Sort By Priority' marginRight={4} value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
        </Select>
        <Select placeholder='Filter By Status' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value='Pending'>Pending</option>
          <option value='Progress'>Progress</option>
          <option value='Completed'>Completed</option>
        </Select>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      
      </SimpleGrid>
    </Container>
  );
}
