import React from "react"
import s from './Avatars.module.css'
import circle from '../images/circle.png'
import nouser from '../images/no_user.png'
import messagecounter from '../images/message_counter.svg'
import AvatarUser from "./AvatarUser/AvatarUser";


const Avatars = (props) => {
    return (
        <div className={s.container}>
            <div className={s.userContainer}>
                <img src={nouser} alt='lul'/>
                <div className={s.emptyUser}>
                    <div className={s.emptyAvatar}>!</div>
                    <img src={circle} alt="lul"/>
                </div>
            </div>

            <AvatarUser sum=''/>
            <AvatarUser sum=''/>
            <AvatarUser sum=''/>
            <AvatarUser sum=''/>

            <div className={`${s.userContainer} + ${s.user5}`}>
                <img src={messagecounter} alt='lul'/>
                <div className={`${s.counter} + ${s.messagesSum5}`}></div>
                <div className="avatars__message-icon"></div>
            </div>
        </div>);
}

export default Avatars