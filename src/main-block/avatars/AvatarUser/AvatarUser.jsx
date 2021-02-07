import React from 'react'
import s from './AvatarUser.module.css'
import avatar from "../../images/avatar.png";
import status from "../../images/status.png";
import pencil from "../../images/pencil.png";
import offline from "../../images/offline.png";

let sumArray = [0, 0, 0, 0, 0]

let Random = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let messageCounter =() => {
        if (Random(1, 5) === 1) {
        sumArray[0] += 1
    } else if (Random(1, 5) === 2) {
        sumArray[1] += 1
    } else if (Random(1, 5) === 3) {
        sumArray[2] += 1
    } else if (Random(1, 5) === 4) {
        sumArray[3] += 1
    }
    sumArray[4] = sumArray[0] + sumArray[1] + sumArray[2] + sumArray[3];
}




const AvatarUser = (props) => {
    return (
        <div className={`${s.userContainer} + ${s.user1}`}>
            <div className={s.counter}></div>
            <div className={s.status}>
                <img src={avatar} alt='lul'/>
                <div className={`${s.onlineWrites} + ${s.online1}`}>
                    <img src={status} alt="lul"/>
                </div>
                <div className={`${s.onlineWrites} + ${s.writes1}`}>
                    <img src={pencil} alt="lul"/>
                </div>
                <div className={`${s.offline} + ${s.offline1}`}>
                    <img src={offline} alt='lul'/>
                </div>
            </div>
        </div>
    )
}

export default AvatarUser