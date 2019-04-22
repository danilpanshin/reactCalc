import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';
import Result from './components/Result';
import Message from './components/Message';
import Product from './components/Product';
import axios from 'axios';

class App extends Component {

  state = {
    total: ''
  }

  // takeData(total) {
  //   axios.get(`http://localhost:8000/calc/1/${total}`)
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  loanInformation = (type, ceiling, wall, floor, length, width, high, amount) => {
    const total = calculateTotal(type, ceiling, wall, floor, length, width, high, amount);
    this.setState({total});
  }

  render() {
    const {total} = this.state;

    let component;
    let product;
    if(total === '') {
      component = <Message />
    } else {
      component = <Result 
                    total={total}
                  />
      product = <Product 
                  total={total}
                />;
    }


    return (
      <Fragment>
        <h1>ПОДБОР СВЕТИЛЬНИКОВ ИСХОДЯ ИЗ ИХ КОЛИЧЕСТВА И ПАРАМЕТРОВ ПОМЕЩЕНИЯ</h1>
        <div className="container">
          <Form 
            loanInformation={this.loanInformation}
          />
          <div className="messages">
           {component}
          </div>
          <div className="messages">
           {product}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
