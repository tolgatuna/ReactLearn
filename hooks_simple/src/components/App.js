import React, {useState} from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
    const [resource, setResource] = useState('posts')
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            {resource} : {<ResourceList resource={resource}/>}
            <h3>Users</h3>
            <UserList/>
        </div>
    );
};

export default App;
