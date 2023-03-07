// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Postdetail from './Postdetail';
import './App.css';
import CreatePost from './CreatePost';
import Home from './Home';
import Navbar from './Navbar';
// import 
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
function App() {
  return (
    <div className="container">
      
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create-post' element={< CreatePost/>}/>
        <Route path='/post/:postId' element={< Postdetail/>}/>
      </Routes>
    </Router>
    </div>
     ) 
}

export default App;
