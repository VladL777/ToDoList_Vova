//Компонент для ввода задачи
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { INPUT_VAL_CHANGED, ADD_TASK } from "../actions"

const Input = () => {

    const inputVal = useSelector(state => state.inputVal)
    const dispatch = useDispatch()

    const keyPressed = (event) => {
        if (event.key =='Enter') {
            dispatch(ADD_TASK(event.target.value))
            dispatch(INPUT_VAL_CHANGED(''))
        }
    }

    return (
        <div className="div-input">
            <input 
                type="text" 
                value={inputVal}
                autoFocus 
                placeholder="Введите текст новой задачи и нажмите Enter" 
                onChange={(event) => dispatch(INPUT_VAL_CHANGED(event.target.value))}
                onKeyDown={keyPressed}
            />
        </div>
    )
}

export default Input