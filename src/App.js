import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Nav from './components/nav'
import {useState, useEffect} from 'react'
import {getCategories, getReviews} from './utils/api' 
import axios from 'axios'
import react from 'react'
import Display from './components/display'


function App() {

  const [cats, setCat] = useState("")

 

 


  return (
    <BrowserRouter>
    <div className="App">
      <section className="App-header">
        <Header />
        </section>
        <section className="content">
          <Nav />
      </section>
      <section className="display">
        <Display />
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;