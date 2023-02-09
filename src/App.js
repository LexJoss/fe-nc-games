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
import DisplayCats from './components/displayCats';


function App() {

  const [cats, setCat] = useState("")


  const defineCat  = (target) => {
    setCat(target)
  }
 

 


  return (
    <BrowserRouter>
    <div className="App">
      <section className="App-header">
        <Header />
        </section>
        <section className="content">
          <Nav defineCat={defineCat} />
      </section>
       <section className="display">
        <Routes>
            <Route path ={`/`} element={<Home />} />
            <Route path={`reviews/:review_id`} element={<Singlereview />} />
            <Route path={`reviews/`} element={<Display />} />
            <Route path={`reviews/strategy`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/hidden-roles`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/dexterity`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/push-your-luck`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/roll-and-write`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/deck-building`} element={<DisplayCats cats={cats}/>} />
            <Route path={`reviews/engine-building`} element={<DisplayCats cats={cats}/>} />
            </Routes>
      </section> 
    </div>
   
    </BrowserRouter>
  );
}

export default App;