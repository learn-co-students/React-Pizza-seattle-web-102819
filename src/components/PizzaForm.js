import React from "react"

const PizzaForm = ({ currentPizza, updatePizza, handleOnChange }) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={currentPizza.topping} onChange={handleOnChange}/>
        </div>
        <div className="col">
          <select value={currentPizza.size} onChange={handleOnChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={currentPizza.vegetarian? true : false} onChange={handleOnChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!currentPizza.vegetarian ? true : false} onChange={handleOnChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
