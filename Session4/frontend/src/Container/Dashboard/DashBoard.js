import React, { Component } from 'react';
import axios from '../../customaxios';
import styles from '../Dashboard/Dashboard.module.css';

class Dashboard extends Component {
  state = {
    found: '',
  };
  componentDidMount() {
    axios
      .get('http://localhost:2468/employee/data')
      .then((response) => {
        this.setState({ ...this.state, found: response.data });
      })
      .catch((err) => {
        this.props.history.push('/');
      });
  }
  render() {
    if (this.state.found != '') {
      var value = this.state.found;
    }

    return <div className={styles.heading}>{value}</div>;
  }
}

export default Dashboard;
