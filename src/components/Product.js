import React, { Component } from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        total: props.total,    
        items: []
      };
    }
  
    componentDidMount() {
        console.log(this.state.total)
        axios.get(`http://localhost:8000/calc/1/${this.state.total}`)
        .then(response => {
            this.setState({
                items: response.data
              });
        })
        .catch(error => {
            console.log(error);
        });
    }

  
    render() {
      const { items } = this.state;
     
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.article}
              </li>
            ))}
          </ul>
        );
      
    }
  }

export default Product;