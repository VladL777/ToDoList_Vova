export const DEL_TASK = (id) => ({
    type: 'DEL_TASK',
    id: id
})

export const DONE_TASK = (id) => ({
    type: 'DONE_TASK',
    id: id
})

export const INPUT_VAL_CHANGED = (value) => ({
    type: 'INPUT_VAL_CHANGED',
    value: value
})

export const ADD_TASK = (text) => ({
    type: 'ADD_TASK',
    text: text
})

export const CHANGE_FILTER = (filter_state) => ({
    type: 'CHANGE_FILTER',
    filter: filter_state
})

export const DEL_DONE_TASK = () => ({
    type: 'DEL_DONE_TASK',
})

