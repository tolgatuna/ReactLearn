import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end js framework'
    },
    {
        title: 'Wyh use React?',
        content: 'React is a nice and popular JS library'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <br/>
            <Accordion items={items}/>
            <br/>
            <Search/>
            <br/>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ?
                    <Dropdown
                        label='Select a Color'
                        options={options}
                        selected={selected}
                        onSelectChange={setSelected}
                    /> : null
            }
            <br/>
            <br/>
            <Translate />

        </div>
    );
};
