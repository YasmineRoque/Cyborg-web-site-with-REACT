import './App.css'
// import Header from './components/Header/Header';
// import Container from './components/Container/Container';
// import Footer from './components/Footer/Footer';
import {Header, Container,  Hero, Footer} from './components/index'

const App = () => {
    return (
        <>
            <Header />
            <Container> 
                <Hero />
            </Container>
            <Footer />
        </>
        
    )
}
export default App;