import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import styles from '../Home/Home.module.css';

class Home extends Component {
  state = {
    usersArray: [],
  };
  componentDidMount() {
    axios
      .get('http://localhost:9012/home')
      .then((response) => {
        this.setState({ ...this.state, usersArray: response.data });
      })
      .catch((error) => console.log('error', error));
  }
  handleDelete = (deleteid) => {
    console.log('delete id',deleteid);
    axios.delete(`http://localhost:9012/home/${deleteid}`)
      .then((response) => {
        this.setState({ ...this.state, usersArray: response.data });
      });
  };
  render() {
    let tableData;
    if (this.state.usersArray.length != 0) {
      let counter = 0;
      tableData = this.state.usersArray.map((items) => {
        let date = items.created_on.split(' ');
        let dateString = `${date[2]} ${date[1]} ${date[3]} ${date[0]} ${date[4]}`;
        counter++;
        return (
          <tr key={counter}>
            <td>{items.firstname}</td>
            <td>{items.lastname}</td>
            <td>{items.branch}</td>
            <td>{dateString}</td>
            <td className={styles.DeleteIcon}>
              <i
                onClick={() => {
                  this.handleDelete(items.created_on);
                }}
                className='fas fa-trash-alt'></i>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className={styles.table}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Branch</th>
              <th>Date of Creation</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
