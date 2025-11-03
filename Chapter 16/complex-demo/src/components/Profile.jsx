import { Extras } from "../common/styled"
import { styled } from "styled-components";

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

const Profile = () => {
    return (
        <Center maxWidth="60ch" centerText centerChildren>
            <h2>lorem title!</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quod nostrum eaque ex placeat debitis pariatur cupiditate numquam sed quam, quisquam delectus vero odit autem tenetur iure nihil molestiae
            </p>
            <Extras />
        </Center>
    )
}

export default Profile