import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
import Typewriter from 'typewriter-effect'
import desktopImage from '../app/assets/img/hero1920.png'
import largeImage from '../app/assets/img/hero3200.png'
import mobileImage from '../app/assets/img/hero650.png'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return windowWidth;
}

const Intro = () => {

    //const imageUrl = useWindowWidth() >= 650 ? desktopImage: mobileImage;
    let width = useWindowWidth();
    let imageUrl = '';

    switch (true) {
        case (width >= 1920):
            imageUrl = largeImage;
            break;
        case (width >= 650):
            imageUrl = desktopImage;
            break;
        case (width >= 0):
            imageUrl = mobileImage;
            break;
        default:
            imageUrl = desktopImage;
    }


    return (
        <div style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <Container className='d-flex' style={{ height: 100 + 'vh'}} id='intro'>
                <div className='d-flex align-items-center position-absolute top-35' >
                    <Typewriter
                        options={{
                            cursor: '<span style="color: #BEDCFE; font-size: 5rem; font-family: Ubuntu, sans-serif; font-style: italic">|</span>',
                            strings: [`<span style="color: #BEDCFE; font-size: 5rem; font-family: Ubuntu, sans-serif; font-style: italic">Daniel<br> J Galuardi</span>`, '<span style="color: #BEDCFE; font-size: 5rem; font-family: Ubuntu, sans-serif; font-style: italic">Full-Stack<br> Developer</span>'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Intro
