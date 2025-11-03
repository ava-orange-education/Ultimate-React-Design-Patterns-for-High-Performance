import MenuBasis from "./MenuBasis"
import { spaceSchema } from "../common/spaceSchema";
import { styled } from "styled-components";

const justifyAlignWay = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
};

export const InlineBundle = styled.div`
    --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
        display: flex;
        flex-wrap: wrap;
        gap: var(--gutter);
        justify-content: ${props => justifyAlignWay[props.justify] ?? justifyAlignWay.start};
        align-items: ${props => justifyAlignWay[props.align] ?? justifyAlignWay.start};
`

const Menu = () => {
    return (
        <MenuBasis>
            <InlineBundle gutter="l" justify="end" align="center">
                <span>Books</span>
                <span>Authors</span>
                <span>Deals</span>
                <span>About Us</span>
                <span>Sign-in</span>
            </InlineBundle>
        </MenuBasis>
    )
}
export default Menu