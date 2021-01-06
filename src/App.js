
import './App.css';
import Banner from './components/Banner';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Suplements from './components/Suplements';
import Gallery from './components/Gallery';
import Trainings from './components/Trainings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rates from './components/Rates';
import Contact from './components/Contact';

function App() {
  return (

    
    <Router>
      <div className="app">
        <Switch>

        <Route path="/gallery">
            <Gallery />
            <Footer />
          </Route>

          <Route path="/rates">
            <Rates />
            <Footer />
          </Route>

          <Route path='/contact'>
            <Contact />
            <Footer />
          </Route>

          {/* Home path */}
          <Route path="/">
            <Header />
            <Container />
            <Trainings />
            <Container />
            <Suplements />
            <Container />
            <Banner />
            <Footer />
          </Route>


        </Switch>

      </div>
    </Router>



  );
}

export default App;
