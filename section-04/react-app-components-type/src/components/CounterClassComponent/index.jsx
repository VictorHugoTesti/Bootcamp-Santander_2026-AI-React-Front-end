import { Component } from "react";

class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    //Atualizar Estado count + 1
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { message } = this.props;
    //const {count} = this.state

    return (
      <div>
        <h1>{message}</h1>
        <h2>Contador: {this.state.count}</h2>
        <button className="button" onClick={() => this.increase()}>
          Adicionar
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;
