import React from "react"

const PizzaForm = (props) => {

  const handleEditForm = (event) => {
    let editObj = {
      [event.target.name]: event.target.value
    }
    return props.onEditForm(editObj)
  }

  const { topping, size } = props.editingPizza
  const vegetarian = props.editingPizza.vegetarian
  return(
      <div className="form-row" onChange={handleEditForm}>
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input  className="form-check-input" type="radio" value="Vegetarian" name='vegetarian' checked={vegetarian ? true : false} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name='vegetarian' checked={vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
