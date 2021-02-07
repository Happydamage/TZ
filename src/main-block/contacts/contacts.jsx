import React from "react"
import  s from './contacts.module.css'
import Search_panel from "../cearch-panel/search-panel";
import Contacts_addgroup from "../addgroup/contacts-addgroup";
import UserChat from "./chat-window/UserChat";
import MarketingGroup from "./chat-window/MarketingGroup";


const Contacts = () => {
    return (
        <div className={s.container}>
            <div className={s.contactsOnline}>
                10 Контактов онлайн
            </div>

            <div className={s.chat}>
                <MarketingGroup name='Группа маркетинг' message='Ершова:Привет как...' date='22/05/2015' time='13:52'/>
                <UserChat name='Иван Иванов' message='Привет, как дела?' date='5/07/2015' time='09:17'/>
                <UserChat name='Илья Дудов' message='Что по чем?' date='12/04/2015' time='16:17'/>
                <UserChat name='Алексей Прямой' message='Ты ответишь за баз...' date='28/06/2015' time='14:27'/>
                <UserChat name='Тимофей Бодрый' message='Го на грудь примем...' date='11/05/2015' time='10:12'/>
                <UserChat name='Паркур Стаканыч' message='Цемент всё твёрже' date='7/05/2015' time='16:17'/>
                <UserChat name='Паркур Стаканыч' message='Парапеты всё выше' date='17/03/2015' time='20:32'/>
                <UserChat name='Лик Укупника' message='го в лес по грибы' date='22/12/2015' time='29:17'/>
                <UserChat name='Бендер С.Р.' message='Есть чо согнуть?' date='11/09/2015' time='16:17'/>
            </div>

            <Search_panel/>
            <Contacts_addgroup/>

        </div>);
}

export default Contacts