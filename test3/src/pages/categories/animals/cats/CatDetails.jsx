import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CatDetails = (props) => {
  const params = useParams();

  const [ myData, setData ] = useState();

  useEffect(() => {
    fetch("http://localhost:3030/cats")
      .then(res=> res.json())
      .then(data=>{
        setData(data[params.id])
        console.log('cat details', myData);
      })
      .catch(err => alert("Error: ",err))

  }, [])
  return (
    <div>
      <h2> Cat {parseInt(params.id) + 1} details</h2>
      <img src={myData?.url} alt="" />
      Name: {myData?.name} <br/>
      type: {myData?.type} <br/>
      age: {myData?.age} <br/>
    </div>
  )
}

export default CatDetails
