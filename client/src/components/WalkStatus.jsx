import React, {useState,useEffect} from 'react';

export default function WalkStatus() {
    const [walkEntries,setWalkEntries] = useState([{
        walkDate: "",
        walkDuration: 0,
        pooped: false,
        peed: false
    }]);

    useEffect(() => {
        fetch("/walks")
        .then(res => {
            if (res.ok) {return res.json()}
        })
        .then(jsonResp => {
            setWalkEntries(jsonResp);
        })
    },[]);

    const lastWalk = walkEntries[walkEntries.length - 1];
    const lastWalkDate = new Date(lastWalk.walkDate);
    const lastWalkTime = `${lastWalkDate.getHours()}:${("0"+lastWalkDate.getMinutes()).slice(-2)}`;

    // to find today's walks
    const today = new Date();
    const todayStart = today.setHours(0,0,0,0)
    const todaysWalks = walkEntries.filter(walkEntry => {
        return walkEntry.walkDate > todayStart
    })

    let walkCounter = 0;
    let pooCounter = 0;
    let peeCounter = 0;
    // count peed and pooed numbers
    todaysWalks.forEach(walk => {
        walkCounter += walk.walkDuration;
        walk.pooped && pooCounter ++;
        walk.peed && peeCounter ++;
    })

    const toiletTexter = (tCounter,tVerb) => {
        let tText = "";
        if (tCounter === 0) {tText = `didn't ${tVerb}`}
        else if (tCounter === 1) {tText = `did ${tVerb} once`}
        else if (tCounter === 2) {tText = `did ${tVerb} twice`}
        else {tText = `did ${tVerb} ${tCounter} times`}
        return tText;
    }
    const pooText = toiletTexter(pooCounter,"poop");
    const peeText = toiletTexter(peeCounter,"pee");

    return <div className="walk-status">
        <b><h3>Last time he went for a walk at {lastWalkTime}.</h3></b>
        <p>The last walk was roughly <b>{lastWalk.walkDuration} minutes</b></p>
        <p>So far Kubko walked <b>{walkCounter} minutes</b></p>
        <p>He <b>{pooText}</b> and <b>{peeText}</b> today.</p>
        </div>
}