 import Hero from "./sections/Hero";
 import Navbar from "./sections/Navbar";
 import About from "./sections/About";
 import Howto from "./sections/Howto";
 import Tokenomics from "./sections/Tokenomics";
 import Roadmap from "./sections/Roadmap";
 import Footer from "./sections/Footer";
 

function App() {
  return (
    <div className="bg-[#4C9540] min-h-screen  pb-10f text-white overflow-hidden z-[2] relative">
     
<Navbar/>
      <Hero/>
<About/>
<Howto/>
<Tokenomics/>
<Roadmap/>
<Footer/>
    </div>
  );
}

export default App;
