import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, TitleWrap } from "./style";
import ContactForm from "../../../components/contact-form";
const ContactArea = () => {
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col md={12} lg={6} xl={6}>
                        <ContactForm />
                    </Col>
                    <Col md={12} lg={6} xl={6} className="title">
                        <TitleWrap>
                            <SectionTitle
                                title={"<span>Stay connected with us.</span>"}
                            />
                        </TitleWrap>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ContactArea;
