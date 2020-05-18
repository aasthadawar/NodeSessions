import React, { Component } from 'react';
import axios from '../../CustomAxios';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    found: '',
  };
  componentDidMount() {
    axios
      .get('http://localhost:1234/dashboard')
      .then((response) => {
        //console.log('response',response);
        this.setState({ ...this.state, found: response.data });
      })
      .catch((err) => {
        this.props.history.push('/login');
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