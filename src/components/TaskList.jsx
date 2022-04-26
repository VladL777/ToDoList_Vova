//Компонент для вывода задач

function TaskList(props) {

    const DelBtnClick = event => {
        props.DelBtnClick(event.target.id)
    }

    const DoneBtnClick = event => {
        props.DoneBtnClick(event.target.id)
    }

    return (
        props.tasks.map(task => {
            return (
                <div className="div-task" key={task.id}>
                    <button 
                        title="Завершить задачу"
                        className="btn-done"
                        id={task.id}
                        onClick={DoneBtnClick}
                    />
                    <p className="task-span" style={ {textDecoration: task.isDone == "1" ? "line-through" : "none"} } >{task.text}</p>
                    <button 
                        title="Удалить задачу"
                        id={task.id} 
                        className="btn-delete" 
                        onClick={DelBtnClick}
                    />
                </div>
            )
        })
    )

}

export default TaskList