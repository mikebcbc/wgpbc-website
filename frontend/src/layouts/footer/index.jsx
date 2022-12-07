import HeartIcon from "@assets/images/svg/heart.svg";
import { FooterWrap, SocialIcons, CopyrightText } from "./style";

const Footer = () => {
    return (
        <FooterWrap>
            <SocialIcons>
                <a
                    className="facebook"
                    href="https://www.facebook.com/WinterGardenPBC/"
                >
                    <i className="social_facebook_square"></i>
                </a>
                <a
                    className="vimeo"
                    href="https://vimeo.com/user9177573/videos"
                >
                    <i className="social_vimeo_square"></i>
                </a>
                <a className="rss" href="/blog">
                    <i className="social_rss_square"></i>
                </a>
            </SocialIcons>
            <CopyrightText>
                &copy; {new Date().getFullYear()} WGPBC. Made with <HeartIcon />{" "}
                by{" "}
                <a
                    href="https://mikebconstantino.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mike Constantino
                </a>
            </CopyrightText>
        </FooterWrap>
    );
};

export default Footer;
