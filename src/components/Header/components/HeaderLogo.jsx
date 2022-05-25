import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/beer-logo.svg'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        <img
          src={Logo}
          alt="The Beer Collector Logo"
        />
      </NavLink>
    </div>
  )
}

export default HeaderLogo