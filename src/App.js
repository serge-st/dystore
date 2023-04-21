import { useDispatch } from 'react-redux';
import './App.css';
import {useLazyGetProductsQuery} from './services/productsApi'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { setProducts, setLoading } from './store/productsSlice';
import { useEffect } from 'react';
import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader'
import GridList from './components/GridList/GridList';
import ProductPage from './pages/Product/ProductPage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  const dispatch = useDispatch();
  const [callApi, { data, error, isLoading }] = useLazyGetProductsQuery()

  useEffect(() => {
    if (!data) {
      const getData = async () => { 
        const result = await callApi();
        dispatch(setProducts(result.data))
      }
      getData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {
        isLoading
          ? <Loader />
          : null
      }
    </div>
  );
}

export default App;