import React, { Component } from 'react';
import { Button, Form, Container,
    Col, Row, Nav } from 'react-bootstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object({
    password : yup.string()
    .matches(/^[a-zA-Z]/, "password must start with an alphabet letter")
    .matches(/^[0-9a-zA-Z!]+$/, "password must contain only alphanumeric letters and !")
    .required("Required"),
    email: yup.string()
    .email("Must be a valid email address")
    .max(30, "Email must be less than 30 characters")
    .required("Required")
  });

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          submitted: false,
          changed: false,
          loginerror: null
        };
        this.handleLogin = this.handleLogin.bind(this)
      }
    
      handleLogin(values){
        this.setState({submitted: true, changed: false});
        const { email, password } = values;
        setTimeout(() => {this.props.login(email, password)}, 500);
      }


    render() {
        return(
            <Container className="main border rounded mid p-3">
                <p className="sign">Sign In</p>
                <Formik
                    initialValues = {{email: '', password: ''}}
                    onSubmit={values => {
                    this.handleLogin(values)
                    }}
                    validationSchema={schema}
                >
                    {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    values,
                    handleBlur,
                    }) => (
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId = "Email">
                        <Form.Control 
                        type="email"
                        className="inputbox" 
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={ (e) => {
                            handleChange(e);
                            this.setState({changed: true});
                        }}
                        onBlur={handleBlur}
                        isInvalid={(touched.email && errors.email)}
                        />
                        
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Control 
                        type="password"
                        placeholder="Password" 
                        className="inputbox" 
                        name="password"
                        value={values.password}
                        onChange={ (e) => {
                            handleChange(e);
                            this.setState({changed: true});
                        }}
                        onBlur={handleBlur}
                        isInvalid={(touched.password && errors.password)}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                    <Col xs={6}>
                        <Button variant="primary" type="submit" className="button">
                            Submit
                        </Button>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end">
                        <Link to="/Register">
                        <Button className="button">
                            Register
                        </Button>
                        </Link>
                    </Col>
                    </Row>
                </Form>
                )}
                </Formik>  
 
            </Container>
        )
    }
}

export default Login;

/*
                    { error != null && !this.state.changed 
                    ? <h3 className="Words" style={{fontSize: '17.5px', color: 'red', marginTop: '5%'}}>{error.message}</h3> 
                    : null }   

*/