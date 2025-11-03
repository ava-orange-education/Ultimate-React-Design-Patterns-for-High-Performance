import styled, { css } from "styled-components"
import { spaceSchema } from "./spaceSchema";

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

const responsive = css`
    --switchAt: ${({ switchAt }) =>
        typeof switchAt === "string" ? switchAt : `${switchAt}px`};
    flex-wrap: wrap;
    & > * {
        min-width: fit-content;
        flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
    }
`;

const stretchMap = {
    all: `> *  { flex: 1 }`,
    start: `> :first-child { flex: 1 }`,
    end: `> :last-child { flex: 1 }`,
};

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

export const Inline = styled(InlineBundle)`
    flex-wrap: nowrap;
    ${({ stretch }) => {
            if (typeof stretch === "number")
                return `> :nth-child(${stretch + 1}) { flex: 1 }`;
            return stretchMap[stretch] ?? "";
        }}
    ${({ switchAt }) => switchAt && responsive}
`;

export const Pad = styled.div`
    padding: ${props => {
        const paddingKeys = Array.isArray(props.padding) ? props.padding : [props.padding];
        return paddingKeys.map(padKey => spaceSchema[padKey]).join(" ");
    }};
`;

export const Columns = styled.div`
    --columns: ${({ columns = 1 }) => columns};
    display: grid;
    gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
    grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div`
    grid-column: span min(${({ $span = 1 }) => $span}, var(--columns)) / auto;
`;