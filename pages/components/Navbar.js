import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div><h1>Navbar</h1>
    <Link legacyBehavior href="/"><a>Home</a></Link>
    <br></br>
    <Link legacyBehavior href="/about"><a>About</a></Link>
    <br></br>
    <Link legacyBehavior href="/contact"><a>Contact</a></Link>
    <br></br>   
    <Link legacyBehavior href="/sample"><a>User List</a></Link>
    <br></br>
    </div>
  )
}

export default Navbar