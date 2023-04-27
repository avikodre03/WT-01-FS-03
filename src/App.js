
import './App.css';
import Award from './Comonents/Awards/Award';
import Features from './Comonents/Features/Features';
import Footer from './Comonents/Footer/Footer';
import Navbar from './Comonents/Navbar/Navbar';
import Theme from './Comonents/Theme/Theme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Theme/>
      <Features/>
      <Award/>
      <Footer/>
    </div>
  );
}

export default App;
