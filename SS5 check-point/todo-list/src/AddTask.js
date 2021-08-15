import React, { Component } from 'react';
import { TaskList } from "./TaskList";

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTaskList: false,
            name: '',
        }
    }

    linkList = () => {
        this.props.closeForm();
    }
    hanlderAddTask = () => {
        this.props.addTask(this.state.name);
        this.linkList();
    }

    isChangedName= (e)=>{
        this.setState({
            name: this.target.value
        })
    }

    render() {
        if (this.state.showTaskList == true) {
            return (
                <TaskList />
            )
        }
        else {
            <div className="container">
                <h2>Add New Task</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter name of task"
                        onChange={this.isChangedName}
                    />
                </div>

                <buton type="submit"
                    className="btn btn-default"
                    onClick={this.hanlderAddTask}
                >Add</buton>
                <buton 
                type="button" 
                className="btn btn-default"
                onClick={this.linkList}
                >Back</buton>
            </div>
        }
    }
}

export default AddTask