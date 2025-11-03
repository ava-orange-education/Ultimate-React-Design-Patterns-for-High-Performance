import styled from "styled-components";
import { balanced, typescales } from "../utils";

export const RegisterContainer = styled.div`
    width: 700px;
    height: 400px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    background-color: ${balanced[100]};
    color: ${balanced[600]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    background: ${balanced[100]};
`;

export const RegisterHeader = styled.h3`
    font-size: ${typescales.header3};
`;

export const RegisterHelper = styled.p`
    font-size: ${typescales.paragraph};
    text-align: center;
`;

export const CloseIconContainer = styled.button`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 26px;
    height: 26px;
    padding: 0;
    cursor: pointer;
    background: none;
    border: none;
`;