import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
    state = {language: 'ENGLISH'}

    onLanguageChange = (language) => {
        this.setState({language: language})
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i className='flag us' onClick={() => this.onLanguageChange('ENGLISH')}/>
                    <i className='flag nl' onClick={() => this.onLanguageChange('DUTCH')}/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value='red'>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
