import { useEffect, useState } from 'react'

export function Todo() {
    const [todoList, setTodoList] = useState(["something", "another thing", "more stuff"]);
    const [textBoxContent, setTextBoxContent] = useState("");

    useEffect(() => {
        setTodoList(JSON.parse(localStorage.getItem("todos") ?? []));
        return () => {
            localStorage.setItem("todos", JSON.stringify(todoList));
        };
    }, [todoList]);

    return (
        <>
            <div>
                <input type="text" onChange={event => setTextBoxContent(event.target.value)} />
                <button type="button" onClick={() => {
                    setTodoList(previous => {
                        let array = [...previous, textBoxContent];
                        return array;
                    });
                }}>Add Todo</button>
                {
                    todoList.map((item, index) => (
                        <div key={index}>{item}
                            <button type="button" onClick={() => {
                                setTodoList(previous => previous.filter((_, i) => i !== index));
                            }}>X</button>
                        </div>
                    ))
                }
            </div>    
        </>
    )
}