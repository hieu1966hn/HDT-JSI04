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


    render() {
        if (this.state.showTaskList == true) {
            return (
                <TaskList />
            )
        }
        else{
            <div className="container">
                <h2>Add New Task</h2>
                <div className="">

                </div>

            </div>
        }
    }
}