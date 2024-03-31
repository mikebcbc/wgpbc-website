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
    MobileMenuArea,
    OffCanvasInner,
    MobileMenuBtn,
    ButtonBoxArea,
    OffCanvasContent,
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

    const searchHandler = () => {
        setOfCanvasSearchOpen((prev) => !prev);
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
                                        onKeyDown={searchHandler}
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
            <MobileMenuArea
                className={`${ofCanvasOpen ? "mobile-menu-open" : ""}`}
            >
                <OffCanvasInner>
                    <div
                        className="OffCanvasContent"
                        onClick={ofCanvasHandler}
                        onKeyDown={searchHandler}
                        role="button"
                        tabIndex={0}
                    ></div>
                    <OffCanvasContent>
                        <OffCanvasHeader>
                            <Logo />
                            <CloseAction>
                                <ButtonClose
                                    onClick={ofCanvasHandler}
                                    onKeyDown={searchHandler}
                                >
                                    <i className="icofont-close"></i>
                                </ButtonClose>
                            </CloseAction>
                        </OffCanvasHeader>

                        <MobileNavMenu MobilemenuData={menuData} />
                    </OffCanvasContent>
                </OffCanvasInner>
            </MobileMenuArea>
        </Fragment>
    );
};

Header.propTypes = {
    headerTop: PropTypes.object,
};
export default Header;
