/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sidebar";
import CausesDonateForm from "@components/causes-donate-form";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    BlogDetailsArea,
    CausesDetailsContent,
    CausesDetails,
    Thumb,
    CauseTitle,
    ShortTitle,
    DocumentItem,
    DocumentItemTitle,
    SingleDetailsText,
    SermonHeader,
    SermonTitle,
} from "./style";

const SermonPost = ({ data, location, pageContext }) => {
    const sermonPostData = data.sermonsJson;

    const image = getImage(sermonPostData.image.childImageSharp);

    return (
        <Layout>
            <SEO title={"Causes Posts"} pathname="/" />
            <SermonHeader>
                <Container>
                    <Row>
                        <Col>
                            <SermonTitle>{sermonPostData.title}</SermonTitle>
                        </Col>
                    </Row>
                </Container>
            </SermonHeader>
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <CausesDetailsContent>
                                <CausesDetails>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt={sermonPostData.title}
                                        />
                                    </Thumb>
                                    <CauseTitle>
                                        {sermonPostData.title}
                                    </CauseTitle>
                                    <SingleDetailsText>
                                        {sermonPostData.dec}
                                    </SingleDetailsText>
                                </CausesDetails>
                            </CausesDetailsContent>
                            <BlogSidebar />
                        </Col>
                        {/* <Col lg={4}>
                            <BlogSidebar />
                        </Col> */}
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SermonPost.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const sermonPostQuery = graphql`
    query SermonPostBySlug($slug: String!) {
        sermonsJson(fields: { slug: { eq: $slug } }) {
            id
            title
            dec
            preacherName
            image {
                childImageSharp {
                    gatsbyImageData(width: 780)
                }
            }
            preacherImage {
                childImageSharp {
                    gatsbyImageData
                }
            }
            fields {
                slug
            }
        }
    }
`;

export default SermonPost;
