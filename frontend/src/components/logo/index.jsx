import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import WGPBCLogo from "@assets/images/logo/wgpbc.png";
import { LogoContainer } from "./style";

const Logo = ({ className }) => {
    return (
        <LogoContainer className={className}>
            <Link to="/">
                <img className="logo-main" src={WGPBCLogo} alt="Logo" />
            </Link>
        </LogoContainer>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
};

export default Logo;
