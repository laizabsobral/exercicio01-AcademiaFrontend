import React, { Component } from 'react';
import './App.css';

class Display extends Component {
  render() {
    const { output } = this.props;
    return <div className="display">{output}</div>;
    
  }
}


class Button extends Component {
  render() {
    const { value, onClick, className, disabled } = this.props;

    return (
      <button value={value} className={'button ' + className} onClick={onClick} disabled={disabled}>
        {value}
      </button>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
      number: '0',
      operator: '',
    };

    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleOperatorInput = this.handleOperatorInput.bind(this);
    this.handleEqualInput = this.handleEqualInput.bind(this);
    this.handleCommaInput = this.handleCommaInput.bind(this);
    this.handleNegateInput = this.handleNegateInput.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  // Funcao para limpar os numeros
  handleClearInput() {
    this.setState({ result: '0', number: '0', operator: '' });
  }

  // entrada dos botoes
  handleNumberInput(e) {
    e.preventDefault();

    // valor do botao apos pressionado
    const value = e.target.innerHTML;

    console.log(value);

    // acrescenta o valor do botão ao número atual
    this.setState((prevState) => {
      return {
        number:
          prevState.number === '0' && value === '0' // impede varios 0 a esquerda
            ? '0'
            : prevState.number % 1 === 0 && value !== '0' // numero inteiro
            ? Number(prevState.number + value) // ele retorna um Number() para se livrar dos 0's na frente quando um número é digitado
            : prevState.number + value, // para poder digitar um 0 logo após a vírgula
        result: prevState.operator ? prevState.result : '0', // esta linha redefine o resultado se um novo número foi digitado sem nenhum operador armazenado
      };
    });
  }

  // Funcao dos operadores
  handleOperatorInput(e) {
    // const operação
    const operation = e.target.innerHTML;

    this.setState((prevState) => {
      return {
        operator: operation,
        result: prevState.number ? prevState.number : prevState.result,
        number: operation === '-' && prevState.number === '0' ? '-' : '',
      };
    });
  }

  // Operações Button igual
  handleEqualInput() {
    let newResult = 0;
    switch (this.state.operator) {
      // caso seja soma
      case '+':
        newResult = Number(this.state.result) + Number(this.state.number);
        break;
      // caso seja subtração
      case '-':
        newResult = this.state.result - this.state.number;
        break;
      //caso seja multiplicação
      case '*':
        newResult = this.state.result * this.state.number;
        break;
      //caso seja divisão
      case '/':
        newResult = this.state.result / this.state.number;
        break;
      default:
        newResult = this.state.number ? this.state.number : this.state.result;
    }

    // Numeros + operador = resultado
    this.setState({ number: '', operator: '', result: Number(newResult) });
  }

  // Button ponto
  handleCommaInput() {
    if (this.state.number)
      this.setState({
        number: !this.state.number.toString().includes('.') ? this.state.number + '.' : this.state.number,
      });
  }

  // Button negativar numero 
    handleNegateInput() {
        this.setState({ number: -this.state.number });
      
    }

  render() {
    const { number, result, operator } = this.state;
    return (
      <div className="calculator">
        <Display output={number ? number : result + operator} />
        <div className="LayoutButtons">
          <Button value="C" className="button-operacao" onClick={this.handleClearInput} />
          <Button value="+-" className="button-operacao" onClick={this.handleNegateInput} />
          <Button value="%" className="button-operacao" onClick="" /> {/* nao funciona */}
          <Button value="/" className="button-operacao" onClick={this.handleOperatorInput} />
          <Button value="7" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="8" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="9" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="*" className="button-operacao" onClick={this.handleOperatorInput} />
          <Button value="4" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="5" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="6" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="-" className="button-operacao" onClick={this.handleOperatorInput} />
          <Button value="1" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="2" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="3" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="+" className="button-operacao" onClick={this.handleOperatorInput} />
          <Button value="0" className="button-numero" onClick={this.handleNumberInput} />
          <Button value="." className="button-numero" onClick={this.handleCommaInput} />
          <Button value="=" className="button-operacao span-two" onClick={this.handleEqualInput} />
        </div>
      </div>
    
  
    );
  }
}




export default Calculator;