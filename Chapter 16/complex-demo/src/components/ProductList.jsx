import { Grid } from "../common/utils"
import Product from "./Product"

const ProductList = () => {
    return (
        <Grid gutter="xl" minItemWidth="18rem">
            <Product />
            <Product />
            <Product />
            <Product />
        </Grid>
    )
}
export default ProductList