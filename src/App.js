import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    return(
        <>
            <Header />
            <Intro />
            <Resume />
            <Footer />
        </>
    )
}

export default App;
