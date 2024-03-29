import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "@components/contact-form";
import { StaticImage } from "gatsby-plugin-image";
import {
    SectionArea,
    ContactInfoContentArea,
    ContactInfoItem,
    ContactIcon,
    ContactInfoContent,
    ContactTitle,
} from "./style";
const ContactUsArea = () => {
    return (
        <>
            <iframe
                title="Google Map"
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Winter%20Garden%20Primitive%20Baptist%20Church&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            ></iframe>
            <Container>
                <SectionArea>
                    <ContactInfoContentArea>
                        <ContactInfoItem>
                            <ContactIcon>
                                <StaticImage
                                    className="icon-img"
                                    src="../../../data/images/icons/c1.png"
                                    alt="Icon"
                                    placeholder="blurred"
                                />
                            </ContactIcon>
                            <ContactInfoContent>
                                <ContactTitle>Phone</ContactTitle>
                                <a href="tel:4076567007">407-656-7007</a>
                            </ContactInfoContent>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <ContactIcon>
                                <StaticImage
                                    className="icon-img"
                                    src="../../../data/images/icons/c3.png"
                                    alt="Icon"
                                    placeholder="blurred"
                                />
                            </ContactIcon>
                            <ContactInfoContent>
                                <ContactTitle>Address</ContactTitle>
                                <p>
                                    943 W Story Rd <br />
                                    Winter Garden, FL 34787
                                </p>
                            </ContactInfoContent>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <ContactIcon>
                                <StaticImage
                                    className="icon-img"
                                    src="../../../data/images/icons/c2.png"
                                    alt="Icon"
                                    placeholder="blurred"
                                />
                            </ContactIcon>
                            <ContactInfoContent>
                                <ContactTitle>Services</ContactTitle>
                                <strong>Sunday Worship</strong>: 10:30 AM <br />
                                <strong>Wednesday Bible Study</strong>
                                : 7:00 PM <br />
                            </ContactInfoContent>
                        </ContactInfoItem>
                    </ContactInfoContentArea>
                    <ContactForm />
                </SectionArea>
            </Container>
        </>
    );
};

export default ContactUsArea;
