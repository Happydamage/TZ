import React from 'react'
import s from './MarketingGroup.module.css'

const MarketingGroup = (props) => {
    return(
        <div className={s.container}>
            <div className={s.icon}>
                M
            </div>
            <div className={s.MessageName}>
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


export default MarketingGroup