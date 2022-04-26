//Компонент для ввода задачи
import { useState } from "react"

const Input = (props) => {

    const [inputVal, setInputVal] = useState('')

    const inputValueChanged = (event) => {
        setInputVal(event.target.value)
        console.log(event);
    }

    const keyPressed = (event) => {
        if (event.key =='Enter') {
            props.keyEnterPressed(inputVal)
            setInputVal('')
        }
    }

    return (
        <div className="div-input">
            <input 
                type="text" 
                value={inputVal}
                autoFocus 
                placeholder="Введите текст новой задачи и нажмите Enter" 
                onChange={inputValueChanged}
                onKeyDown={keyPressed}
            />
        </div>
    )
}

export default Input