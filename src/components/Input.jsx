const Input = (props) => {

    const keyEnterPressed = (taskText) => {
        props.keyEnterPressed(taskText)
    }

    return (
        <div className="div-input">
            <input 
                type="text" 
                autoFocus 
                placeholder="Введите текст новой задачи и нажмите Enter" 
                onKeyPress={event => {
                    if (event.key == 'Enter') keyEnterPressed(event.target.value)
                }}
            />
        </div>
    )
}

export default Input