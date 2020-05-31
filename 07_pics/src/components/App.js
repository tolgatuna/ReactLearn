import React from "react";
import SearchBar from "./SearchBar";
import unsplashAxios from '../api/unsplash';
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplashAxios.get('/search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results});
    };

    render() {
        return (
            <div className='ui container' style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
