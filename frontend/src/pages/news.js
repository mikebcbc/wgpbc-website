import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
  return (
    <Layout pageTitle="Oxpitan | News">
      <Nav />
      <PageHeader title="News" />
      <News />
      <Footer />
    </Layout>
  );
};

export default NewsPage;
