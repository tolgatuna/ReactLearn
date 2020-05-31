import React from "react";

export default class SearchBar extends React.Component {

    state = {term: ""};

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSearchSubmit}>
                    <label htmlFor='Search'>Search</label>
                    <input id='Search'
                           type='text'
                           value={this.state.term}
                           onChange={e => this.setState({term: e.target.value})}
                    />
                </form>
            </div>
        );
    }
};