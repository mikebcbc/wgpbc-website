import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Causes from "../components/Causes";
import Footer from "../components/Footer";

const CausesPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Causes">
      <Nav />
      <PageHeader title="Causes" />
      <Causes />
      <Footer />
    </Layout>
  );
};

export default CausesPage;
