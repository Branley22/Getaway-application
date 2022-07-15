import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import SlideShow from './components/slideShow/SlideShow';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Destinations />
      <Search />
      <Selects />
      <SlideShow />
    </div>
  );
}

export default App;
