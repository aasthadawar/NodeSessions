import React, { Component } from 'react';
import axios from '../../customaxios';
import styles from './Login.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  onSubmit = (event) => {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let userObject = { username: user, password: pass };
    event.preventDefault();
    axios
      .post('http://localhost:2468/employee/login', userObject)
      .then((res) => {
        let tok = res.data;
        console.log('token', tok);
        if (tok) {
          console.log('login succefful');
          localStorage.setItem('token', tok);
          Object.assign(axios.defaults, {
            headers: { 'x-access-token': localStorage.getItem('token') },
          });
          this.props.history.push('/dashboard');
        } else {
          alert('wrong creadentials');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error logging in please try again with right credentials');
      });
  };
  render() {
    return (
      <div className={styles.form}>
      <Form  >
        <Form.Row>
          <Form.Group controlId='validationCustom01'>
            <Form.Label>User name</Form.Label>
            <Form.Control
              id='username'
              required
              type='text'
              placeholder='User name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId='validationCustom02'>
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
          this.onSubmit(window.event);
        }}>
        Submit form
      </Button>
    </div>
    );
  }
}

export default Login;
