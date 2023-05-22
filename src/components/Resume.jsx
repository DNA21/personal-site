import React from 'react'
import { Button, Container } from 'reactstrap'

const Resume = () => {
    return (
        <div className='resume-gradient'>
            <Container>
                <div className='row'>
                    <div className='col-12 col-sm-8 my-3'>
                        <h3>
                            I'm a <strong>passionate developer</strong> who constantly seeks out new coding perspectives, driven by a strong desire to <strong>learn</strong>.
                        </h3>
                    </div>
                    <div className='col mb-3 mb-sm-0 d-flex align-items-center justify-content-center'>
                        <Button>Resume</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Resume
