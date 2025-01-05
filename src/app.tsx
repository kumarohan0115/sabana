import React from "react";

import "./styles.scss";
// import {Portfolio} from "pages/index";
import Todo from "components/todolist/todo";


const App: React.FC = () => {

    return (
        <div className="app-root">
            {/* <Portfolio/> */}
            <Todo/>
        </div>
    );
};

export default App;
