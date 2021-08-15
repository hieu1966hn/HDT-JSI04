import React, {Component} from "react";
import TodoList from "./TodoList";

class TaskList extends Component {
    constructor(props) {
        super(props);
        //  ke thua 
        this.state = { 
            tasks:['Task 1', "Task 2"],
        }
    }

    render(){
        return (
            <div className="container">
                <br></br>
                <br></br>
                <h2>List task</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name of task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(function(name, index){
                                return <TodoList  name={name}/>
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default TaskList;