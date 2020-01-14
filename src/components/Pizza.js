import React from "react"


const Pizza = (props) => {

  const handleVegetarian = () => {
    return (props.pizza.vegetarian ? 'Yes' : 'No')
  }

  const handleClick = () => {
    props.onEditPizza(props.pizza)
  }
  const { topping, size, vegetarian } = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{handleVegetarian()}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
