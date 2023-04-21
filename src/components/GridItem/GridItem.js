
import './GridItem.css';
import { Link } from 'react-router-dom';

const GridItem = ({data}) => {
    const redirect = `/products/${data.id}`

    return (
        <div className="gridItem">
            <div className="gridImage">
                <Link to={redirect}>
                    <img src={`https://picsum.photos/id/${data.id}/400/400`} alt={data.title}/>
                </Link>
            </div>
            <div className="gridItemTitle">
                {data.title}
            </div>
            <div className="gridItemBottom">
                <div className="gridItemPrice">
                    ${data.id * 9.99}
                </div>
                <button className="gridButton" >Buy Now</button>
            </div> 
        </div>
    );
};

export default GridItem;