import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';

class App extends Component {

  state = {
    total: ''
  }

  loanInformation = (type, ceiling, wall, floor, length, width, high, amount) => {
    const total = calculateTotal(type, ceiling, wall, floor, length, width, high, amount);
    this.setState({total});
  }

  render() {
    return (
      <Fragment>
        <h1>ПОДБОР СВЕТИЛЬНИКОВ ИСХОДЯ ИЗ ИХ КОЛИЧЕСТВА И ПАРАМЕТРОВ ПОМЕЩЕНИЯ</h1>
        <div className="container">
          <Form 
            loanInformation={this.loanInformation}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
