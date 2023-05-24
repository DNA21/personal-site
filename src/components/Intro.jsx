import React from 'react';
import { Container } from 'reactstrap';
import Typewriter from 'typewriter-effect'

const Intro = () => {
    return (
        <Container className='d-flex overflow-hidden' style={{ height: 100 + 'vh'}} id='intro'>
            <div className='d-flex align-items-center position-absolute top-35' >
                <Typewriter
                    options={{
                        cursor: '<span style="color: #BEDCFE; font-size: 7rem; font-family: Ubuntu, sans-serif; font-style: italic">|</span>',
                        strings: [`<span style="color: #BEDCFE; font-size: 7rem; font-family: Ubuntu, sans-serif; font-style: italic">Daniel <br> J Galuardi</span>`, '<span style="color: #BEDCFE; font-size: 7rem; font-family: Ubuntu, sans-serif; font-style: italic">Full-Stack <br> Developer</span>'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </Container>
    )
}

export default Intro
