import React from 'react'
import { Container } from 'reactstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bground-gradient text-secondary'>
            <Container className='d-flex flex-column align-items-center py-4'>
                <h4>djg.</h4>
                <div>
                    <a className='text-secondary' href='https://github.com/DNA21'><AiFillGithub size={24} className='mx-3' /></a>
                    <a className='text-secondary' href='https://www.linkedin.com/in/daniel-galuardi-23a66176/'><AiFillLinkedin size={24} className='mx-3' /></a>
                </div>
            </Container>
        </div>
    )
}

export default Footer
