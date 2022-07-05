import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/css/App.css';
import Frame from './components/Frame';
import Beranda from './pages/Beranda';
import Page404 from './pages/Page404';
import Portofolio from './pages/Portofolio';
import Profil from './pages/Profil';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Frame><Beranda/></Frame>}/>
        <Route path='/profil' element={<Frame><Profil/></Frame>}/>
        <Route path='/resume' element={<Frame><Resume/></Frame>}/>
        <Route path='/portofolio' element={<Frame><Portofolio/></Frame>}/>
        <Route path="*" element={<Frame><Page404/></Frame>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
