import { Bottom, Button, Card, Description, Name, Price, Top } from "../common/styled"
import { InlineBundle, Layers } from "../common/utils"
import { spaceSchema } from "../common/spaceSchema";
import { styled } from "styled-components";

export const Pad = styled.div`
    padding: ${props => {
        const paddingKeys = Array.isArray(props.padding) ? props.padding : [props.padding];
        return paddingKeys.map(padKey => spaceSchema[padKey]).join(" ");
    }};
`;

const GiftCard = () => {
    return (
        <Card>
            <Pad padding="l">
                <Top>
                    <Name>Amazon Gift Card</Name>
                    <Description>This is a awesome gift card from amazon</Description>
                    <Price>₹1000</Price>
                    <InlineBundle gutter="none" justify="center">
                        <Pad as={Button} padding={["m", "xl"]}>Buy</Pad>
                    </InlineBundle>
                </Top>
            </Pad>
            <Bottom>
                <Pad padding="l">
                    <Layers gutter="m">
                        <span>Includes:</span>
                        <ul>
                            <li>Any computer accessories</li>
                            <li>Any beauty products</li>
                            <li>Any home items</li>
                        </ul>
                    </Layers>
                </Pad>
            </Bottom>
        </Card>
    )
}

export default GiftCard