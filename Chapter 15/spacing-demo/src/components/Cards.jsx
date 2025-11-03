import Card from "./Card"
import { styled } from "styled-components";
import { spaceSchema } from "../common/spaceSchema";

export const Grid = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.l};
    grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth ?? "310px"}, 1fr));
    padding: 5px;
`

const Cards = () => {
    return (
        <Grid minWidth="24rem" gutter="xl">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>
    )
}
export default Cards