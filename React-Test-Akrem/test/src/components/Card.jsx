import React, { useEffect, useState } from 'react'

export default function Card() {
    const [ name, setName ] = useState('');
    const [ city, setCity ] = useState('Tunis');
    const [ weather, setweather ] = useState('');
    const [ description, setDescription ] = useState("");
    
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=7c94272a77237b328cb00c773472d566")
            .then(response => response.json()) // response.json()
            .then(data => {
                setName(data.name);
                console.log(data);
                setweather(data.weather[0].main);
                setDescription(data.weather[0].description)
                })
            .catch(e=> console.log("e: ",e));

    }, [city])
    // const fn = (e, x) => {setName(e.target.value); console.log("x: ",x)}
  return (
    <>
        <h1>Card</h1>
        <p>{name}</p>
        <p>{city}</p>
        <p>{description}</p>
        <input type="text" onChange={ (e) => setCity(e.target.value) } />
        <button>validate</button>
    </>
  )
}
