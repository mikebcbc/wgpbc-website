import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import {
    ContactFormArea,
    Form,
    SectionTitle,
    Title,
    FormGroup,
    Input,
} from "./style";

const ContactForm = () => {
    return (
        <ContactFormArea>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        <Title>Get In Touch.</Title>
                        <p>
                            We send out devotions, Christian thoughts, and
                            updates all the time! Feel free to drop your name
                            and email and we&apos;ll put you in the loop.
                        </p>
                    </SectionTitle>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Form action="#" method="post">
                        <Row className="row-gutter-20">
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="email"
                                        name="con_email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Submit Now
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </ContactFormArea>
    );
};

export default ContactForm;
