import React from "react"
import './contacts-addgroup.css'
import adduser from "../images/add-user.png";
import addgroup2 from "../images/addgroup2.png";


const Contacts_addgroup = () => {
    return (<div className="contacts__addgroup">
            <div className="contacts__add-contact">
                <button className="contacts__button">
                    <div>
                        <img className="contacts__add-contact-icon" src={adduser} alt='lul'/>
                    </div>
                    <p className="contacts__add-contact-text">Новый контакт</p>
                </button>
            </div>

            <div className="contacts__group">
                <button className="contacts__group-button">
                    <div>
                        <img className="contacts__add-contact-icon" src={addgroup2} alt='lul'/>
                    </div>
                    <p className="contacts__add-contact-text">Создать группу</p>
                </button>
            </div>
        </div>)
}

export default Contacts_addgroup