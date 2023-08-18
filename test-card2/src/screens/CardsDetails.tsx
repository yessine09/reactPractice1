import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

const CardsDetails = () => {
    const params = useParams();
    const obj: any = useOutletContext();
  return (
    <>
      <div>CardsDetails {params.id}</div>
      <p>shared data: {obj.msg}</p>
    </>
  )
}

export default CardsDetails