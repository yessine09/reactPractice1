import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cats = () => {
  const outletContext = useOutletContext();
  return (
    <div>
      Cats page
      this page takes a secret key : {outletContext?.secretKey}
    </div>
  )
}

export default Cats
