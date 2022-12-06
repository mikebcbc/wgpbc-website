import React from "react";
import PropTypes from "prop-types";
import ContactForm from "@components/contact-form";
import { StaticImage } from "gatsby-plugin-image";
import {
    SidebarArea,
    Widget,
    WidgetTitle,
    SeparatorLine,
    TagSidebar,
} from "./style";
import { Link } from "gatsby";
1;

const Sidebar = ({ tags, title, route }) => {
    const sortedTags = {};

    Object.keys(tags)
        .sort(function (a, b) {
            return tags[b].count - tags[a].count;
        })
        .forEach(function (key) {
            sortedTags[key] = tags[key];
        });

    return (
        <SidebarArea>
            <Widget>
                <WidgetTitle>{title}</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../data/images/shape/line-t2.png"
                        alt="Image-Givest"
                    />
                </SeparatorLine>
                <TagSidebar>
                    {Object.keys(sortedTags).map((tag) => (
                        <Link
                            key={tag}
                            to={`/${route}${
                                sortedTags[tag].slug
                                    ? `?category=${tags[tag].slug}`
                                    : ""
                            }`}
                        >
                            {tag} <span>({tags[tag].count})</span>
                        </Link>
                    ))}
                </TagSidebar>
            </Widget>
            <Widget>
                <WidgetTitle>Subscribe</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../data/images/shape/line-t2.png"
                        alt="Image-Givest"
                    />
                </SeparatorLine>
                <ContactForm sidebar={true} />
            </Widget>
        </SidebarArea>
    );
};

Sidebar.propTypes = {
    tags: PropTypes.object,
    title: PropTypes.string,
    route: PropTypes.string,
};

export default Sidebar;
