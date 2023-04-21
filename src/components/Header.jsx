import { Link, NavLink } from "react-router-dom"
import logo from '../img/logo.png'

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={logo}/>
        </Link>
        <ul className="nav-links">
          <NavLink>Home</NavLink>
          <NavLink>Profile</NavLink>
          <NavLink>Logout</NavLink>
        </ul>
      </nav>
    </header>
  )
}