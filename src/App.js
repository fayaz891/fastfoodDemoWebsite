
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home';
import Service from './Components/Pages/Service';
import Gallery from './Components/Pages/Gallery';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from './Components/icl/Navbar';
import Search from "./Components/Pages/Search";


function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </>
  );
}

export default App;
