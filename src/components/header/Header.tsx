import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h2>Header</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
    </div>
  )
}

export default Header