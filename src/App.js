import React from 'react';
import './App.css';
import { Cart } from './components/cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Cart} />
          <Route path="/**" exact component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// 404 Error page 
const  ErrorPage = () => (<div><h1>Oups this resource does not exist! Please use the navigation bar</h1></div>)

export default App;
