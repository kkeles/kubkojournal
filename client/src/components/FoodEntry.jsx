import React, {useState} from 'react';
import axios from 'axios';

export default function FoodEntry() {
    const[foodEntry,setFoodEntry] = useState({
        foodGr : "",
        treatQuantity: ""
    })

    const handleChange = (evt) => {
        const {name,value} = evt.target;

        setFoodEntry(function(currInput){
            return {
                ...currInput,
                [name] : value
            }
        })
    }

    const baseURL = process.env.baseURL || "http://localhost:5000";

    const handleClick = (evt) => {        
        let isTreated = false;
        if (foodEntry.treatQuantity > 0) {isTreated = true}


        const newFoodEntry = {
            foodGr: parseInt(foodEntry.foodGr),
            treated: isTreated,
            treatQuantity: parseInt(foodEntry.treatQuantity)
        }

        axios.post(`/newFood`,newFoodEntry)
    }

    return <div className="food-entry">
        <h2>I gave food to Kubko!</h2>
        <form className="submit-form">
        <div>
        <div className="form-group">
            <label htmlFor="foodGr">The food was </label>
            <input name="foodGr" type="number" value={foodEntry.foodGr} onChange={handleChange} ></input>
            <label htmlFor="foodGr"> grams.</label>
        </div>

        <div className="form-group">
            <label htmlFor="treatQuantity" >He also had </label>
            <input name="treatQuantity" maxLength="2" type="number" value={foodEntry.treatQuantity} onChange={handleChange}></input>
            <label htmlFor="treatQuantity" > treats.</label>
        </div>

        </div>
        <div className="submit-btn">
        <button onClick={handleClick}>Submit!</button>
        </div>
        </form>
        </div>
}