import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import {
    ContactFormArea,
    Form,
    SectionTitle,
    Title,
    FormGroup,
    Input,
    Error,
} from "./style";
import addToMailchimp from "gatsby-plugin-mailchimp";
import PropTypes from "prop-types";

const ContactForm = ({ sidebar }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email, {
            FName: firstName,
            LName: lastName,
        });
        setResult(result);
    };

    return (
        <ContactFormArea className={sidebar ? "sidebar" : ""}>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        {!sidebar && (
                            <Title>
                                {result?.result === "success"
                                    ? "Thank you!"
                                    : result?.result === "error"
                                    ? "Uh oh."
                                    : "Get In Touch."}
                            </Title>
                        )}
                        <p>
                            {result?.result === "success"
                                ? result?.msg
                                : "We send out devotions, Christian thoughts, and updates all the time! Feel free to drop your name and email and we'll put you in the loop."}
                        </p>
                    </SectionTitle>
                </Col>
            </Row>
            {(!result || result?.result === "error") && (
                <Row>
                    <Col lg={12}>
                        <Form onSubmit={handleSubmit}>
                            <Row className="row-gutter-20">
                                <Col lg={sidebar ? 12 : 6}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={sidebar ? 12 : 6}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                    {result?.result === "error" && (
                                        <Error>{result.msg}</Error>
                                    )}
                                </Col>
                                <Col lg={12}>
                                    <FormGroup>
                                        <Button
                                            type="submit"
                                            color={
                                                sidebar ? undefined : "gradient"
                                            }
                                            variant={
                                                sidebar ? "outlined" : undefined
                                            }
                                            size={sidebar ? "small" : "medium"}
                                        >
                                            Subscribe
                                        </Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            )}
        </ContactFormArea>
    );
};

ContactForm.propTypes = {
    sidebar: PropTypes.bool,
};

export default ContactForm;
