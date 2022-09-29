import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ProgressBar } from "react-bootstrap";
import Button from "../../../../components/ui/button";
import {
    WidgetSermonItem,
    Thumb,
    CauseContentBox,
    Title,
    ProgressItem,
    AmountInfo,
    DonateAmount,
} from "./style";

const UrgentCauses = () => {
    return (
        <WidgetSermonItem>
            <Thumb>
                <StaticImage
                    src="../../../../data/images/causes/w1.jpg"
                    alt="Givest-HasTech"
                />
            </Thumb>
            <CauseContentBox>
                <Title>
                    <Link to="#!">Need School For Uganda Poor Children.</Link>
                </Title>
                <ProgressItem>
                    <ProgressBar
                        className="gradient"
                        now="70"
                        label={`70%`}
                    ></ProgressBar>
                </ProgressItem>
                <form action="#">
                    <AmountInfo>
                        <DonateAmount>$20</DonateAmount>
                        <DonateAmount>$35</DonateAmount>
                        <DonateAmount>$48</DonateAmount>
                        <DonateAmount className="mr-0">$90</DonateAmount>
                        <DonateAmount
                            className="donate-custom-amount"
                            htmlFor="Custome"
                        >
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Custome Amount"
                            />
                        </DonateAmount>
                    </AmountInfo>
                    <Button color="gradient" path="#">
                        <span>Donate Now</span>
                    </Button>
                </form>
            </CauseContentBox>
        </WidgetSermonItem>
    );
};

export default UrgentCauses;
