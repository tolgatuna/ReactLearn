import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    // First way to set contextType
    // static contextType = LanguageContext;

    render() {
        const text = this.context.language === 'ENGLISH' ? 'Name' : 'Naam'
        return (
            <div className='ui field'>
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

// Second Way
Field.contextType = LanguageContext;

export default Field;
