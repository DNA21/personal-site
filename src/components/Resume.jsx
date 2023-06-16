import React from 'react'
import { Button, Container } from 'reactstrap'
import resume from '../app/resume/Daniel-Galuardi-Resume.pdf'

const Resume = () => {

    const onButtonClick = () => {
        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Daniel-Galuardi-Resume.pdf';
                document.body.appendChild(alink);
                alink.click();
            })
        })
    }

    return (
        <div className='bground-gradient py-3' id='about'>
            <Container>
                <div className='row'>
                    <div className='col-12 col-sm-8 my-3'>
                        <h3 className='text-secondary'>
                            I'm a <strong>passionate developer</strong> who constantly seeks out new coding perspectives, driven by a strong desire to <strong>learn</strong>.
                        </h3>
                    </div>
                    <div className='col mb-3 mb-sm-0 d-flex align-items-center justify-content-center justify-content-sm-end'>
                        <Button onClick={onButtonClick} size='lg' className='bg-middle text-secondary'>Resume</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Resume
