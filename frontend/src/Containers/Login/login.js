import React, { Component } from 'react';
import { Button, Form, Container,
    Col, Row,Card } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import '../../Components/Styles/styles.css';
import './login.css';

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
            <Container>
                <NavBarEntry />
                <div className="section-margin" />
                <Col md={{ span: 5, offset: 4 }}>
                <Card>
                <Card.Title className="BodyFontC title">Sign In</Card.Title>
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
                        <Form.Label id="form-label">Email</Form.Label>
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
                        
                    <Form.Control.Feedback type="invalid" id="form-label">
                        {errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label id="form-label">Password</Form.Label>
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
                        <Form.Control.Feedback type="invalid" id="form-label">
                        {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Button variant="primary" type="submit" className="button">
                            Sign In
                        </Button>
                    </Row>
                </Form>
                )}
                </Formik>  
                <div className="divider">OR</div>
                <div className="login-button-wrapper">
                    <Button id="external-login-btn">Facebook</Button>
                    <Button id="external-login-btn">Google</Button>
                </div>
                </Card>
                <p id="sign-up-text"> Don't have an account? <s/>
                    <Link to={{
                        pathname:"/register",
                        state: { populated: false } 
                        }} 
                        id="sign-up-link"
                    >
                        SIGN UP
                    </Link>
                    </p>
                </Col>
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