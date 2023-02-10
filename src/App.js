
import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Nav from './components/nav'
import {useState} from 'react'


import {Singlereview} from './components/singleReview'
import {Home} from './components/Home'
import DisplayCats from './components/displayCats';


function App() {

  const [cats, setCat] = useState(null)
  const [sortby, setSortby] = useState(null)
  const [order, setOrder] = useState(null)

  
  const defineCat  = (target) => {
    setCat(target)
  }

  const defineSort = (target) => {
    setSortby(target)
  }

  const defineOrder =(target) => {
    setOrder(target)
  }
 

 


  return (
    <BrowserRouter>
    <div className="App">
        <section className="content"> 
          <Nav defineCat={defineCat} defineSort={defineSort} defineOrder={defineOrder}/>
      </section>
       <section className="display">
        <Routes>
            <Route path ={`/`} element={<DisplayCats  sortby={sortby} order={order}/>} />
            <Route path={`reviews/:review_id`} element={<Singlereview />} />
            <Route path={`reviews/`} element={<DisplayCats  sortby={sortby} order={order}/>} />
            <Route path={`reviews/strategy`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/hidden-roles`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/dexterity`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/push-your-luck`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/roll-and-write`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/deck-building`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            <Route path={`reviews/engine-building`} element={<DisplayCats cats={cats} sortby={sortby} order={order}/>} />
            </Routes>
      </section> 
    </div>
   
    </BrowserRouter>
  );
}

export default App;