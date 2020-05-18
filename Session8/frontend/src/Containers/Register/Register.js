import React, { Component } from 'react';
import axios from 'axios';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../Register/Register.module.css';

class Register extends Component {
  state = {
    error: false,
    result: true,
  };
  handleRegister = () => {
    let username = document.getElementById('name').value;
    let password = document.getElementById('pwd').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('emailId').value;
    let userOject = {
      username: username,
      password: password,
      age: age,
      email: email,
    };
    axios
      .post('http://localhost:1234/signup', userOject)
      .then((response) => {
        alert(response.data);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ ...this.state, error: true, result: false });
      });
  };
  render() {
    let error;
    let data;
    if (this.state.error === true) {
      error = <ErrorHandling />;
    }
    if (this.state.result === true) {
      data = (<div>
        <Form  >
        <Form.Row>
  <Form.Group >
    <Form.Label>User name</Form.Label>
    <Form.Control
      id='name'
      required
      type='text'
      placeholder='username'
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>
</Form.Row>
<Form.Row>
  <Form.Group >
    <Form.Label>age</Form.Label>
    <Form.Control
      id='age'
      required
      type='number'
      placeholder='age'
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>
</Form.Row>
<Form.Row>
  <Form.Group >
    <Form.Label>email</Form.Label>
    <Form.Control
      id='emailId'
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
      id='pwd'
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
  this.handleRegister();
}}>
Register
</Button>
    </div>)

    }
    return (
      <div className={styles.form}>
        {error}
        {data}
      </div>
    );
  }
}

export default Register;
