import React, { useState, useEffect, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../User/AddUser.module.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const AddUser = (props) => {

  const submit = () => {
   
    let first = document.getElementById('firstname').value;
    let last = document.getElementById('lastname').value;
    let branchname = document.getElementById('branchname').value;
    if(first!==''&& last!=='' && branchname!==''){
      let userObject = { firstname: first, lastname: last, branch: branchname };
    axios
      .post('http://localhost:9012/users/', userObject)
      .then((response) => console.log(response));

    props.history.push('/');
    }
    else{
      alert('fill the correct details')
    }
  };

  return (
    <div className={styles.form}>
      <Form  >
        <Form.Row>
          <Form.Group controlId='validationCustom01'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              id='firstname'
              required
              type='text'
              placeholder='First name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId='validationCustom02'>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              id='lastname'
              required
              type='text'
              placeholder='Last name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId='validationCustom03'>
            <Form.Label>Branch name</Form.Label>
            <Form.Control
              id='branchname'
              required
              type='text'
              placeholder='Branch name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button
        type='submit'
        onClick={() => {
          submit();
        }}>
        Submit form
      </Button>
      </Form>
    </div>
  );
};

export default withRouter(AddUser);
