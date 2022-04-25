import { useState } from 'react'


function TaskList(props) {

    const clickHandler = event => {
        props.onDelBtnClick(event.target.id)
    }

    return (
        props.tasks.map(task => {
            return (
                <div className="div-task" key={task.id}>
                    <button className="btn-done"></button>
                    <p className="task-span">{task.text}</p>
                    <button 
                        id={task.id} 
                        className="btn-delete" 
                        onClick={clickHandler}
                    />
                </div>
            )
        })
    )

}

export default TaskList