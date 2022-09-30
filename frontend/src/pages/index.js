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
    // const { allStrapiSermon } = useStaticQuery(graphql`
    //     query {
    //         allStrapiSermon {
    //             nodes {
    //                 Link
    //                 Author
    //                 Title
    //             }
    //         }
    //     }
    // `);
    // console.log(allStrapiSermon);

    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <AboutArea />
            <SermonArea />
            <LatestBlog />
            <ContactArea />
        </Layout>
    );
};

export default IndexPage;
