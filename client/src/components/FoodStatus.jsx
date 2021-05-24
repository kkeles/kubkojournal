import React,{useState,useEffect} from 'react';


export default function FoodStatus() {
    const [foodEntries,setFoodEntries] = useState([{
        foodTime: "",
        foodGr: "",
        treated: "",
        treatQuantity: ""
    }]);

   useEffect(() => {
       // to acquire json list of food from the api.
    fetch("/foods")
        .then(res => {
            if (res.ok) {
                return res.json()}
        })
        .then(jsonRes => {
            setFoodEntries(jsonRes);})
    },[])

        
    let lastFoodTime = "" // will be replaced as a string of last time he ate food.
    const lastFoodTimeFinder = async() => {
        // will acquire the most recent food entry.
        try {
            const recentFoodEntry = foodEntries[foodEntries.length - 1]
            const recentFoodEntryTime = new Date(recentFoodEntry.foodTime);
            lastFoodTime = `${recentFoodEntryTime.getHours()}:${('0'+recentFoodEntryTime.getMinutes()).slice(-2)}`
        } catch (error) {
            console.log(error)
        }    
    }
    lastFoodTimeFinder();

    // to find today's food Entries
    const today = new Date();
    const todayStart = today.setHours(0,0,0,0)
    const todaysFoods = foodEntries.filter(foodEntry => {
        return foodEntry.foodTime > todayStart
    })

    let foodCounter = 0;
    let treatCounter = 0;

    todaysFoods.forEach(food => {
        foodCounter +=  food.foodGr;
        treatCounter += food.treatQuantity;
    })
    


    try {
        return <div className="food-status">
        <b><h3>Last time he ate food at {lastFoodTime}.</h3></b>
        <p>So far he ate <b>{foodCounter}g food</b>.</p>
        <p>He also had <b>{treatCounter} treats</b> so far.</p>
        </div>
    } catch (error) {
        console.log(error)
    }


}