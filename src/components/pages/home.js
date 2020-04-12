import React from "react";
import List from "../employeeList";

function Home() {
    return (
        <div>
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Use this directory to track and organize your employees!</p>
                <hr className="my-4"/>
                <p>Hit the button below to start creating your directory</p>
                <a className="btn btn-primary btn-lg" href="/new" role="button">New Employee</a> 
            </div>
            </div>
            <br />
            <List />
        </div>
    )
}

export default Home;