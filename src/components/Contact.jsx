import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Container, Label, Col, FormGroup, Row } from 'reactstrap'

const Contact = () => {
    return (
        <div className='bground-gradient text-secondary pt-3' id='contact'>
            <Container>
                <div className='d-flex flex-column align-items-center'>
                    <h3>
                        Send me a message!
                    </h3>
                    <p>Got a question, job opportunity, or just want to say hi? </p>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}
                >
                    <Form>
                        <Row>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor='name'>
                                        Name
                                    </Label>
                                    <Field className='form-control' name='name' placeholder='Name' />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor='email'>
                                        Email
                                    </Label>
                                    <Field className='form-control' name='email' placeholder='Email' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{size: 8, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor='message'>
                                        Message
                                    </Label>
                                    <Field className='form-control' name='message' as='textarea' rows='6' placeholder='Message' />
                                </FormGroup>
                            </Col>
                        </Row>








                        {/* <FormGroup>
                            <Label htmlFor='name' md='2'>
                                Name
                            </Label>
                            <Col md='4'>
                                <Field className='form-control' name='name' placeholder='Name' />
                            </Col>
                            <Label htmlFor='email' md='2'>
                                Email
                            </Label>
                            <Col md='4'>
                                <Field className='form-control' name='email' placeholder='Email' />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <div className='d-flex justify-content-center'>
                                <div className='row'>
                                    <Label htmlFor='message'>
                                        Message
                                    </Label>
                                </div>
                                <div className='row'>
                                    <Field className='form-control' col='6' as='textarea' rows='6' name='message' placeholder='Message' />
                                </div>
                            </div>
                        </FormGroup> */}
                    </Form>
                </Formik>
            </Container>
        </div>
    )
}

export default Contact
