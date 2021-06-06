import React, { useEffect, useState } from "react"
import Recpie from "./Recpie";
import "./App.css";

const App=()=>{
const APP_ID= "02131aa0";
const APP_KEY= "0d471a8196a4b6041109484121b2e203";
const[recipie,setRecipie]=useState([]);
const[search,setSearch]=useState('');
const[query,setQuery]=useState('chicken');


 

useEffect(()=>{
  getRecipie();
}, [query]);

const getRecipie=async () =>{
  const response=await fetch( 
    `https://api.edamam.com/search?q=${query} &app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data= await response.json();
  setRecipie(data.hits);
}

const updatesearch= e =>{
  setSearch(e.target.value)
}

const getSearch=e=>{
  e.preventDefault();
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App"> 
    <form onSubmit={getSearch}className="frm">
      <input className="inpt" type="text" value={search} onChange={updatesearch}/>
      <button className="btn" type="submit">serach</button>
    </form>
    <div className="recipes">
    {recipie.map(recipe=>(
      <Recpie
      key={recipe.recipe.label} 
      title={recipe.recipe.label} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
    ))}
    </div>
    </div>
  );
};
<recipe/>

export default App;
