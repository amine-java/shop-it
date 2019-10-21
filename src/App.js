import React from 'react';
import './App.css';
import { Cart } from './components/cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Cart} />
          <Route path="/**" exact component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
