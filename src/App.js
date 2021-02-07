import React, {Component} from 'react';
import './App.css';
import Avatars from "./main-block/avatars/Avatars";
import Contacts from "./main-block/contacts/contacts";


const App = () => {
    return (<div className='main-block'>

        <Avatars/>
        <Contacts/>

    </div>);
}

export default App;