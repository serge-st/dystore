import GridList from "../../components/GridList/GridList";
import useRecContext from "../../hooks/useRecContext";

const MainPage = () => {
    useRecContext('MAIN')
    return (
        <div>
            <GridList />
        </div>
    );
};

export default MainPage;