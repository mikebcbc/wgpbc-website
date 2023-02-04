/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Header, HeaderTitle } from "../../../SharedStyles";
import {
    SectionArea,
    DarkSectionArea,
    ArticlesOfFaith,
    ArticleFaith,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    ContentBoxWrp,
} from "./style";

const AboutPageArea = () => {
    return (
        <div>
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>Who We Are</HeaderTitle>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <SectionArea>
                <Container>
                    <Row>
                        <Col lg={4} xl={4}>
                            <LayerStyle>
                                <Thumb>
                                    <StaticImage
                                        src="../../../data/images/about/jonah.jpg"
                                        alt="Picture of children at WGPBC"
                                        placeholder="blurred"
                                    />
                                </Thumb>
                            </LayerStyle>
                        </Col>
                        <Col lg={8} xl={8}>
                            <AboutContent>
                                <AboutTextStyle>
                                    Step into a time tunnel, walk in &quot;the
                                    old paths&quot;, and worship in a manner
                                    that is 2000 years old. No distractions from
                                    the message of Jesus Christ and Him
                                    crucified.
                                </AboutTextStyle>
                                <p>
                                    Why, seeing that we enjoy the comforts of
                                    modern living, do we identify ourselves as
                                    &quot;primitive&quot;?{" "}
                                    <strong>
                                        As a church, we make a sincere effort to
                                        maintain the practice and doctrine
                                        exhibited in the New Testament, despite
                                        changing values and customs around us.
                                    </strong>
                                    Therefore, we are &quot;primitive&quot;,
                                    meaning first or original.
                                </p>
                                <p>
                                    But our message? The message from the
                                    Primitive Baptist pulpits all over America
                                    is as up-to-date as the morning newspaper.
                                    What could be more current than to hear of a
                                    sovereign God who is infinitely concerned
                                    for the welfare of his people? His interest
                                    is so great that He gave Jesus Christ, His
                                    only begotten Son, as the sin bearer that
                                    all His family might safely live with God
                                    after life on earth has ended. But
                                    that&apos;s not the end of the message. Not
                                    only did God make arrangements for His
                                    family to live in Heaven, God provides daily
                                    guidance for His servants as they face the
                                    choices, decisions, trials, and conflicts of
                                    life. Learning how to make the right choices
                                    - the ones that will honor God - is a
                                    principle part of Christian activity.
                                    Therefore much is heard from our ministers
                                    about godly daily living.
                                </p>
                                <p>
                                    We feel that you might find a Bible-based
                                    worship service among the Primitive Baptists
                                    refreshing. Sometimes the hectic machinery
                                    of modern religion detracts from the simple,
                                    but central message of &quot;Jesus Christ
                                    and Him crucified.&quot; Therefore, we
                                    invite you to experience the thrill of
                                    stepping into a time tunnel, walking in
                                    &quot;the old paths&quot;, and worshipping
                                    in a manner that is 2000 years old.
                                </p>
                            </AboutContent>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <DarkSectionArea>
                <Container>
                    <Row>
                        <Col lg={8} className="m-auto">
                            <SectionTitle
                                sx={{
                                    mb: ["50px", "90px", "60px", "90px"],
                                    mt: ["0", "30px", "30px", "0"],
                                }}
                                textCenter
                                showImage={true}
                                title={"<span>Our Articles of Faith</span>"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ArticlesOfFaith>
                                <ArticleFaith>
                                    <h5>The Trinity</h5>
                                    <p>
                                        We believe in one true and living God,
                                        Father, Son, and Holy Spirit, and these
                                        three are one.
                                        <br />
                                        <i>
                                            Matthew 28:19, John 1:1, I John 5:7.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>The Scriptures</h5>
                                    <p>
                                        We believe the Scriptures of the Old and
                                        New Testaments are the revealed and
                                        inspired word of God, and the only rule
                                        of faith and practice, particularly the
                                        New Testament, for saints under this
                                        dispensation. <br />
                                        <i>2 Timothy 3:16-17, 2 Peter 1:21.</i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>The Depravity of Man</h5>
                                    <p>
                                        We believe that in the transgression of
                                        Adam, he fell under the just
                                        condemnation of God’s holy law, that all
                                        the human race was corrupted in and by
                                        him and that it is impossible for any of
                                        them to recover themselves or gain the
                                        favor of God by their own works or an
                                        act of their own will. <br />
                                        <i>
                                            John 6:44, Romans 3:9-20, Romans
                                            5:12, Ephesians 2:1.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>Unconditional Election</h5>
                                    <p>
                                        We believe God, before the foundation of
                                        the world, unconditionally elected a
                                        definite number of the human family in
                                        Jesus Christ and ordained them to
                                        eternal life and glory. <br />
                                        <i>
                                            Romans 8:29, Romans 9:11-13,
                                            Ephesians 1:4-6, Thessalonians 1:4
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>The Justification of Man</h5>
                                    <p>
                                        We believe Jesus Christ suffered and
                                        died in the room and stead of His elect
                                        only and that His elect are justified in
                                        the sight of God by the imputed
                                        righteousness of Christ.
                                        <br />
                                        <i>
                                            Acts 20:28, John 10:11, Hebrews
                                            10:14, Romans 5:8-10.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>The Holy Spirit</h5>
                                    <p>
                                        We believe that the Holy Spirit
                                        effectually calls, regenerates, and
                                        sanctifies all the elect of God. <br />
                                        <i>John 6:37, 2 Timothy 1:9, Jude 1.</i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>Preservation</h5>
                                    <p>
                                        We believe all the elect shall be
                                        preserved in grace by the power of God
                                        and never fall finally away.
                                        <br />
                                        <i>
                                            John 10:27, Romans 8:30, Philippians
                                            1:6.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>Good Works</h5>
                                    <p>
                                        We believe that good works, obedience to
                                        the commands of God, are well pleasing
                                        in His sight and should be maintained;
                                        but they are to be considered only as
                                        evidence of a gracious state, and are
                                        not a condition of eternal salvation.
                                        <br />
                                        <i>
                                            Ephesians 2:10, Hebrews 13:16, James
                                            2:17-18, Galatians 5:22-23.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>Baptism</h5>
                                    <p>
                                        We believe that baptism and the Lord’s
                                        Supper are ordinances of Jesus Christ
                                        and that true believers are the only fit
                                        subjects for baptism and immersion is
                                        the only proper mode. <br />
                                        <i>
                                            Matthew 28:19, Luke 22:19-20, I
                                            Corinthians 11:24-25.
                                        </i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>Foot Washing</h5>
                                    <p>
                                        We believe that as our Lord and Savior
                                        washed His disciples’ feet, we ought to
                                        wash one another’s feet. <br />
                                        <i>John 13:4-17, I Timothy 5:10.</i>
                                    </p>
                                </ArticleFaith>
                                <ArticleFaith>
                                    <h5>The Resurrection</h5>
                                    <p>
                                        We believe in the resurrection of the
                                        dead, both of the just and the unjust,
                                        and a general judgment, and the
                                        happiness of the righteous and the
                                        suffering of the wicked, will be
                                        everlasting. <br />
                                        <i>
                                            John 5:28-29, Revelation 20:12-15.
                                        </i>
                                    </p>
                                </ArticleFaith>
                            </ArticlesOfFaith>
                        </Col>
                    </Row>
                </Container>
            </DarkSectionArea>
        </div>
    );
};

export default AboutPageArea;
