import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Events">
      <Nav />
      <PageHeader title="Events" />
      <Events />
      <Footer />
    </Layout>
  );
};

export default EventsPage;
