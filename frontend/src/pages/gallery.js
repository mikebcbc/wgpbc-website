import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Gallery">
      <Nav />
      <PageHeader title="Gallery" />
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
