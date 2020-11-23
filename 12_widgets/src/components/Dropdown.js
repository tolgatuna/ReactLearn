import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ({label, options, selected, onSelectChange}) => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (!ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = () => (
        options.map(option => {
                if (option.value === selected.value) {
                    return null;
                } else {
                    return (
                        <div key={option.value} className='item' onClick={() => onSelectChange(option)}>
                            {option.label}
                        </div>
                    );
                }
            }
        )
    );
    return (
        <div className='ui form' ref={ref}>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => setOpen(!isOpen)}
                     className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                    <i className='dropdown icon'/>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                        {renderedOptions()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;