import styled from "styled-components";
import { Center, Layers, Pad, Split } from "./utils";
import img from '../images/profile.jpg'

export const CoverButton = styled(Pad).attrs(() => ({
    padding: ["m", "xl"],
    as: "button",
}))`
    background: ${props => (props.primary ? "darkred" : "white")};
    color: ${props => (props.primary ? "white" : "darkred")};
    border: ${props => (props.primary ? "none" : "1px solid darkred")};
    border-radius: 0.25rem;
`;

export const DescriptionMedia = (props) => (
    <Pad padding="l">
        <Center centerText>{props.children}</Center>
    </Pad>
);

export const MediaWrapper = styled.div`
    --n: ${props => (props.ratio ? props.ratio[0] : 1)};
    --d: ${props => (props.ratio ? props.ratio[1] : 1)};
    ${props => props.ratio &&
        `aspect-ratio: var(--n) / var(--d);
            @supports not (aspect-ratio: 1/1) {
            padding-block-end: calc(var(--d) / var(--n) * 100%);
        }
    `}
    position: relative;
    > * {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > img,
    > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LogoImg = styled.img`border-radius: 50%;`;
export const Wrapper = styled(Split)`
    align-items: center;
    > [data-layout-MediaWrapper] {
        min-width: 3rem;
    }
`;

export const Extras = () => (
    <Wrapper fraction="auto-start" gutter="l">
        <MediaWrapper data-layout-MediaWrapper ratio={[1, 1]}>
            <LogoImg src={img} alt="profile" />
        </MediaWrapper>
        <span>Profile Image / Downloaded from unsplash.com </span>
    </Wrapper>
);

export const Card = styled.div`
    border: 1px solid #4CAF50;
    border-radius: 1rem;
    background: linear-gradient(
        45deg,
        rgba(76, 175, 80, 0.2), 
        rgba(33, 150, 243, 0.2),
        rgba(244, 67, 54, 0.2), 
        rgba(255, 193, 7, 0.2), 
        rgba(156, 39, 176, 0.2), 
        rgba(255, 87, 34, 0.2), 
        rgba(63, 81, 181, 0.2) 
    );
`;

export const Top = (props) => <Layers {...props} gutter="m" />;
export const Bottom = styled.div`border-top: 1px solid #4CAF50;`;

export const Button = styled.div`
    background-color: #4CAF50;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer; 
`;

export const Description = styled.p`color: #757575;`;
export const Price = styled.span`font-size: 1.5rem; color: #333;`;
export const Name = styled.strong`font-size: 1.25rem; color:#4CAF50;`;