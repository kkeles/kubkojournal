import React,{useState} from 'react';
import axios from 'axios';

export default function WalkEntry() {
    const [walkEntry,setWalkEntry] = useState({walkTime:0});

    const [poopedChecked,setPoopedChecked] = useState(false);
    const handlePoopClick = () => {
        setPoopedChecked(!poopedChecked);
    }

    const [peedChecked,setPeedChecked] = useState(false);
    const handlePeeClick = () => {
        setPeedChecked(!peedChecked);
    }

    const baseURL = process.env.baseURL || "http://localhost:5000";

    const handleChange = evt => {
        const {name,value} = evt.target;

        setWalkEntry(currentInput => {
            return {
                ...currentInput,
                [name] : value
            }
        })
    }

    const handleClick = evt => {
        const newWalkEntry = {
            walkDuration: parseInt(walkEntry.walkDuration),
            pooped: poopedChecked,
            peed: peedChecked
        };
        axios.post(`/newWalk`,newWalkEntry);


    }

    return <div className="walk-entry">
        <h2>I took Kubko for a walk!</h2>
        <form className="submit-form">
        <div>
            <div className="form-group">
                <label htmlFor="walkTime">The walk was  </label>
                <input type="number" id="walkDuration" name="walkDuration"  onChange={handleChange} ></input>
                <label htmlFor="walkTime"> minutes.</label>
            </div>

            <div className="form-group">
                <input type="checkbox" id="pooped" name="pooped" checked={poopedChecked} onClick={handlePoopClick} onChange={handleChange}></input>
                <label>He pooped!</label>
            </div>

            <div className="form-group">
                <input type="checkbox" id="peed" name="peed" checked={peedChecked} onClick={handlePeeClick} onChange={handleChange}></input>
                <label>He peed!</label>
            </div>
        </div>
        <div className="submit-btn">
            <button onClick={handleClick}>Submit!</button>
        </div>
        </form>
    </div>
}