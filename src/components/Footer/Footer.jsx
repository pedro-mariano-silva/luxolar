import {Link} from 'react-router-dom'

//ASSETS
import './Footer.css'
import BrasilIcon from '../../assets/brasil-icon.svg'
import EuaIcon from '../../assets/eua-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import Logo from '../../assets/logo.svg'


function Footer (){
    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-'-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="d-flex social-links">

                        <a href="#" target="_blank">
                        <img src={FacebookIcon}/>
                         </a>

                         <a href="#" target="_blank">
                         <img src={TwitterIcon}/>
                        </a>

                        <a href="#" target="_blank">
                        <img src={LinkedinIcon}/>
                        </a>

                         <a href="#" target="_blank">
                        <img src={InstagramIcon}/>
                        </a>
                        
                        </div>
                       
                        </div>             
                        <div className="d-flex">
                            <div className="footer-col">
                                <h3>Pages</h3>
                           
                            <ul>                        
                           <li><Link to='/'>Home</Link></li> 
                            <li><Link to='/about'>About</Link></li>
                           <li><Link to='/projects'>Projects</Link></li> 
                           <li><Link to='/contact'>Contact</Link></li>
                                                
                    </ul>
                        </div>   
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                      
                    </div>
                 </div>
                 <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={BrasilIcon} height="29px"/>
                        <img src={EuaIcon}height="29px"/>

                    </div>
                 </div>
                 
            </div>    
        </footer>
    )

}

export default Footer