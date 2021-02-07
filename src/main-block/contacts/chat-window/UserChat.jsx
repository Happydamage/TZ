import React from 'react'
import avatar from "../../images/avatar.png";
import s from './UserChat.module.css'


const UserChat = (props) => {
    return (
        <div className={s.container}>
            <div className={s.icon}>
                <img src={avatar} alt='lul'/>
            </div>
            <div className={s.NameMessage}>
                <p className={s.name}>{props.name}</p>
                <p className={s.message}>{props.message}</p>
            </div>
            <div className={s.DateTime}>
                <p className={s.date}>{props.date}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>

    )
}

export default UserChat