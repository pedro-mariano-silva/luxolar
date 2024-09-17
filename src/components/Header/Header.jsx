import {Link} from 'react-router-dom'

//ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

function Header (){
    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"> <img src={Logo}/> </Link>
                    <nav>
                    <ul className='d-flex'>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/projects'>Projects</Link>
                            <Link to='/contact'>Contact</Link>

                        </li>
                         
                    </ul>
                </nav>
                </div>
               
            </div>
        </header>
    )

}

export default Header