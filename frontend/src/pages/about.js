import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import TeamArea from "../components/TeamArea";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Layout pageTitle="Oxpitan | About">
      <Nav />
      <PageHeader title="About" />
      <AboutArea />
      <MixerAreaTwo />
      <TeamArea />
      <FaqArea />
      <ServiceArea />
      <ClientsLogoTwo />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
