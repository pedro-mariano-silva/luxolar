import{useState} from 'react'
import {Link} from 'react-router-dom'

//ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

//COMPONENTS
import Button from '../Button/Button'

function Header (){
    const[isOpen, setIsOpen]=useState(false)
    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"> <img src={Logo}/> </Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={()=>setIsOpen(!isOpen)}>Menu</Button>              

                    </div>
                    <nav className={`${isOpen ? 'open' : '' }`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={()=>setIsOpen(!isOpen)}>X</Button>
                    <ul className="d-flex">
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