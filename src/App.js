import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Course from './components/Course';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import PDFView from './components/PDFView';
import About from './components/About';
import './App.css';

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
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/notes" element={<Notes/>}/>
                <Route exact path="/view" element={<PDFView/>}/> 
            </Routes>
        </Router>
        </>
    );
}

export default App;
