import styled from "styled-components"
import { spaceSchema } from "../common/spaceSchema";

const fractions = {
    "1/4": "1fr 3fr",
    "1/3": "1fr 2fr",
    "1/2": "1fr 1fr",
    "2/3": "2fr 1fr",
    "3/4": "3fr 1fr",
    "auto-start": "auto 1fr",
    "auto-end": "1fr auto",
};

export const Split = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.l};
    grid-template-columns: ${({ fraction }) => fractions[fraction] ?? fractions["1/2"]};
    padding: 20px;
`;

export const Layers = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.l};
`;

export const Grid = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.l};
    grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth ?? "310px"}, 1fr));
    padding: 5px;
`

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

export const Pad = styled.div`
    padding: ${props => {
        const paddingKeys = Array.isArray(props.padding) ? props.padding : [props.padding];
        return paddingKeys.map(padKey => spaceSchema[padKey]).join(" ");
    }};
`;

export const Center = styled.div`
    box-sizing: content-box;
    margin-inline-start: auto;
    margin-inline-end: auto;
    max-inline-size: ${props => props.maxWidth};
    ${props => props.centerText && `text-align: center;`}
    ${props => props.centerChildren &&
            `display: flex;
            flex-direction: column;
            align-items: center;
    `}
`;
