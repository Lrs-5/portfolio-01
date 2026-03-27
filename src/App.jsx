import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="bg-[#0b1120] min-h-screen w-full overflow-x-hidden text-white relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,142,230,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(70,86,151,0.16),_transparent_28%)]" />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;