import logo from './logo.svg';
import './App.css';
//import Navbar from './components/Navbar';
import{ Routes, Route, Link} from 'react-router-dom'

import Home from './pages/home';
import About from './pages/About';
import Profile from './pages/profile';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <nav className='navBar'>
      <Link to='/'>home</Link>
      <Link to='./about'>about</Link>
      <Link to='./profile'>profile</Link>
      </nav>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
