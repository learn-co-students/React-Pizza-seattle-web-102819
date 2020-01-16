import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
    pizzas: [],
    newPizza: {
      topping: '',
      size: '',
      vegetarian: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => this.setState({pizzas: data}))
    .catch(e => console.log(e))
  }

  resetNewPizza = () => {
    this.setState({
      newPizza: {
        topping: '',
        size: '',
        vegetarian: null
      }
    })
  }

  editPizza = pizza => {
    this.setState({
      newPizza: pizza
    })
  }

  handleChange = (e) => {
    console.log(e.target)
    const val = e.target.value

    if (val === 'Vegetarian') {
      this.setState({
        newPizza: {...this.state.newPizza, vegetarian: true}
      })
    } else if (val === 'Not Vegetarian') {
      this.setState({
        newPizza: {...this.state.newPizza, vegetarian: false}
      })
    } else {
      const name = e.target.name
      const obj = {
        [name]:val
      }
      this.setState({
        newPizza: {...this.state.newPizza, ...obj}
      })
    }
  }

  updatePizza = () => {
    let pizzaId = this.state.newPizza.id
    fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify(this.state.newPizza)
    })
    .then(response => response.json())
    .then(updatedPizza => {
      let updatedPizzas = this.state.pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza)
      this.setState({
        pizzas: updatedPizzas
      }) 
    })
    this.resetNewPizza()
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.newPizza} updatePizza={this.updatePizza} handleChange={this.handleChange}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
