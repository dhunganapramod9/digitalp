import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;