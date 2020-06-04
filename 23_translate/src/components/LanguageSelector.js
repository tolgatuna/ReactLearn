import React, {Component} from "react";
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                Select language:
                <i className='flag us' onClick={() => this.context.onLanguageChange('ENGLISH')}/>
                <i className='flag nl' onClick={() => this.context.onLanguageChange('DUTCH')}/>
            </div>
        );
    }
}

export default LanguageSelector;
