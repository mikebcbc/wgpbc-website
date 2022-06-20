import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import GiveArea from "../components/GiveArea";
import MakeWorldArea from "../components/MakeWorldArea";
import ClientsLogo from "../components/ClientsLogo";
import DonateArea from "../components/DonateArea";
import MixerAreaThree from "../components/MixerAreaThree";
import CausesArea from "../components/CausesArea";
import CategoryArea from "../components/CategoryArea";
import GalleryCarousel from "../components/GalleryCarousel";
import EventsHome from "../components/EventsHome";
import VolunteerArea from "../components/VolunteerArea";
import CallToActionThree from "../components/CallToActionThree";

const HomePage = () => {
  return (
    <Layout pageTitle="WGPBC | Home">
      <Nav isHome={true} />
      <SliderTwo />
      <GiveArea />
      <MakeWorldArea />
      <ClientsLogo />
      <DonateArea />
      <MixerAreaThree />
      <CausesArea />
      <CategoryArea />
      <GalleryCarousel />
      <EventsHome />
      <VolunteerArea />
      <CallToActionThree />
      <Footer />
    </Layout>
  );
};

export default HomePage;
