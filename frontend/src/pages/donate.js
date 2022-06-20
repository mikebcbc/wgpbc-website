import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Donate from "../components/Donate";

const DonatePage = () => {
  return (
    <Layout pageTitle="Oxpitan | Donate">
      <Nav />
      <PageHeader title="Donate" />
      <Donate />
      <Footer />
    </Layout>
  );
};

export default DonatePage;
