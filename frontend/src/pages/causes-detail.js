import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CausesDetail from "../components/CausesDetail";

const CausesPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Causes Detail">
      <Nav />
      <PageHeader title="Causes Detail" />
      <CausesDetail />
      <Footer />
    </Layout>
  );
};

export default CausesPage;
