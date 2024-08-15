import './App.css';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Notes from './components/Notes';
import Display from './components/Display';

function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/sem1" element={<Home />}/>
                <Route exact path="/sem2" element={<Home />}/>
                <Route exact path="/sem3" element={<Course semester="3" key="sem3" />}/>
                <Route exact path="/sem4" element={<Course semester="4" key="sem4" />}/>
                <Route exact path="/sem5" element={<Home />}/>
                <Route exact path="/sem6" element={<Home />}/>
                <Route exact path="/about" element={<Notes/>}/>
                <Route exact path="/display" element={<Display />}/> 
            </Routes>
        </Router>
        </>
    );
}

export default App;
