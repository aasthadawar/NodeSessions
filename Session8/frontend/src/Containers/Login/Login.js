import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../CustomAxios';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';
import styles from '../Login/Login.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component{
    state = {
        error: false,
        result: true
    }
    handleGmail=()=>{
      axios.get('http://localhost:1234/auth')
      .then(res=> console.log(res));
    }
    handleLogin = () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let userObject = {email: email, password: password};
       axios.post('http://localhost:1234/login', userObject)
       .then(response => {
           //console.log('response ::::::::::::::::::::::::::',response.data.status,response.data.data.token);
           if(response.data.status === true){
            localStorage.setItem('token', response.data.data.token);
            Object.assign(axios.defaults, {
              headers: { 'x-access-token': localStorage.getItem('token') },
            });
               alert('login successfully');
               this.props.history.push('/dashboard');
           }
          /* else{
               alert(response.data);
               this.props.history.push('/');
           }*/
       })
       .catch(error => {
           this.setState({...this.state,error:true,result:false})
       })
    }
    render(){
        let error;
        let data;
        if(this.state.error === true){
            error = <ErrorHandling/>
        }
        if(this.state.result === true){
            data = (<div>
                <Form >
        <Form.Row>
          <Form.Group >
            <Form.Label>email</Form.Label>
            <Form.Control
              id='email'
              required
              type='email'
              placeholder='email id'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control
              id='password'
              required
              type='password'
              placeholder='Password'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </Form>
      <Button
        type='submit'
        onClick={() => {
          this.handleLogin();
        }}>
        Login
      </Button>
      <NavLink to="/register">Register</NavLink>
      <a href="http://localhost:1234/auth">Login with gmail</a>
            </div>)
        }
        return(
            <div className={styles.form}>
                {error}
                {data}
            </div>
        );
    }
}

export default Login;