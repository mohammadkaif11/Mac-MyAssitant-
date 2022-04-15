import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
     <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Mac</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/help">help</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar