import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Timetable from './components/timetable';
import Links from './components/links';
import Plan from './components/plan';
import Teachers from './components/teachers';
import Feedback from './components/feedback';


function App() {
  return (
    <div className="App">
       <Header />


       <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/links" element={<Links />} />
          <Route path="/school_plan" element={<Plan />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/feedback" element={<Feedback />} />
       </Routes>
      
       

       <Footer />
      
       

    </div>
  );
}

export default App;
