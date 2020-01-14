import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    editingPizza: {
      id: null,
      topping: '',
      size: '',
      vegetarian: false
    }
  }

  

  PIZZA_URI = 'http://localhost:3000/pizzas'

  fetchPizzas = () => {
    return fetch(this.PIZZA_URI)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

// fetches pizzas on page load
  componentDidMount() {
    this.fetchPizzas()
  }


// receives pizza to be editing and updates state.
  editPizza = (pizza) => {
    // console.log('editing pizza...', pizza)
    this.setState({
      editingPizza: pizza
    })
  }

  //receives an object from the form that contains a k-v pair to be updated in state.editingPizza.
  // checks k-v pair to see if it's vegetarian than ensures it returns a true/false value
  editForm = (obj) => {
    console.log('editing form...', obj.vegetarian)
    const newObj = (obj.vegetarian ? (obj.vegetarian === 'Vegetarian' ? {vegetarian: true} : {vegetarian: false}) : obj )
    this.setState(prevState => ({
      editingPizza: {
        ...prevState.editingPizza, ...newObj
      }
    }))
  }
  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editingPizza={this.state.editingPizza} onEditForm={this.editForm}/>
        <PizzaList pizzas={this.state.pizzas} onEditPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
