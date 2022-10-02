import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { slugify, containsObject } from "@utils/functions";
import { TagSidebar } from "./style";

const Tags = ({ tags }) => {
    if (!tags) {
        return <div></div>;
    }

    return (
        <TagSidebar>
            {Object.keys(tags).map((tag) => (
                <Link key={tag} to={`/tags/${slugify(tag)}`}>
                    {tag} <span>({tags[tag]})</span>
                </Link>
            ))}
        </TagSidebar>
    );
};

Tags.propTypes = {
    tags: PropTypes.object,
};

export default Tags;
