import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string) : void
}


export const TodoForm: React.FC<TodoFormProps> = props =>  {
    const inputTodo = useRef<HTMLInputElement>(null)

    const keyPressChanger = (event: React.KeyboardEvent) =>  {
        if (event.key === 'Enter') {
            props.onAdd(inputTodo.current!.value)
            inputTodo.current!.value= ''

        }else {

        }
    }
    return (
        <div className="input-field mt2">
            <input ref={inputTodo} onKeyPress={keyPressChanger}  id="title"></input>
            <label htmlFor="title" placeholder="title" className="active">
                Add Todo
            </label>
            <div>
            </div>
        </div>
    )
}
