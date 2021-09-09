import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
// import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
