import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Left from './components/Left';
import Right from './components/Right';

function App() {
const[city,setcity]=useState('delhi');

const[weatherapi,setweatherapi]=useState([]);

useEffect(()=>{
const url = `https://api.weatherapi.com/v1/current.json?key=1074a04bbe7448b3a0244709240703&q=${city}&aqi=no`;

 axios.get(url)
 .then((response)=>{
  setweatherapi(response.data);
  console.log(response.data)})
 .catch((error)=> console.log("Api error"));
},[city]);

  return (
    <div className="App">

<div className="app-left">

  <Left
    setcity={setcity}
    weatherapi={weatherapi}
  />


</div>

<div className="app-right">
<Right
   setcity={setcity}
   weatherapi={weatherapi}
/>
</div>

    </div>
  );
}

export default App;
