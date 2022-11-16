import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
       <main className="bg-white px-10">
        <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
