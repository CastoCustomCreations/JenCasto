import { BrowserRouter } from "react-router-dom";

import { About, Contact, Navbar, Works, StarsCanvas, Tech1, Hero } from "./components";
import WalkingCat from "./components/WalkingCat";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-900'>
        <div className='bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          </div>
        <About />
        <Tech1 />
        <Works />
        <Education/>        
        <WalkingCat />
        
          <Contact />
          <StarsCanvas />
        </div>
      
    </BrowserRouter>
  );
}

export default App;
