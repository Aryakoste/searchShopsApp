import { Route, Routes } from 'react-router-dom';
import './App.css';
import ICarousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Shops from './components/Shops/Shops';

function App() {
  return (
    <>
      {/* <Routes>
        <Route element={<Header />}>
            
        </Route>
      </Routes> */}
      <Header />
      {/* <ICarousel /> */}
      <Shops />
    </>
  );
}

export default App;
