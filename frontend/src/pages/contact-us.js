import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import ContactUsArea from "../containers/contact-us/contact-us-area";

const ContactPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Contact Pages" pathname="/" />
            <ContactUsArea />
        </Layout>
    );
};

ContactPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default ContactPages;

export const Head = () => <SEO title="Contact Us" pathname="/contact-us" />;
