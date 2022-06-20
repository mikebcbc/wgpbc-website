import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Map from "../components/Map";

const ContactPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Contact">
      <Nav />
      <PageHeader title="Contact" />
      <Contact />
      <Map />
      <Footer />
    </Layout>
  );
};

export default ContactPage;
