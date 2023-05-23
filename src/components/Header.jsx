import React, { useState } from 'react';
import {Link} from 'react-scroll';
import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Collapse,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bground-gradient position-absolute w-100 position-fixed' style={{ zIndex: 1}}>
            <Container>
                <Navbar expand='md'>
                    <NavbarBrand>
                        <Link to="intro" className='nav-brand' spy={true} smooth={true} offset={-70} duration={500}>
                            <h1 className='secondary-text'>djg.</h1>
                        </Link>
                    </NavbarBrand>

                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                    <Collapse navbar isOpen={menuOpen}>
                        <Nav className='ms-auto d-flex d-flex-row' navbar>
                            <NavItem className='px-2'>
                                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={()=> setMenuOpen(false)} className='nav-link secondary-text'>
                                    About
                                </Link>
                            </NavItem>
                            <NavItem className='px-2'>
                                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={()=> setMenuOpen(false)}className='nav-link secondary-text'>
                                    Projects
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={()=> setMenuOpen(false)}className='nav-link secondary-text'>
                                    Contact
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>

                    {/* <Offcanvas className='mw-75' isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)}>
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
                        <h1 className='secondary-text'>djg.</h1>
                    </NavbarBrand>
                    <Button className='secondary-text button-color'>Contact Me</Button> */}
                </Navbar>
            </Container>
        </div>
    )
}

export default Header
