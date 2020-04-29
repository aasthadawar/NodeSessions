import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import styles from './Students.module.css';
import Table from 'react-bootstrap/Table';

class Students extends Component {
  state = {
    filterArray: [],
  };

  // initial axios call to render data initially on the screen
  componentDidMount() {
    axios
      .get('http://localhost:9034/students')
      .then((response) => {
        this.setState({ ...this.state, filterArray: response.data });
      })
      .catch((error) => console.log('error occured', error));
  }

  // function to make request for backend for filtered results according to branch name
  handleBranch = (event) => {
    let branchName = event.target.id;
    axios
      .get(`http://localhost:9034/students?branch=${branchName}`)
      .then((response) => {
        this.setState({ ...this.state, filterArray: response.data });
      })
      .catch((error) => console.log('error occured', error));
  };

  render() {
    let tableData;
    if (this.state.filterArray.length != 0) {
      let counter = 0;
      tableData = this.state.filterArray.map((items) => {
        counter++;
        return (
          <tr key={counter}>
            <td>{items.firstname}</td>
            <td>{items.lastname}</td>
            <td>{items.branch}</td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div className={styles.dropdown}>
          <DropdownButton id='dropdown-basic-button' title='Select by Branch'>
            <Dropdown.Item
              as='button'
              onClick={() => {
                this.handleBranch(window.event);
              }}>
              All
            </Dropdown.Item>
            <Dropdown.Item
              id='mean'
              as='button'
              onClick={() => {
                this.handleBranch(window.event);
              }}>
              MEAN
            </Dropdown.Item>
            <Dropdown.Item
              id='feen'
              as='button'
              onClick={() => {
                this.handleBranch(window.event);
              }}>
              FEEN
            </Dropdown.Item>
            <Dropdown.Item
              id='java'
              as='button'
              onClick={() => {
                this.handleBranch(window.event);
              }}>
              Java
            </Dropdown.Item>
            <Dropdown.Item
              id='qe'
              as='button'
              onClick={() => {
                this.handleBranch(window.event);
              }}>
              QE
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className={styles.table}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Students;
