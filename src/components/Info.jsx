import { useDispatch, useSelector } from "react-redux"
import { CHANGE_FILTER, DEL_DONE_TASK } from '../actions'

const Info = () => {

    const tasks = useSelector(state => state.tasks)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const actTasksQnty = (qntyFilter) => {
        let count = 0
        tasks.map(el => {
            if (qntyFilter == 'ACT' && el.isDone == false) count++
            if (qntyFilter == 'DONE' && el.isDone == true) count++
        })
        return count
    }

    return (
        <div className="div-info">
            <p>Задач: {actTasksQnty('ACT')}</p>
            <div className="div-info-filter-buttons">
                <button onClick={() => dispatch(CHANGE_FILTER('ALL'))}>Все</button>
                <button onClick={() => dispatch(CHANGE_FILTER('ACT'))}>Текущие</button>
                <button onClick={() => dispatch(CHANGE_FILTER('DONE'))}>Завершенные</button>
            </div>
            <div className="div-info-del-done-button">
                <button onClick={() => dispatch(DEL_DONE_TASK())}>Удалить завершенные</button>
                <span>[{actTasksQnty('DONE')}]</span>
            </div>
        </div>
    )
}

export default Info