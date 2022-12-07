import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import ContactArea from "../containers/home/contact";
import AboutPageArea from "../containers/about-us/about";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About us" pathname="/" />
            <AboutPageArea />
            <ContactArea />
        </Layout>
    );
};

AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;

export const Head = () => <SEO title="Who We Are" pathname="/about-us" />;
