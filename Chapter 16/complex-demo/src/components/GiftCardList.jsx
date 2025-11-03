import { Grid } from "../common/utils"
import GiftCard from "./GiftCard"

const GiftCardList = () => {
    return (
        <Grid gutter="xl" minItemWidth="16rem">
            <GiftCard />
            <GiftCard />
            <GiftCard />
            <GiftCard />
        </Grid>
    )
}
export default GiftCardList