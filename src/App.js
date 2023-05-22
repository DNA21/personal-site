import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return(
        <>
            <Header />
            <Intro />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App;
