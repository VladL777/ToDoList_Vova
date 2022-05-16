//Компонент для вывода задач
import { useSelector, useDispatch } from 'react-redux';
import { DEL_TASK, DONE_TASK } from '../actions.js'

function TaskList() {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    return (
        tasks.map(task => {
            return (
                <div className="div-task" key={task.id}>
                    <button 
                        title="Завершить задачу"
                        className="btn-done"
                        id={task.id}
                        onClick={(event) => dispatch(DONE_TASK(event.target.id))}
                    />
                    <p className="task-span" style={ {textDecoration: task.isDone == "1" ? "line-through" : "none"} } >{task.text}</p>
                    <button 
                        title="Удалить задачу"
                        id={task.id} 
                        className="btn-delete" 
                        onClick={(event) => dispatch(DEL_TASK(event.target.id))}
                    />
                </div>
            )
        })
    )

}

export default TaskList