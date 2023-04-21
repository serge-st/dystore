import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useLazyGetProductsQuery } from './services/productsApi'
import { setProducts } from './store/productsSlice';
import { useEffect } from 'react';

function App() {
  const state = useSelector(store => store);
  const dispatch = useDispatch();

  console.log(JSON.stringify(state))

  // !! testing, remove after
  // const handleClick = () => {
  //   dispatch(setProducts(1))
  // }

  const [callApi, { data, error, isLoading }] = useLazyGetProductsQuery()

  console.log('data ===>', JSON.stringify(data))

  const handleClick = async () => { 
      const result = await callApi();
      dispatch(setProducts(result.data))
  }

  useEffect(() => {

  })

  return (
    <div className="App">
      {/* !! testing, remove after */}
      <button type="button" onClick={handleClick}>add</button>
      App page
    </div>
  );
}

export default App;
