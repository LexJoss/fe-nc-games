import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Nav from './components/nav'
import {useState, useEffect} from 'react'
import {getCategories, getReviews} from './utils/api' 
import axios from 'axios'
import react from 'react'
import Display from './components/display'
import {Singlereview} from './components/singleReview'
import {Home} from './components/Home'


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
        <Routes>
            <Route path ={`/`} element={<Home />} />
            <Route path={`reviews/:review_id`} element={<Singlereview />} />
            <Route path={`reviews/`} element={<Display />} />
            </Routes>
      </section> 
    </div>
   
    </BrowserRouter>
  );
}

export default App;