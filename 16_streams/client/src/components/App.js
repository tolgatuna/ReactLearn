import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";


const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={StreamList}/>
                        <Route path='/streams/create' exact component={StreamCreate}/>
                        <Route path='/streams/edit' exact component={StreamEdit}/>
                        <Route path='/streams/delete' exact component={StreamDelete}/>
                        <Route path='/streams/show' exact component={StreamShow}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
