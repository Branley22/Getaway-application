import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
