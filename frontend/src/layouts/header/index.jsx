/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/elegantIcons.css";
import "../../assets/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import { graphql, useStaticQuery } from "gatsby";
import Button from "@components/ui/button";
import MobileNavMenu from "@components/menu/mobile-menu";
import {
    HeaderTop,
    HeaderMenuArea,
    HeaderActionArea,
    MobileMenuDimmer,
    MobileMenuSheet,
    MobileMenuBtn,
    ButtonBoxArea,
    OffCanvasPanel,
    OffCanvasHeader,
    CloseAction,
    ButtonClose,
} from "./style";

const Header = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        isSubmenu
                        submenu {
                            text
                            link
                        }
                        isExternal
                    }
                }
            }
        }
    `);
    const menuData = allmenuData.allMenuJson.edges;

    // Sticky Menu
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header-section");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    // OfCanvas Menu
    const [ofCanvasOpen, setOfCanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofCanvasHandler = () => {
        setOfCanvasOpen((prev) => !prev);
    };

    const backdropKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            ofCanvasHandler();
        }
    };

    return (
        <Fragment>
            <HeaderTop
                className={`header-section ${
                    scroll > headerTop ? "is-sticky" : ""
                }`}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3} md={3} sm={3} xs={5}>
                            <Logo />
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={7}>
                            <HeaderMenuArea>
                                <MainMenu allmenuData={menuData} />

                                <HeaderActionArea>
                                    <MobileMenuBtn
                                        onClick={ofCanvasHandler}
                                        type="button"
                                        aria-expanded={ofCanvasOpen}
                                        aria-label="Open menu"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </MobileMenuBtn>
                                    <ButtonBoxArea>
                                        <Button
                                            sx={{ ml: "15px" }}
                                            type="button"
                                            path="/contact-us"
                                            color="gradient"
                                        >
                                            Find Us{" "}
                                            <i className="flaticon-right-arrow"></i>
                                        </Button>
                                    </ButtonBoxArea>
                                </HeaderActionArea>
                            </HeaderMenuArea>
                        </Col>
                    </Row>
                </Container>
            </HeaderTop>
            <MobileMenuDimmer
                className={ofCanvasOpen ? "mobile-menu-open" : ""}
                onClick={ofCanvasHandler}
                onKeyDown={backdropKeyDown}
                role="button"
                tabIndex={ofCanvasOpen ? 0 : -1}
                aria-hidden={!ofCanvasOpen}
                aria-label="Close menu"
            />
            <MobileMenuSheet
                className={ofCanvasOpen ? "mobile-menu-open" : ""}
                aria-hidden={!ofCanvasOpen}
            >
                <OffCanvasPanel $isOpen={ofCanvasOpen}>
                    <OffCanvasHeader>
                        <Logo />
                        <CloseAction>
                            <ButtonClose
                                type="button"
                                onClick={ofCanvasHandler}
                                aria-label="Close menu"
                            >
                                <i className="icofont-close"></i>
                            </ButtonClose>
                        </CloseAction>
                    </OffCanvasHeader>

                    <MobileNavMenu MobilemenuData={menuData} />
                </OffCanvasPanel>
            </MobileMenuSheet>
        </Fragment>
    );
};

Header.propTypes = {
    headerTop: PropTypes.object,
};
export default Header;
