import './App.css'
// import Header from './components/Header/Header';
// import Container from './components/Container/Container';
// import Footer from './components/Footer/Footer';
import { Container } from './components/index'
import { Header, Hero, MostPopular, Footer} from './sections/index';

const App = () => {
    return (
        <>
            <Header />
            <Container> 
                <Hero />
                <MostPopular />
            </Container>
            <Footer />
        </>
        
    )
}
export default App;