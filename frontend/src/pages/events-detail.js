import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

const EventsDetailPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Events Detail">
      <Nav />
      <PageHeader title="Events Detail" />
      <EventsDetail />
      <Footer />
    </Layout>
  );
};

export default EventsDetailPage;
