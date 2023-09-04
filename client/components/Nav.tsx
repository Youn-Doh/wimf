import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="menu-container">
      <NavLink className="link" key="Home" to={`/`}>
        <li>Home</li>
      </NavLink>
      <NavLink className="link" key="Fridge" to={`/fridge`}>
        <li>Fridge</li>
      </NavLink>
      <NavLink className="link" key="Freezer" to={`/freezer`}>
        <li>Freezer</li>
      </NavLink>
      <NavLink className="link" key="Pantry" to={`/pantry`}>
        <li>Pantry</li>
      </NavLink>
      <NavLink key="Recipes" to={`/recipes`}>
        <li>Recipes</li>
      </NavLink>
    </div>
  )
}

export default Nav
