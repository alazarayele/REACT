import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
import News from './components/pages/News';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contactus';
import Details from './components/pages/Details';
import Main from './components/pages/Main';
import Single from './components/pages/Single';
import Manage from './components/pages/Manage';
import Screen from './components/pages/Screen';
import UnderMan from './components/pages/UnderMan';
function App() {
  return (
   

    <div>
     <Navbarr/>
    
     <Router>
      
  <Routes>
  <Route path="/" element={<Screen/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/contacts" element={<Contacts/>}/>
  <Route path="/details" element={<Details/>}/>
  <Route path="/Single" element={<Single/>}/>
  <Route exact path="/Manage" element={<Manage/>}/>
  <Route exact path="/UnderMan" element={<UnderMan/>}/>
    <Route exact path="/home" element={<Home/>}/>
  
  </Routes>
</Router>

    <Footer/>
    </div>
  );
}

export default App;
