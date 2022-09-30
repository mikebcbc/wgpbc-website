import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import SponsorsArea from "../containers/home/sponsors";
import ContactArea from "../containers/home/contact";
import FunfactArea from "../containers/home/funfact";
import PageBreadcrumb from "../components/pagebreadcrumb";
import CausesAll from "../containers/causes/causes";

const CausesPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Causes" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Causes"
            />
            <CausesAll />
            <FunfactArea />
            <ContactArea />
            <SponsorsArea />
        </Layout>
    );
};

CausesPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default CausesPages;
