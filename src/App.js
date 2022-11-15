import logo from './logo.svg';
import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
       <main className="bg-white px-10">
     <Header />
      <About />
      <Projects />
      </main>
    </div>
  );
}

export default App;
