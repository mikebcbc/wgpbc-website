import React from "react";
import PropTypes from "prop-types";
import SearchBox from "@components/blog/blog-sidebar/search";
import UrgentCauses from "@components/blog/blog-sidebar/causes";
import ContactForm from "../../../components/contact-form";
import Tags from "@components/blog/blog-sidebar/tags";
import { StaticImage } from "gatsby-plugin-image";
import { SidebarArea, Widget, WidgetTitle, SeparatorLine } from "./style";

const BlogSidebar = ({ tags }) => {
    return (
        <SidebarArea>
            <Widget>
                <WidgetTitle>Blog Categories</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Image-Givest"
                    />
                </SeparatorLine>
                <Tags tags={tags} />
            </Widget>
            <Widget>
                <WidgetTitle>Subscribe</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Image-Givest"
                    />
                </SeparatorLine>
                <ContactForm sidebar={true} />
            </Widget>
        </SidebarArea>
    );
};

BlogSidebar.propTypes = {
    tags: PropTypes.object,
};

export default BlogSidebar;
