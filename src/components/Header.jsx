import React, { useState } from 'react'
import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody
} from 'reactstrap'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='shadow position-absolute w-100'>
            <Container>
                <Navbar>
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                    <Offcanvas isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)}>
                        <OffcanvasHeader className='row'>
                            <div className='row'>
                            <h4 className='col-10'>DJG.</h4>
                            <button type='button' className='btn-close col my-0' onClick={() => setMenuOpen(!menuOpen)} />
                            </div>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Projects
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </OffcanvasBody>
                    </Offcanvas>
                    <NavbarBrand>
                        <h1>djg.</h1>
                    </NavbarBrand>
                    <Button>Contact Me</Button>
                </Navbar>
            </Container>
        </div>
    )
}

export default Header
