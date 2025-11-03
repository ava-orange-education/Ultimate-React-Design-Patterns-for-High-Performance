import { styled } from "styled-components";
import { Column, Columns, Layers, Pad, Split } from "../common/utils";
import { Logo } from "./Logo";
import Controls from "./Controls";

const Form = styled.div`
    border-inline-start: 1px solid lightgrey;
    > * + * {
        border-block-start: 1px solid lightgrey;
    }
`;

const InputGroup = ({ label, children }) => {
    return (
        <Layers as="label" gutter="s">
            {label}
            {children}
        </Layers>
    );
};

const SubLabel = styled.span`
    color: grey;
`;

const Input = styled.input`
    border-radius: 0.25rem;
    border: 1px solid lightgrey;
    color: #303030;
    height: 30px;
`;

const RightSide = () => {
    return (
        <Form>
            <Pad as="section" padding="l">
                <Layers gutter="l">
                    <Layers as="header" gutter="m">
                        <h2>General Information</h2>
                        <SubLabel>
                            These information will be the required for the basic verification
                            of profile.
                        </SubLabel>
                    </Layers>
                    <Split gutter="l" fraction="auto-end">
                        <Layers gutter="l">
                            <InputGroup label="Username">
                                <Input />
                            </InputGroup>
                            <InputGroup label="About">
                                <Input as="textarea" />
                                <SubLabel>
                                    Tell a brief introduction of your self. Is is considered as personal bio.
                                </SubLabel>
                            </InputGroup>
                        </Layers>
                        <label>
                            Image
                            <Logo inverse size="10rem" />
                        </label>
                    </Split>
                    <Columns gutter="l" columns={2}>
                        <InputGroup label="First Name">
                            <Input />
                        </InputGroup>
                        <InputGroup label="Last Name">
                            <Input />
                        </InputGroup>
                        <Column span={2}>
                            <InputGroup label="Linkedin">
                                <Input />
                            </InputGroup>
                        </Column>
                        <InputGroup label="Employer">
                            <Input />
                        </InputGroup>
                    </Columns>
                </Layers>
            </Pad>
            <Controls />
        </Form>
    )
}
export default RightSide