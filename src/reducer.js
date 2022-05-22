import { act } from "react-dom/test-utils"

const todolist = {
    tasks: [
        // {
        //     id: 1,
        //     text: 'Задача номер 1',
        //     isDone: false
        // },
        // {
        //     id: 2,
        //     text: 'Задача номер 2',
        //     isDone: false
        // },
        // {
        //     id: 3,
        //     text: 'Задача номер 3',
        //     isDone: false
        // }
    ],
    inputVal: '',
    filter: 'ALL'
}


export const reducer = (state = todolist, action) => {
    switch (action.type) {
            case 'DEL_TASK':
                todolist.tasks = todolist.tasks.filter(el => (el.id != action.id))
                return {...state, tasks: [...todolist.tasks]}
            case 'DONE_TASK':
                todolist.tasks.map(el => {
                    if (el.id == action.id) {
                        el.isDone == true ? el.isDone = false : el.isDone = true 
                    }
                })
                return {...state, tasks: [...todolist.tasks]}
            case 'INPUT_VAL_CHANGED':
                return {...state, inputVal: action.value}
            case 'ADD_TASK':
                let id = Date.now()
                todolist.tasks.push({
                    id: id,
                    text: action.text,
                    isDone: false
                })
                return {...state, tasks: [...todolist.tasks]}
            case 'CHANGE_FILTER':
                return {...state, filter: action.filter}
            case 'DEL_DONE_TASK':
                todolist.tasks = todolist.tasks.filter(el => (el.isDone == false))
                return {...state, tasks: [...todolist.tasks]}
            default:
                return state
    }
}