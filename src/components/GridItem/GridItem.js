const GridItem = ({data}) => {
    return (
        <div>
            <img src={`https://picsum.photos/id/${data.id}/200/300`} alt={data.title}/>
            Grid item {data.id}
        </div>
    );
};

export default GridItem;