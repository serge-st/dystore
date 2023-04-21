import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {useLazyGetProductsQuery} from './services/productsApi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setProducts } from './store/productsSlice';
import { useEffect } from 'react';
import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader'



function App() {
  console.log('APP render', Math.random())
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
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<MainPage />}/>
          <Route  path='/about' element={<AboutPage />}/>
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