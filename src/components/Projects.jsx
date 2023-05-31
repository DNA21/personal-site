import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Badge
} from 'reactstrap';
import noVig from '../app/assets/img/no-vig2.png'
import cryptoGecko from '../app/assets/img/cryptoGecko.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Projects = () => {
    return (
        <Container id='projects' className='py-5'>
            <Row className='my-4 d-flex'>
                <Col>
                    <h2 className='text-primary'>PROJECTS</h2>
                </Col>
                <Col>
                    <div className='d-flex align-items-center justify-content-end'>
                        <AiOutlineGithub size={48} className='text-middle hover-effect' />
                        {/* <Button size='lg' className='px-3 button-color text-secondary'>GITHUB</Button> */}
                    </div>
                </Col>
            </Row>

            {/* Displays for large screens and up */}
            <div className='d-none d-lg-block'>
                <Card className='text-center d-flex flex-row w-75 mx-auto bg-dark border-0 text-primary'>
                    <CardBody className='d-flex flex-column justify-content-evenly'>
                        <CardTitle>
                            <h3>No-Vig Odds</h3>
                        </CardTitle>
                        <CardText>
                            No-Vig Odds is an innovative betting app that provides users with real-time moneyline odds.  It goes a step further by calculating and removing the sportsbook's vigorish, allowing users to access unbiased odds that accurately reflect the chances of a team's victory or defeat.
                        </CardText>
                        <div className='my-3 d-flex justify-content-evenly'>
                            <Badge pill>React</Badge>
                            <Badge pill>Bootstrap</Badge>
                            <Badge pill>API</Badge>
                            <Badge pill>Firebase</Badge>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a href='https://github.com/DNA21/no-vig-odds' target='_blank' rel='noreferrer'><span className='text-primary'>Code <AiOutlineGithub /></span></a>
                            <a href='https://no-vig-odds.web.app/' target='_blank' rel='noreferrer'><span className='text-primary'>Live Demo <RxOpenInNewWindow /></span></a>
                        </div>
                    </CardBody>
                    <img src={noVig} className='project-img' alt='No Vig Screenshot' style={{ borderRadius: 2 + 'rem'}}/>
                </Card>
            </div>

            <div className='d-none d-lg-block pb-3'>
                <Card className='text-center d-flex flex-row w-75 mx-auto bg-dark border-0 text-primary'>
                    <img src={cryptoGecko} className='project-img' alt='CryptoGecko screenshot' style={{ borderRadius: 2 + 'rem'}}/>
                    <CardBody className='d-flex flex-column justify-content-evenly'>
                        <CardTitle>
                            <h3>CryptoGecko</h3>
                        </CardTitle>
                        <CardText>
                            CryptoGecko is a CoinGecko clone, enabling users to sign in and create a watchlist of their favorite coins. Upon clicking a coin, it brings the user to a page with historical price data and coin descriptions, enhancing their overall experience.
                        </CardText>
                        <div className='my-3 d-flex justify-content-evenly'>
                            <Badge pill>React</Badge>
                            <Badge pill>Bootstrap</Badge>
                            <Badge pill>API</Badge>
                            <Badge pill>Firebase</Badge>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a href='https://github.com/DNA21/coin-tracker' target='_blank' rel='noreferrer'><span className='text-primary'>Code <AiOutlineGithub /></span></a>
                            <a href='https://cryptogecko-dg.web.app/' target='_blank' rel='noreferrer'><span className='text-primary'>Live Demo <RxOpenInNewWindow /></span></a>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Displays for screens xs up to large */}
            <div className='d-block d-lg-none'>
                <Card className='text-center w-75 mx-auto bg-dark text-primary border-0'>
                    <CardBody className='d-flex flex-column justify-content-evenly'>
                        <CardTitle>
                            <h3>No-Vig Odds</h3>
                        </CardTitle>
                        <CardText>
                            No-Vig Odds is an innovative betting app that provides users with real-time moneyline odds.  It goes a step further by calculating and removing the sportsbook's vigorish, allowing users to access unbiased odds that accurately reflect the chances of a team's victory or defeat.
                        </CardText>
                        <div className='my-3 d-flex justify-content-evenly'>
                            <Badge pill>React</Badge>
                            <Badge pill>Bootstrap</Badge>
                            <Badge pill>API</Badge>
                            <Badge pill>Firebase</Badge>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a href='https://github.com/DNA21/no-vig-odds' target='_blank' rel='noreferrer'><span className='text-primary'>Code <AiOutlineGithub /></span></a>
                            <a href='https://no-vig-odds.web.app/' target='_blank' rel='noreferrer'><span className='text-primary'>Live Demo <RxOpenInNewWindow /></span></a>
                        </div>
                    </CardBody>
                    <img src={noVig} alt='No Vig Screenshot' style={{ borderRadius: 2 + 'rem'}}/>
                </Card>
            </div>

            <div className='d-block d-lg-none pb-3'>
                <Card className='text-center w-75 mx-auto bg-dark text-primary border-0'>
                    <CardBody className='d-flex flex-column justify-content-evenly'>
                        <CardTitle>
                            <h3>CryptoGecko</h3>
                        </CardTitle>
                        <CardText>
                            CryptoGecko is a CoinGecko clone, enabling users to sign in and create a watchlist of their favorite coins. Upon clicking a coin, it brings the user to a page with historical price data and coin descriptions, enhancing their overall experience.
                        </CardText>
                        <div className='my-3 d-flex justify-content-evenly'>
                            <Badge pill>React</Badge>
                            <Badge pill>Bootstrap</Badge>
                            <Badge pill>API</Badge>
                            <Badge pill>Firebase</Badge>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a href='https://github.com/DNA21/coin-tracker' target='_blank' rel='noreferrer'><span className='text-primary'>Code <AiOutlineGithub /></span></a>
                            <a href='https://cryptogecko-dg.web.app/' target='_blank' rel='noreferrer'><span className='text-primary'>Live Demo <RxOpenInNewWindow /></span></a>
                        </div>
                    </CardBody>
                    <img src={cryptoGecko} alt='CryptoGecko screenshot' style={{ borderRadius: 2 + 'rem'}}/>
                </Card>
            </div>
        </Container>
    )
}

export default Projects
