import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import SponsorsArea from "../containers/home/sponsors";
import ContactArea from "../containers/home/contact";
import FunfactArea from "../containers/home/funfact";
import AboutPageArea from "../containers/about-us/about";
import VolunteerArea from "../containers/about-us/volunteer";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About us" pathname="/" />
            <AboutPageArea />
            {/* <VolunteerArea /> */}
            {/* <FunfactArea /> */}
            <ContactArea />
            {/* <SponsorsArea /> */}
        </Layout>
    );
};

AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;
