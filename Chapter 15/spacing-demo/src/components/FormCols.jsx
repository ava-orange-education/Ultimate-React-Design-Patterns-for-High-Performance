import { InputGroup } from "./Form"
import { styled } from "styled-components";
import { spaceSchema } from "../common/spaceSchema";

export const Columns = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.l};
    grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
`;

export const Column = styled.div`
    grid-column: span ${({ spanSize = 1 }) => spanSize};
`;

const FormCols = () => {
    return (
        <Columns columns={6}>
            <Column spanSize={3}>
                <InputGroup htmlFor="firstName" label="First Name">
                    <input type="text" id="firstName" />
                </InputGroup>
            </Column>
            <Column spanSize={3}>
                <InputGroup htmlFor="lastName" label="Last Name">
                    <input type="text" id="lastName" />
                </InputGroup>
            </Column>
            <Column spanSize={3}>
                <InputGroup htmlFor="email" label="Email">
                    <input type="text" id="email" />
                </InputGroup>
            </Column>
            <Column spanSize={6}>
                <InputGroup htmlFor="address" label="Street Address">
                    <input type="text" id="address" />
                </InputGroup>
            </Column>
            <Column spanSize={2}>
                <InputGroup htmlFor="city" label="City">
                    <input type="text" id="city" />
                </InputGroup>
            </Column>
            <Column spanSize={2}>
                <InputGroup htmlFor="country" label="Country">
                    <input type="text" id="country" />
                </InputGroup>
            </Column>
            <Column spanSize={2}>
                <InputGroup htmlFor="phone" label="Phone Number">
                    <input type="text" id="phone" />
                </InputGroup>
            </Column>
        </Columns>
    )
}
export default FormCols