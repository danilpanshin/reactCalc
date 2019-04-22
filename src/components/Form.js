import React, { Component } from 'react';

class Form extends Component {
    state = { 
        type: '',
        ceiling: '',
        wall: '',
        floor: '',
        length: '',
        width: '',
        high: '',
        amount: ''
     }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {type, ceiling, wall, floor, length, width, high, amount} = this.state;
        this.props.loanInformation(type, ceiling, wall, floor, length, width, high, amount);
    }

    handleChange = (e) => {
        //read from data

        const {name, value} = e.target;
        console.log(name);
        this.setState({
            [name] : Number(value)
        })
    }

    validateForm = () => {
        const {type, ceiling, wall, floor, length, width, high, amount} = this.state;
        const notValid = !type || !ceiling || !wall || !floor || !length || !width || !high || !amount;
        return notValid;
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                <label>Тип помещения</label>
                <select
                    onChange={this.handleChange} 
                    name="type" 
                    className="u-full-width" 
                    type="number">
                    <option value="">Выберите</option>
                    <option value="20">20 люкс - Лестница</option>
                    <option value="50">50 люкс - Подсобные помещения, кладовая; Ванная комната, санузел, душевая, квартирные коридоры и холлы</option>
                    <option value="75">75 люкс - Холл, коридор; Архив; Гардеробная</option>
                    <option value="100">100 люкс - Эскалатор, лестница; Сауна, бассейн</option>
                    <option value="150">150 люкс - Жилая комната, кухня</option>
                    <option value="200">200 люкс - Зал для конференций, переговорная комната; Детская комната</option>
                    <option value="300">300 люкс - Офис общего назначения с использованием комьютеров; Кабинет, библиотека</option>
                    <option value="500">500 люкс - Офис, в котором осуществляются чертёжные работы</option>
                </select>
                </div>
                <div>
                    <label>Тон потолка</label>
                    <select
                        onChange={this.handleChange} 
                        name="ceiling" 
                        className="u-full-width" 
                        type="number">
                        <option value="">Выберите</option>
                        <option value="70">белый (70)</option>
                        <option value="50">светлый (50)</option>
                        <option value="30">серый (30)</option>
                    </select>
                </div>
                <div>
                    <label>Тон стен</label>
                    <select
                        onChange={this.handleChange} 
                        name="wall" 
                        className="u-full-width" 
                        type="number">
                        <option value="">Выберите</option>
                        <option value="50">светлый (50)</option>
                        <option value="30">серый (30)</option>
                        <option value="10">темный (10)</option>
                    </select>
                </div>
                <div>
                    <label>Тон пола</label>
                    <select
                        onChange={this.handleChange} 
                        name="floor" 
                        className="u-full-width" 
                        type="number">
                        <option value="">Выберите</option>
                        <option value="30">серый (30)</option>
                        <option value="10">темный (10)</option>
                    </select>
                </div>
                <div>
                    <label>Длина помещения, м</label>
                    <input
                        onChange={this.handleChange} 
                        name="length" 
                        className="u-full-width" 
                        type="number"/>
                </div>
                <div>
                    <label>Ширина помещения, м</label>
                    <input
                        onChange={this.handleChange} 
                        name="width" 
                        className="u-full-width" 
                        type="number"/>
                </div>
                <div>
                    <label>Высота помещения, м</label>
                    <input
                        onChange={this.handleChange} 
                        name="high" 
                        className="u-full-width" 
                        type="number"/>
                </div>
                <div>
                    <label>Количество светильников в помещении</label>
                    <input
                        onChange={this.handleChange} 
                        name="amount" 
                        className="u-full-width" 
                        type="number"/>
                </div>
                <div>
                <input 
                    disabled={ this.validateForm() }
                    type="submit" 
                    value="Расчитать" 
                    className="u-full-width button-primary"/>
                </div>
            </form>
        );
    }
}
 
export default Form;