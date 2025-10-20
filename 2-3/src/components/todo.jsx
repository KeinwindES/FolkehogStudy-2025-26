import { useState } from 'react'

export function Todo() {
    const [todoList, setTodoList] = useState(["something", "another thing", "more stuff"]);
    const [textBoxContent, setTextBoxContent] = useState("");
    
    return (
        <>
            <div>
                <input type="text" onChange={event => setTextBoxContent(event.target.value)} />
                <button type="button" onClick={() => {
                    setTodoList([...todoList, textBoxContent]);
                    setTextBoxContent("");
                }}>Add Todo</button>
                {
                    todoList.map((item, index) => (
                        <div key={index}>
                            <div>{item}</div>
                            <button type="button">X</button>
                        </div>
                    ))
                }
            </div>    
        </>
    )
}