// App.js

import './App.css';
import HomeSection from './components/Home';
import ChairPages from './components/chairPage.jsx'; 
import WhyChooseUs from './components/chooseUs.jsx';
import InteriorDesignPage from './components/InteriorDesign.jsx';
import Newsletter from './components/Newsletter.jsx';
function App() {
  return (
    <div className="bg-gradient-to-b from-[#18181A] to-[#222224]">
      <HomeSection />
      <ChairPages />
      <WhyChooseUs />
      <InteriorDesignPage />
      <Newsletter/>
    </div>
  );
}

export default App;