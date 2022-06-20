import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";

const NewsSinglePage = () => {
  return (
    <Layout pageTitle="Oxpitan | Single News">
      <Nav />
      <PageHeader title="Single News" />
      <NewsSingle />
      <Footer />
    </Layout>
  );
};

export default NewsSinglePage;
