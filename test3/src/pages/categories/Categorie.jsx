import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Categorie = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/categories/animals"> animals </Link>
          </li>
          <li>
            <Link to="/categories/furnitures"> furnitures </Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ secretKey: "#665bz5m" }} />
    </>
  )
}

export default Categorie
