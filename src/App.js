import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
       <main className="bg-white px-10">
        <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
