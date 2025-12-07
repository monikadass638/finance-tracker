import React from "react";
import Cardsummary from "../components/Cardsummary";
import Header from "../components/Header";
import Chartpie from "../components/Chartpie";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";
import AddTransctions from "../components/AddTransctions";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <Cardsummary />
      <Chartpie />
      <Transactions />
      <AddTransctions />
      <Footer />
    </div>
  );
}

export default Dashboard;
