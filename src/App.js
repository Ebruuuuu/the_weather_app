import React,{useState} from 'react';
import SearchResults from './SearchResults';
import CityList from './CityList';

import './dist/css/App.css'

function App() {
  const [enteredCity,setEnteredCity]=useState('')

  const cityChangeHandler=(event)=>{
    event.preventDefault()
    setEnteredCity(event.target.value)
    console.log(enteredCity)
  }
  const fetchResultsHandler=()=>{

  }

  
  return (
   <div>
       <section>
     <div className='search'>
                 <input onChange={cityChangeHandler} type="text"  id="input" placeholder="Enter a city name..." autoComplete="on"></input>
                 <button onClick={fetchResultsHandler} type="submit" id="button">Search</button>
      </div>
     </section>
     <section>
       <SearchResults></SearchResults>
     </section>
   
     <section>
       <CityList></CityList>
     </section>
    
   </div>
    
  );
}

export default App;
