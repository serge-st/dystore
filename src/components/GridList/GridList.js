import { useSelector } from "react-redux";
import GridItem from "../GridItem/GridItem";

const GridList = () => {
    const {products} = useSelector(state => state.products)

    const renderedItmes = products.map(product => {
        return (
            <GridItem key={product.id} data={product} />
        )
    })

    return (
        <div>
            {renderedItmes}
        </div>
    );
};

export default GridList;