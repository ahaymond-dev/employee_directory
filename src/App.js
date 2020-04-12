import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/home";
import New from "./components/pages/newEmployee";

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={Home} />
                <Route exact path="/new" component={New} />
            </div>
        </Router>
    );
}

export default App;