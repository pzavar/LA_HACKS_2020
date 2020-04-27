import React, { Component } from 'react';
import { Button, Form, Container,
    Col, Row,Card } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import {connect} from 'react-redux';
import { authActions } from '../../Redux/Actions/AuthActions';

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
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
      }
    
      handleLogin(values){
        this.setState({submitted: true, changed: false});
        const { email, password } = values;

        this.props.login("LOCAL", email, password);

      }

      handleGoogleLogin(e){
          e.preventDefault();
          alert("Google Login")
          this.setState({submitted: true, changed: false});
          this.props.login("GOOGLE");
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
                        <Form.Label className="login-form-label">Email</Form.Label>
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
                        
                    <Form.Control.Feedback type="invalid" className="login-form-label">
                        {errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label className="login-form-label">Password</Form.Label>
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
                        <Form.Control.Feedback type="invalid" className="login-form-label">
                        {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row className="login-button-wrapper">
                        <Button variant="primary" type="submit" className="login-button">
                            Sign In
                        </Button>
                    </Row>
                </Form>
                )}
                </Formik>  
                <div className="divider">OR</div>
                <div className="login-button-wrapper">
                    <Button id="external-login-btn" onClick={this.handleGoogleLogin}>Google</Button>
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

function mapStateToProps (state) {
    return(state)
}

const actionCreators = {
    login: authActions.login,
}

export default connect(mapStateToProps, actionCreators)(Login);
