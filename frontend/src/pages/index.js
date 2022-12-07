import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import AboutArea from "@containers/home/about";
import SermonArea from "@containers/home/sermons";
import ContactArea from "../containers/home/contact";
import LatestBlog from "../containers/home/blog";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <AboutArea />
            <SermonArea />
            <LatestBlog />
            <ContactArea />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <SEO title="Winter Garden Primitive Baptist Church - Home" pathname="/" />
);
