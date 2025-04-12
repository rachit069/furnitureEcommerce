// import './App.css';
// import HomeSection from './components/Home';
// import ChairPages from './components/chairPage.jsx'; 
// import WhyChooseUs from './components/chooseUs.jsx';
// import InteriorDesignPage from './components/InteriorDesign.jsx';

// function App() {
//   return (
//     <div>
//       <HomeSection />
//       <ChairPages />
//       <WhyChooseUs />
//       <InteriorDesignPage />
//     </div>
//   );
// }

// export default App;

// App.js

import './App.css';
import HomeSection from './components/Home';
import ChairPages from './components/chairPage.jsx'; 
import WhyChooseUs from './components/chooseUs.jsx';
import InteriorDesignPage from './components/InteriorDesign.jsx';
function App() {
  return (
    <div className="bg-gradient-to-b from-[#18181A] to-[#222224]">
      <HomeSection />
      <ChairPages />
      <WhyChooseUs />
      <InteriorDesignPage />
    </div>
  );
}

export default App;