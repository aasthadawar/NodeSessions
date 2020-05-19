import React, { Component } from 'react';
import axios from '../CustomAxios';

class Verify extends Component{
    componentDidMount(){
        console.log('token ', this.props.location.search);
        localStorage.setItem('token',this.props.location.search.split('?')[1] );
        Object.assign(axios.defaults, {
          headers: { 'x-access-token': localStorage.getItem('token') },
        });
        this.props.history.push('/dashboard');
    }
    render(){
        return(
            <h1></h1>
        );
    }
}

export default Verify;