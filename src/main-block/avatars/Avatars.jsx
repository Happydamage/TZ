import React, {useState, useCallback, useEffect} from "react"
import s from './Avatars.module.css'
import circle from '../images/circle.png'
import nouser from '../images/no_user.png'
import messagecounter from '../images/message_counter.svg'
import AvatarUser from "./AvatarUser/AvatarUser";

let Random = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


const Avatars = (props) => {
  const [totalMessageCounter, setTotalMessageCounter] = useState(0);

  const [messageCounter1, setMessageCounter1] = useState(0);
  const [messageCounter2, setMessageCounter2] = useState(0);
  const [messageCounter3, setMessageCounter3] = useState(0);
  const [messageCounter4, setMessageCounter4] = useState(0);

  const [isForceOffline1, setIsForceOffline1] = useState(false);
  const [isForceOffline2, setIsForceOffline2] = useState(false);
  const [isForceOffline3, setIsForceOffline3] = useState(false);
  const [isForceOffline4, setIsForceOffline4] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setMessageCounter1(prevCount => prevCount + 1)
    }, 2000);

    setInterval(() => {
      setMessageCounter2(prevCount => prevCount + 1)
    }, 4000);

    setInterval(() => {
      setMessageCounter3(prevCount => prevCount + 1)
    }, 5000);

    setInterval(() => {
      setMessageCounter4(prevCount => prevCount + 1)
    }, 6000)
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIsForceOffline1(true)
    }, 10000);

    setInterval(() => {
      setIsForceOffline2(true)
    }, 20000);

    setInterval(() => {
      setIsForceOffline3(true)
    }, 25000);

    setInterval(() => {
      setIsForceOffline4(true)
    }, 30000)
  }, []);

  useEffect(() => {

  }, []);

  useEffect(() => {
    setTotalMessageCounter(messageCounter1 + messageCounter2 + messageCounter3 + messageCounter4);
  }, [messageCounter1, messageCounter2, messageCounter3, messageCounter4]);

    return (
        <div className={s.container}>
            <div className={s.userContainer}>
                <img src={nouser} alt='lul'/>
                <div className={s.emptyUser}>
                    <div className={s.emptyAvatar}>!</div>
                    <img src={circle} alt="lul"/>
                </div>
            </div>

            <AvatarUser resetCounter={() => {setMessageCounter1(0)}}
                        resetOffline={() => {setIsForceOffline1(false)}}
                        isForceOffline={isForceOffline1}
                        messageCounter={messageCounter1}/>

            <AvatarUser resetCounter={() => {setMessageCounter2(0)}}
                        resetOffline={() => {setIsForceOffline2(false)}}
                        isForceOffline={isForceOffline2}
                        messageCounter={messageCounter2} />

            <AvatarUser resetCounter={() => {setMessageCounter3(0)}}
                        resetOffline={() => {setIsForceOffline3(false)}}
                        isForceOffline={isForceOffline3}
                        messageCounter={messageCounter3} />

            <AvatarUser resetCounter={() => {setMessageCounter4(0)}}
                        resetOffline={() => {setIsForceOffline4(false)}}
                        isForceOffline={isForceOffline4}
                        messageCounter={messageCounter4} />

            <div className={`${s.userContainer} + ${s.user5}`}>
                <img src={messagecounter} alt='lul'/>
                <div className={`${s.counter} + ${s.messagesSum5} ${totalMessageCounter && s.visible}`}>{totalMessageCounter}</div>
                <div className="avatars__message-icon"></div>
            </div>
        </div>);
}

export default Avatars
