import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import Checkout from './pages/Checkout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {

  
  return (
    <>
      <Provider store={store}>
        <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer />
        <Cart />
        </Router>

      </Provider>
    </>
  );
};

export default App;

