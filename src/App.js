import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';
import Result from './components/Result';
import Message from './components/Message';

class App extends Component {

  state = {
    total: ''
  }

  loanInformation = (type, ceiling, wall, floor, length, width, high, amount) => {
    const total = calculateTotal(type, ceiling, wall, floor, length, width, high, amount);
    this.setState({total});
  }

  render() {
    const {total} = this.state;

    let component;
    if(total === '') {
      component = <Message />
    } else {
      component =   <Result 
                      total={total}
                    />
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
        </div>
      </Fragment>
    );
  }
}

export default App;
