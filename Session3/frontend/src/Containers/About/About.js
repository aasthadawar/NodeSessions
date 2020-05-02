import React, { Component } from 'react';
import styles from '../About/About.module.css';
import axios from 'axios';

class About extends Component {
  state = {
    heading: '',
    description: '',
  };
  componentDidMount() {
    axios.get('http://localhost:9012/about').then((response) => {
      this.setState({
        ...this.state,
        heading: response.data.heading,
        description: response.data.description,
      });
    });
  }
  render() {
    return (
      <div className={styles.about}>
        <h1>{this.state.heading}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default About;
