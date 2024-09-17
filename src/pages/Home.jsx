import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Home(){
    return(
        <>
            <Header/>
            <Button buttonStyle="primary" arrow>Olá</Button>
            <Banner title="Home" image="about.svg"/>
            <Footer/>
            
        
        </>
    )

}

export default Home