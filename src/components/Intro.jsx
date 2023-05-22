import React from 'react'
import { Container } from 'reactstrap'

const Intro = () => {
    return (
        <Container className='d-flex min-vh-100'>
            <div className='d-flex flex-column justify-content-center'>
                <h1 className='mb-0 main-text' style={{ fontSize: 8 + 'rem', fontFamily: 'Ubuntu, sans-serif', fontStyle: 'italic'}}>Daniel</h1>
                <h1 className='main-text' style={{ fontSize: 8 + 'rem', fontFamily: 'Ubuntu, sans-serif', fontStyle: 'italic'}}>J Galuardi</h1>
                <p className='main-text'>Full-Stack Software Developer</p>
            </div>
        </Container>
    )
}

export default Intro
