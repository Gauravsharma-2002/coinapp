import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
    <Link to="/">HOME</Link>
    <Link to="/exchanges">EXCHANGES</Link>
    <Link to="/conins">COINS</Link>
    </nav>
  )
}

export default Header