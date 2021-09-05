// import React from "react";
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedInLinks"

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="brand-logo">NewPlan</Link>
        {/* <SignedInLinks />
        <SignedOutLinks /> */}
      </div>
    </nav>
  )
}

export default Navbar;
