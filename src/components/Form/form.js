import React, { Component } from "react";

class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        role: "",
        department: ""
    };

    handleInputChange = event => {

        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {

        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out employee first and last name");
        } else if (!this.state.role || !this.state.department) {
            alert("Enter employee role and department");
        } else {
            alert(`${this.state.firstName} ${this.state.lastName} has been entered into the employee directory`)
        }

        this.setState({
            firstName: "",
            lastName: "",
            role: "",
            department: ""
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                <form>
                    <div className="row">
                        <div className="col">
                            <input value={this.state.firstName} name="firstName" onChange={this.handleInputChange} type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input value={this.state.lastName} name="lastName" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input value={this.state.role} name="role" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Role" />
                        </div>
                        <div className="col">
                            <input value={this.state.department} name="department" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Department" />
                        </div>
                    </div>
                    <button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        )
    }

    
}

export default Form;