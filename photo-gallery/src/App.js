import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import { ImageList } from './components/ImageList';
import Image from './components/Image';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        
      <Route exact path="/">  
        <ImageList />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route path="/gallery/:id">
        <Image/>
      </Route>

      <Footer/>
    </div>
  );
}

export default App;
