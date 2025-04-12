import './App.css';
import HomeSection from './components/Home';
import ChairPages from './components/chairPage.jsx'; 
import ChooseUs from './components/chooseUs.jsx'; // Import with uppercase 'C'

function App() {
  return (
    <div>
      <HomeSection />
      <ChairPages />
      <ChooseUs /> {/* Use with uppercase 'C' in JSX */}
    </div>
  );
}

export default App;