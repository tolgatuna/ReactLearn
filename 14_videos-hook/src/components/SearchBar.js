import React, {useState} from "react";

const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(term);
    }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <label htmlFor='Search'>Search</label>
                <input id='Search'
                       type='text'
                       value={term}
                       onChange={e => setTerm(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;