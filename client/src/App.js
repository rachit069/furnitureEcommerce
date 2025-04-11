// import './App.css';
// import HomeSection from './components/Home';
// import chairPages from './components/chairPage.jsx';
// function App() {
//   return (
//     <div>
//       <HomeSection />
//       <chairPages/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import HomeSection from './components/Home';
import ChairPages from './components/chairPage.jsx';  // Changed to PascalCase and match export name

function App() {
  return (
    <div>
      <HomeSection />
      <ChairPages />  {/* Changed to PascalCase and added space between components */}
    </div>
  );
}

export default App;