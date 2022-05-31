import './App.css';
import Header from '../src/components/Header';
import Home from  '../src/components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
