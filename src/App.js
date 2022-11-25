import { Route, Routes } from 'react-router-dom';
import './App.css';
import ICarousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Shops from './components/Shops/Shops';


function App() {
  return (
    <>
      {/* <Routes>
        <Route element={<Header />}>
            
        </Route>
      </Routes> */}
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Intro />
      {/* <ICarousel /> */}
      <Shops />
      </div>
    </>
  );
}

export default App;
