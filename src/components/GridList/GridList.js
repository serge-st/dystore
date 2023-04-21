import { useSelector } from "react-redux";
import GridItem from "../GridItem/GridItem";
import './GridList.css'

const GridList = () => {
    const {products} = useSelector(state => state.products)

    const renderedItems = products.map(product => {
        return (
            <GridItem key={product.id} data={product} />
        )
    })

    return (
        <div>
            <div className="gridTitle">
                Shop
            </div>
            <div className="gridDesc">
                Get your latest accessories right here and now!
            </div>
            <div className="gridList">
                {renderedItems}
            </div>
        </div>
    );
};

export default GridList;