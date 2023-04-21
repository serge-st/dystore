import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setProducts } from './store/productsSlice';
import { useEffect } from 'react';

function App() {
  const state = useSelector(store => store);
  const dispatch = useDispatch();

  console.log(JSON.stringify(state))

  // !! testing, remove after
  const handleClick = () => {
    dispatch(setProducts(1))
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
