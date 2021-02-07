import React, {useState} from 'react'
import s from './AvatarUser.module.css'
import avatar from "../../images/avatar.png";
import status from "../../images/status.png";
import pencil from "../../images/pencil.png";
import offline from "../../images/offline.png";


const AvatarUser = ({messageCounter, resetCounter, isForceOffline, resetOffline}) => {
    const [isOnline, setIsOnline] = useState(false);

    return (
        <div className={`${s.userContainer} + ${s.user1}`} onClick={() => {
            resetCounter();
            resetOffline();
            setIsOnline(true);
        }}>
            <div className={`${s.counter} ${messageCounter && s.visible}`}>{messageCounter}</div>
            <div className={s.status}>
                <img src={avatar} alt='lul'/>
                <div className={`${s.onlineWrites} ${s.online1} ${isOnline && !messageCounter && !isForceOffline &&  s.visible}`}>
                    <img src={status} alt="lul"/>
                </div>
                <div className={`${s.onlineWrites} ${s.writes1} ${messageCounter && !isForceOffline && s.visible}`}>
                    <img src={pencil} alt="lul"/>
                </div>
                <div className={`${s.offline} ${s.offline1} ${isForceOffline && s.visible}`}>
                    <img src={offline} alt='lul'/>
                </div>
            </div>
        </div>
    )
}

export default AvatarUser
