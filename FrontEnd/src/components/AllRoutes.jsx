import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Ticket from "../pages/Ticket";
import TicketCreate from "../pages/TicketCreate";
import TicketView from "../pages/TicketView";
import TicketEdit from "../pages/TicketEdit";
import UserDetails from "../pages/UserDetails";
import { AuthContext } from "../Context/AuthContextProvider";

function PageWrapper({ children }) {
  const { authDetails } = useContext(AuthContext);
  if (!authDetails?.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="/users" element={<PageWrapper><Users /></PageWrapper>} />
      <Route path="/ticket" element={<PageWrapper><Ticket /></PageWrapper>} />
      <Route path="/ticket/create" element={<PageWrapper><TicketCreate /></PageWrapper>} />
      <Route path="/ticket/view/:id" element={<PageWrapper><TicketView /></PageWrapper>} />
      <Route path="/ticket/edit/:id" element={<PageWrapper><TicketEdit /></PageWrapper>} />
      <Route path="/users/:user_id" element={<PageWrapper><UserDetails /></PageWrapper>} />
    </Routes>
  );
}
