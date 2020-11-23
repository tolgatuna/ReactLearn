import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'French',
        value: 'fr'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <h2>Translate</h2>
            <div className='ui form'>
                <div className='field'>
                    <label htmlFor='translateText'>Enter Text</label>
                    <input id='translateText' value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label='Select a Language'
                      options={options}
                      selected={language}
                      onSelectChange={setLanguage}
            />
            <hr/>
            <h3 className='ui header'>Translated</h3>
            <Convert language={language}
                     text={text}
            />
        </div>
    );
};

export default Translate;